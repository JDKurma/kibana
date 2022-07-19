/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import moment from 'moment';
import type { ExceptionListItemSchema } from '@kbn/securitysolution-io-ts-list-types';
import type { PackagePolicy } from '@kbn/fleet-plugin/common/types/models/package_policy';
import { merge } from 'lodash';
import { copyAllowlistedFields, exceptionListAllowlistFields } from './filterlists';
import type { PolicyConfig, PolicyData } from '../../../common/endpoint/types';
import type {
  ExceptionListItem,
  ESClusterInfo,
  ESLicense,
  ListTemplate,
  TelemetryEvent,
} from './types';
import {
  LIST_DETECTION_RULE_EXCEPTION,
  LIST_ENDPOINT_EXCEPTION,
  LIST_ENDPOINT_EVENT_FILTER,
  LIST_TRUSTED_APPLICATION,
} from './constants';
import { tagsToEffectScope } from '../../../common/endpoint/service/trusted_apps/mapping';
import { getDefaultPolicyConfigAccordingToLicenseLevel } from '../../../common/license/policy_config';
import { licenseService } from '../license';

/**
 * Determines the when the last run was in order to execute to.
 *
 * @param executeTo
 * @param lastExecutionTimestamp
 * @returns the timestamp to search from
 */
export const getPreviousDiagTaskTimestamp = (
  executeTo: string,
  lastExecutionTimestamp?: string
) => {
  if (lastExecutionTimestamp === undefined) {
    return moment(executeTo).subtract(5, 'minutes').toISOString();
  }

  if (moment(executeTo).diff(lastExecutionTimestamp, 'minutes') >= 10) {
    return moment(executeTo).subtract(10, 'minutes').toISOString();
  }

  return lastExecutionTimestamp;
};

/**
 * Determines the when the last run was in order to execute to.
 *
 * @param executeTo
 * @param lastExecutionTimestamp
 * @returns the timestamp to search from
 */
export const getPreviousDailyTaskTimestamp = (
  executeTo: string,
  lastExecutionTimestamp?: string
) => {
  if (lastExecutionTimestamp === undefined) {
    return moment(executeTo).subtract(24, 'hours').toISOString();
  }

  if (moment(executeTo).diff(lastExecutionTimestamp, 'hours') >= 24) {
    return moment(executeTo).subtract(24, 'hours').toISOString();
  }

  return lastExecutionTimestamp;
};

/**
 * Chunks an Array<T> into an Array<Array<T>>
 * This is to prevent overloading the telemetry channel + user resources
 *
 * @param telemetryRecords
 * @param batchSize
 * @returns the batch of records
 */
export const batchTelemetryRecords = (
  telemetryRecords: unknown[],
  batchSize: number
): unknown[][] =>
  [...Array(Math.ceil(telemetryRecords.length / batchSize))].map((_) =>
    telemetryRecords.splice(0, batchSize)
  );

/**
 * User defined type guard for PackagePolicy
 *
 * @param data the union type of package policies
 * @returns type confirmation
 */
export function isPackagePolicyList(
  data: string[] | PackagePolicy[] | undefined
): data is PackagePolicy[] {
  if (data === undefined || data.length < 1) {
    return false;
  }

  return (data as PackagePolicy[])[0].inputs !== undefined;
}

/**
 * Maps trusted application to shared telemetry object
 *
 * @param trustedAppExceptionItem
 * @returns collection of trusted applications
 */
export const trustedApplicationToTelemetryEntry = (
  trustedAppExceptionItem: ExceptionListItemSchema
) => {
  return {
    id: trustedAppExceptionItem.id,
    name: trustedAppExceptionItem.name,
    created_at: trustedAppExceptionItem.created_at,
    updated_at: trustedAppExceptionItem.updated_at,
    entries: trustedAppExceptionItem.entries,
    os_types: trustedAppExceptionItem.os_types,
    scope: tagsToEffectScope(trustedAppExceptionItem.tags),
  } as ExceptionListItem;
};

/**
 * Maps endpoint lists to shared telemetry object
 *
 * @param exceptionListItem
 * @returns collection of endpoint exceptions
 */
export const exceptionListItemToTelemetryEntry = (exceptionListItem: ExceptionListItemSchema) => {
  return {
    id: exceptionListItem.id,
    name: exceptionListItem.name,
    created_at: exceptionListItem.created_at,
    updated_at: exceptionListItem.updated_at,
    entries: exceptionListItem.entries,
    os_types: exceptionListItem.os_types,
  } as ExceptionListItem;
};

/**
 * Maps detection rule exception list items to shared telemetry object
 *
 * @param exceptionListItem
 * @param ruleVersion
 * @returns collection of detection rule exceptions
 */
export const ruleExceptionListItemToTelemetryEvent = (
  exceptionListItem: ExceptionListItemSchema,
  ruleVersion: number
) => {
  return {
    id: exceptionListItem.item_id,
    name: exceptionListItem.description,
    rule_version: ruleVersion,
    created_at: exceptionListItem.created_at,
    updated_at: exceptionListItem.updated_at,
    entries: exceptionListItem.entries,
    os_types: exceptionListItem.os_types,
  } as ExceptionListItem;
};

/**
 * Consructs the list telemetry schema from a collection of endpoint exceptions
 *
 * @param listData
 * @param listType
 * @returns lists telemetry schema
 */
