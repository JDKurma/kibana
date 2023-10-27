/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import '../../../../../__mocks__/shallow_useeffect.mock';

import { setMockValues } from '../../../../../__mocks__/kea_logic';

import React from 'react';

import { shallow } from 'enzyme';

import { Routes, Route } from '@kbn/shared-ux-router';

import { DisplaySettings } from './display_settings';
import { DisplaySettingsRouter } from './display_settings_router';

describe('DisplaySettingsRouter', () => {
  it('renders', () => {
    setMockValues({ isOrganization: true });
    const wrapper = shallow(<DisplaySettingsRouter />);

    expect(wrapper.find(DisplaySettings)).toHaveLength(2);
    expect(wrapper.find(Routes)).toHaveLength(1);
    expect(wrapper.find(Route)).toHaveLength(2);
  });
});
