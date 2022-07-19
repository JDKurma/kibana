/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import { NodesChangedRule } from './nodes_changed_rule';
import { RULE_NODES_CHANGED } from '../../common/constants';
import { fetchNodesFromClusterStats } from '../lib/alerts/fetch_nodes_from_cluster_stats';
import { fetchClusters } from '../lib/alerts/fetch_clusters';
import { elasticsearchServiceMock } from '@kbn/core/server/mocks';

const RealDate = Date;

jest.mock('../lib/alerts/fetch_nodes_from_cluster_stats', () => ({
  fetchNodesFromClusterStats: jest.fn(),
}));
jest.mock('../lib/alerts/fetch_clusters', () => ({
  fetchClusters: jest.fn(),
}));

jest.mock('../static_globals', () => ({
  Globals: {
    app: {
      getLogger: () => ({ debug: jest.fn() }),
      config: {
        ui: {
          ccs: { enabled: true },
          container: { elasticsearch: { enabled: false } },
        },
      },
    },
  },
}));

describe('NodesChangedAlert', () => {
  it('should have defaults', () => {
    const rule = new NodesChangedRule();
    expect(rule.ruleOptions.id).toBe(RULE_NODES_CHANGED);
    expect(rule.ruleOptions.name).toBe('Nodes changed');
    expect(rule.ruleOptions.throttle).toBe('1d');
    expect(rule.ruleOptions.actionVariables).toStrictEqual([
      { name: 'added', description: 'The list of nodes added to the cluster.' },
      { name: 'removed', description: 'The list of nodes removed from the cluster.' },
      { name: 'restarted', description: 'The list of nodes restarted in the cluster.' },
      {
        name: 'internalShortMessage',
        description: 'The short internal message generated by Elastic.',
      },
      {
        name: 'internalFullMessage',
        description: 'The full internal message generated by Elastic.',
      },
      { name: 'state', description: 'The current state of the alert.' },
      { name: 'clusterName', description: 'The cluster to which the node(s) belongs.' },
      { name: 'action', description: 'The recommended action for this alert.' },
      {
        name: 'actionPlain',
        description: 'The recommended action for this alert, without any markdown.',
      },
    ]);
  });

  describe('execute', () => {
    function FakeDate() {}

    FakeDate.prototype.valueOf = () => 1;

    const nodeUuid = 'myNodeUuid';
    const nodeEphemeralId = 'myEphemeralId';
    const nodeEphemeralIdChanged = 'myEphemeralIdChanged';
    const nodeName = 'test';
    const ccs = undefined;
    const clusterUuid = 'abc123';
    const clusterName = 'testCluster';
    const nodesChanged = [
      {
        recentNodes: [
          {
            nodeUuid,
            nodeEphemeralId: nodeEphemeralIdChanged,
            nodeName,
          },
        ],
        priorNodes: [
          {
            nodeUuid,
            nodeEphemeralId,
            nodeName,
          },
        ],
        clusterUuid,
        ccs,
      },
    ];
    const nodesAddedChangedRemoved = [
      {
        recentNodes: [
          {
            nodeUuid,
            nodeEphemeralId: nodeEphemeralIdChanged,
            nodeName,
          },
          {
            nodeUuid: 'newNodeId',
            nodeEphemeralId: 'newNodeEmpheralId',
            nodeName: 'newNodeName',
          },
        ],
        priorNodes: [
          {
            nodeUuid,
            nodeEphemeralId,
            nodeName,
          },
          {
            nodeUuid: 'removedNodeId',
            nodeEphemeralId: 'removedNodeEmpheralId',
            nodeName: 'removedNodeName',
          },
        ],
        clusterUuid,
        ccs,
      },
    ];

    const replaceState = jest.fn();
    const scheduleActions = jest.fn();
    const getState = jest.fn();
    const executorOptions = {
      services: {
        scopedClusterClient: elasticsearchServiceMock.createScopedClusterClient(),
        alertFactory: {
          create: jest.fn().mockImplementation(() => {
            return {
              replaceState,
              scheduleActions,
              getState,
            };
          }),
        },
      },
      state: {},
    };

    beforeEach(() => {
      // @ts-ignore
      Date = FakeDate;
      (fetchClusters as jest.Mock).mockImplementation(() => {
        return [{ clusterUuid, clusterName }];
      });
    });

    afterEach(() => {
      Date = RealDate;
      replaceState.mockReset();
      scheduleActions.mockReset();
      getState.mockReset();
    });

    it('should fire actions when nodes change', async () => {
      (fetchNodesFromClusterStats as jest.Mock).mockImplementation(() => {
        return nodesChanged;
      });
      const rule = new NodesChangedRule();
      const type = rule.getRuleType();
      await type.executor({
        ...executorOptions,
        // @ts-ignore
        params: rule.ruleOptions.defaultParams,
      } as any);
      expect(replaceState).toHaveBeenCalledWith({
        alertStates: [
          {
            cluster: { clusterUuid, clusterName },
            ccs,
            itemLabel: undefined,
            nodeId: undefined,
            nodeName: undefined,
            meta: {
              ccs,
              clusterUuid,
              recentNodes: [
                {
                  nodeUuid,
                  nodeEphemeralId: nodeEphemeralIdChanged,
                  nodeName,
                },
              ],
              priorNodes: [
                {
                  nodeUuid,
                  nodeEphemeralId,
                  nodeName,
                },
              ],
            },
            ui: {
              isFiring: true,
              message: {
                text: "Elasticsearch nodes 'test' restarted in this cluster.",
              },
              severity: 'warning',
              triggeredMS: 1,
              lastCheckedMS: 0,
            },
          },
        ],
      });
      expect(scheduleActions).toHaveBeenCalledWith('default', {
        action: '[View nodes](elasticsearch/nodes)',
        actionPlain: 'Verify that you added, removed, or restarted nodes.',
        internalFullMessage:
          'Nodes changed alert is firing for testCluster. The following Elasticsearch nodes have been added: removed: restarted:test. [View nodes](elasticsearch/nodes)',
        internalShortMessage:
          'Nodes changed alert is firing for testCluster. Verify that you added, removed, or restarted nodes.',
        added: '',
        removed: '',
        restarted: 'test',
        clusterName,
        state: 'firing',
      });
    });
    it('should fire actions when nodes added, changed, and removed', async () => {
      (fetchNodesFromClusterStats as jest.Mock).mockImplementation(() => {
        return nodesAddedChangedRemoved;
      });
      const rule = new NodesChangedRule();
      const type = rule.getRuleType();
      await type.executor({
        ...executorOptions,
        // @ts-ignore
        params: rule.ruleOptions.defaultParams,
      } as any);
      expect(replaceState).toHaveBeenCalledWith({
        alertStates: [
          {
            cluster: { clusterUuid, clusterName },
            ccs,
            itemLabel: undefined,
            nodeId: undefined,
            nodeName: undefined,
            meta: {
              ccs,
              clusterUuid,
              recentNodes: [
                {
                  nodeUuid,
                  nodeEphemeralId: nodeEphemeralIdChanged,
                  nodeName,
                },
                {
                  nodeUuid: 'newNodeId',
                  nodeEphemeralId: 'newNodeEmpheralId',
                  nodeName: 'newNodeName',
                },
              ],
              priorNodes: [
                {
                  nodeUuid,
                  nodeEphemeralId,
                  nodeName,
                },
                {
                  nodeUuid: 'removedNodeId',
                  nodeEphemeralId: 'removedNodeEmpheralId',
                  nodeName: 'removedNodeName',
                },
              ],
            },
            ui: {
              isFiring: true,
              message: {
                text: "Elasticsearch nodes 'newNodeName' added to this cluster. Elasticsearch nodes 'removedNodeName' removed from this cluster. Elasticsearch nodes 'test' restarted in this cluster.",
              },
              severity: 'warning',
              triggeredMS: 1,
              lastCheckedMS: 0,
            },
          },
        ],
      });
      expect(scheduleActions).toHaveBeenCalledWith('default', {
        action: '[View nodes](elasticsearch/nodes)',
        actionPlain: 'Verify that you added, removed, or restarted nodes.',
        internalFullMessage:
          'Nodes changed alert is firing for testCluster. The following Elasticsearch nodes have been added:newNodeName removed:removedNodeName restarted:test. [View nodes](elasticsearch/nodes)',
        internalShortMessage:
          'Nodes changed alert is firing for testCluster. Verify that you added, removed, or restarted nodes.',
        added: 'newNodeName',
        removed: 'removedNodeName',
        restarted: 'test',
        clusterName,
        state: 'firing',
      });
    });

    it('should not fire actions if no nodes have changed', async () => {
      (fetchNodesFromClusterStats as jest.Mock).mockImplementation(() => {
        return [
          {
            recentNodes: [
              {
                nodeUuid,
                nodeEphemeralId,
                nodeName,
              },
            ],
            priorNodes: [
              {
                nodeUuid,
                nodeEphemeralId,
                nodeName,
              },
            ],
            clusterUuid,
            ccs,
          },
        ];
      });
      const rule = new NodesChangedRule();
      const type = rule.getRuleType();
      await type.executor({
        ...executorOptions,
        // @ts-ignore
        params: rule.ruleOptions.defaultParams,
      } as any);
      expect(replaceState).not.toHaveBeenCalledWith({});
      expect(scheduleActions).not.toHaveBeenCalled();
    });
  });
});