export const templateExceptionList = (
  listData: ExceptionListItem[],
  clusterInfo: ESClusterInfo,
  licenseInfo: ESLicense | undefined,
  listType: string
) => {
  return listData.map((item) => {
    const template: ListTemplate = {
      '@timestamp': moment().toISOString(),
      cluster_uuid: clusterInfo.cluster_uuid,
      cluster_name: clusterInfo.cluster_name,
      license_id: licenseInfo?.uid,
    };

    // cast exception list type to a TelemetryEvent for allowlist filtering
    const filteredListItem = copyAllowlistedFields(
      exceptionListAllowlistFields,
      item as unknown as TelemetryEvent
    );

    if (listType === LIST_DETECTION_RULE_EXCEPTION) {
      template.detection_rule = filteredListItem;
      return template;
    }

    if (listType === LIST_TRUSTED_APPLICATION) {
      template.trusted_application = filteredListItem;
      return template;
    }

    if (listType === LIST_ENDPOINT_EXCEPTION) {
      template.endpoint_exception = filteredListItem;
      return template;
    }

    if (listType === LIST_ENDPOINT_EVENT_FILTER) {
      template.endpoint_event_filter = filteredListItem;
      return template;
    }

    return null;
  });
};

/**
 * Convert counter label list to kebab case
 *
 * @param label_list the list of labels to create standardized UsageCounter from
 * @returns a string label for usage in the UsageCounter
 */
export const createUsageCounterLabel = (labelList: string[]): string => labelList.join('-');

/**
 * Resiliantly handles an edge case where the endpoint config details are not present
 *
 * @returns the endpoint policy configuration
 */
export const extractEndpointPolicyConfig = (policyData: PolicyData | null) => {
  const epPolicyConfig = policyData?.inputs[0]?.config?.policy;
  const defaultPolicyConfig = getDefaultPolicyConfigAccordingToLicenseLevel(
    licenseService.getLicenseInformation()
  );
  return epPolicyConfig != null
    ? {value: merge(defaultPolicyConfig, epPolicyConfig.value)}
    : {value: defaultPolicyConfig};
};

export const addDefaultAdvancedPolicySettings = (policyConfig: PolicyConfig) => {
  const defaultAdvancedSettings = {
    "linux": {
      "advanced": {
        "agent": {
          "connection_delay": 60
        },
        "artifacts": {
          "global": {
            "base_url": "",
            "manifest_relative_url": "",
            "public_key": "",
            "interval": 300
          },
          "user": {
            "public_key": "",
            "ca_cert": ""
          }
        },
        "elasticsearch": {
          "delay": 600,
          "tls": {
            "verify_peer": true,
            "verify_hostname": true,
            "ca_cert": ""
          }
        },
        "logging": {
          "file": "info",
          "syslog": "off"
        },
        "diagnostic": {
          "enabled": true
        },
        "malware": {
          "quarantine": true
        },
        "memory_protection": {
          "memory_scan_collect_sample": false,
          "memory_scan": true
        },
        "kernel": {
          "capture_mode": "auto"
        },
        "event_filter": {
          "default": true
        },
        "utilization_limits": {
          "cpu": 50
        }
      }
    },
    "mac": {
      "advanced": {
        "agent": {
          "connection_delay": 60
        },
        "artifacts": {
          "global": {
            "base_url": "",
            "manifest_relative_url": "",
            "public_key": "",
            "interval": 300
          },
          "user": {
            "public_key": "",
            "ca_cert": ""
          }
        },
        "elasticsearch": {
          "delay": 600,
          "tls": {
            "verify_peer": true,
            "verify_hostname": true,
            "ca_cert": ""
          }
        },
        "logging": {
          "file": "info",
          "syslog": "off"
        },
        "malware": {
          "quarantine": true,
          "threshold": "normal"
        },
        "kernel": {
          "connect": true,
          "process": true,
          "filewrite": true,
          "network": true,
          "network_extension": {
            "enable_content_filtering": true,
            "enable_packet_filtering": true
          }
        },
        "harden": {
          "self_protect": true
        },
        "diagnostic": {
          "enabled": true
        },
        "alerts": {
          "cloud_lookup": true
        },
        "memory_protection": {
          "memory_scan_collect_sample": false,
          "memory_scan": true
        },
        "event_filter": {
          "default": true
        }
      }
    },
    "windows": {
      "advanced": {
        "agent": {
          "connection_delay": 60
        },
        "artifacts": {
          "global": {
            "base_url": "",
            "manifest_relative_url": "",
            "public_key": "",
            "interval": 300
          },
          "user": {
            "public_key": "",
            "ca_cert": ""
          }
        },
        "elasticsearch": {
          "delay": 600,
          "tls": {
            "verify_peer": true,
            "verify_hostname": true,
            "ca_cert": ""
          }
        },
        "logging": {
          "file": "info",
          "debugview": "off"
        },
        "malware": {
          "quarantine": true,
          "threshold": "normal"
        },
        "kernel": {
          "connect": true,
          "process": true,
          "filewrite": true,
          "network": true,
          "fileopen": true,
          "asyncimageload": true,
          "syncimageload": true,
          "registry": true,
          "fileaccess": true,
          "registryaccess": true
        },
        "diagnostic": {
          "enabled": true,
          "rollback_telemetry_enabled": true
        },
        "alerts": {
          "cloud_lookup": true
        },
        "ransomware": {
          "mbr": true,
          "canary": true
        },
        "memory_protection": {
          "shellcode": true,
          "memory_scan": true,
          "shellcode_collect_sample": false,
          "memory_scan_collect_sample": false,
          "shellcode_enhanced_pe_parsing": true,
          "shellcode_trampoline_detection": true
        },
        "events": {
          "etw": "" // ! Can't find default
        },
        "event_filter": {
          "default": true
        },
        "utilization_limits": {
          "cpu": 50
        },
        "rollback": "" // ! Can't find default
      }
    }
  };
  return merge(defaultAdvancedSettings, policyConfig);
}
