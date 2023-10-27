/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import { MetricsExplorerMetric } from '../../../../common/custom_threshold_rule/metrics_explorer';
import { createMetricLabel } from './create_metric_label';

describe('createMetricLabel()', () => {
  it('should work with metrics with fields', () => {
    const metric: MetricsExplorerMetric = { aggregation: 'avg', field: 'system.load.1' };
    expect(createMetricLabel(metric)).toBe('avg(system.load.1)');
  });
  it('should work with document count', () => {
    const metric: MetricsExplorerMetric = { aggregation: 'count' };
    expect(createMetricLabel(metric)).toBe('count()');
  });
});
