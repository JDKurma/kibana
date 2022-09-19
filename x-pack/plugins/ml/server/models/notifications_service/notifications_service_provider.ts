/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import { IScopedClusterClient } from '@kbn/core/server';
import type { SearchTotalHits } from '@elastic/elasticsearch/lib/api/typesWithBodyKey';
import { MLSavedObjectService } from '../../saved_objects';
import type { NotificationItem, NotificationSource } from '../../../common/types/notifications';
import { ML_NOTIFICATION_INDEX_PATTERN } from '../../../common/constants/index_patterns';
import type {
  MessagesSearchParams,
  NotificationsCountParams,
} from '../../routes/schemas/notifications_schema';
import { NotificationsSearchResponse } from '../../../common/types/notifications';

const MAX_NOTIFICATIONS_SIZE = 10000;

export class NotificationsService {
  constructor(
    private readonly scopedClusterClient: IScopedClusterClient,
    private readonly mlSavedObjectService: MLSavedObjectService
  ) {}

  /**
   * Searches notifications based on the criteria.
   *
   * {@link ML_NOTIFICATION_INDEX_PATTERN} uses job_id field for all types of entities,
   * e.g. anomaly_detector, data_frame_analytics jobs and inference models, hence
   * to make sure the results are space aware, we have to perform separate requests
   * for each type of entities.
   *
   */
  async searchMessages(params: MessagesSearchParams) {
    const [adJobIds, dfaJobIds, modelIds] = await Promise.all([
      this.mlSavedObjectService.getAnomalyDetectionJobIds(),
      this.mlSavedObjectService.getDataFrameAnalyticsJobIds(),
      this.mlSavedObjectService.getTrainedModelsIds(),
    ]);

    const results = await Promise.all(
      [
        { type: 'anomaly_detector', ids: adJobIds },
        { type: 'data_frame_analytics', ids: dfaJobIds },
        { type: 'inference', ids: modelIds },
        { type: 'system' },
      ]
        .filter((v) => v.ids === undefined || v.ids.length > 0)
        .map(async (v) => {
          const responseBody =
            await this.scopedClusterClient.asInternalUser.search<NotificationSource>(
              {
                index: ML_NOTIFICATION_INDEX_PATTERN,
                ignore_unavailable: true,
                from: 0,
                size: MAX_NOTIFICATIONS_SIZE,
                body: {
                  sort: [{ [params.sortField]: { order: params.sortDirection } }],
                  query: {
                    bool: {
                      ...(params.queryString
                        ? {
                            must: [
                              {
                                query_string: {
                                  query: params.queryString,
                                  default_field: 'message',
                                },
                              },
                            ],
                          }
                        : {}),
                      filter: [
                        ...(v.ids
                          ? [
                              {
                                terms: {
                                  job_id: v.ids as string[],
                                },
                              },
                            ]
                          : []),
                        {
                          term: {
                            job_type: {
                              value: v.type,
                            },
                          },
                        },
                        ...(params.earliest || params.latest
                          ? [
                              {
                                range: {
                                  timestamp: {
                                    ...(params.earliest ? { gt: params.earliest } : {}),
                                    ...(params.latest ? { lte: params.latest } : {}),
                                  },
                                },
                              },
                            ]
                          : []),
                      ],
                    },
                  },
                },
              },
              { maxRetries: 0 }
            );

          return {
            total: (responseBody.hits.total as SearchTotalHits).value,
            results: responseBody.hits.hits.map((result) => {
              return {
                ...result._source,
                id: result._id,
              };
            }),
          } as NotificationsSearchResponse;
        })
    );

    const response = results.reduce(
      (acc, curr) => {
        acc.total += curr.total;
        acc.results = acc.results.concat(curr.results);
        return acc;
      },
      { total: 0, results: [] }
    );

    function getSortCallback(
      sortField: keyof NotificationItem,
      sortDirection: 'asc' | 'desc'
    ): (a: NotificationItem, b: NotificationItem) => number {
      if (sortField === 'timestamp') {
        if (sortDirection === 'asc') {
          return (a, b) => a.timestamp - b.timestamp;
        } else {
          return (a, b) => b.timestamp - a.timestamp;
        }
      } else {
        if (sortDirection === 'asc') {
          return (a, b) => (a[sortField] ?? '').localeCompare(b[sortField]);
        } else {
          return (a, b) => (b[sortField] ?? '').localeCompare(a[sortField]);
        }
      }
    }

    response.results = response.results.sort(
      getSortCallback(params.sortField, params.sortDirection)
    );

    return response;
  }

  /**
   * Provides a number of messages by level.
   */
  async countMessages(params: NotificationsCountParams) {
    const responseBody = await this.scopedClusterClient.asInternalUser.search({
      size: 0,
      index: ML_NOTIFICATION_INDEX_PATTERN,
      body: {
        query: {
          bool: {
            filter: {
              range: {
                timestamp: {
                  gt: params.lastCheckedAt,
                },
              },
            },
          },
        },
        aggs: {
          by_level: {
            terms: { field: 'level' },
          },
        },
      },
    });

    // @ts-ignore
    return responseBody.aggregations.by_level.buckets.reduce((acc, curr) => {
      acc[curr.key] = curr.doc_count;
      return acc;
    }, {});
  }
}
