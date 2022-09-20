/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import type { Logger } from '@kbn/core/server';
import { getPreviousDiagTaskTimestamp } from '../helpers';
import type { ITelemetryEventsSender } from '../sender';
import type { TelemetryConfiguration } from '../types';
import type { ITelemetryReceiver } from '../receiver';
import type { TaskExecutionPeriod } from '../task';
import { artifactService } from '../artifact';
import { telemetryConfiguration } from '../configuration';

export function createTelemetryConfigurationTaskConfig() {
  return {
    type: 'security:endpoint-configuration',
    title: 'Security Solution Telemetry Configuration task',
    interval: '30m',
    timeout: '1m',
    version: '1.0.0',
    getLastExecutionTime: getPreviousDiagTaskTimestamp,
    runTask: async (
      taskId: string,
      logger: Logger,
      receiver: ITelemetryReceiver,
      sender: ITelemetryEventsSender,
      taskExecutionPeriod: TaskExecutionPeriod
    ) => {
      const artifactName = 'diagnostic-configuration-v1';
      const configArtifact = artifactService.getArtifact(artifactName) as unknown as TelemetryConfiguration;
      telemetryConfiguration.max_detection_alerts_batch = configArtifact.max_detection_alerts_batch;
      telemetryConfiguration.telemetry_max_buffer_size = configArtifact.telemetry_max_buffer_size;
      telemetryConfiguration.max_detection_rule_telemetry_batch =
        configArtifact.max_detection_rule_telemetry_batch;
      telemetryConfiguration.max_endpoint_telemetry_batch =
        configArtifact.max_endpoint_telemetry_batch;
      telemetryConfiguration.max_security_list_telemetry_batch =
        configArtifact.max_security_list_telemetry_batch;
      return 0;
    },
  };
}
