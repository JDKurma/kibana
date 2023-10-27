/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import expect from '@kbn/expect';
import { FtrProviderContext } from '../../../ftr_provider_context';

export default function ({ getService }: FtrProviderContext) {
  const supertest = getService('supertest');

  describe('translations', () => {
    it(`returns the translations with the correct headers`, async () => {
      await supertest.get('/translations/en.json').then((response) => {
        expect(response.body.locale).to.eql('en');

        expect(response.header).to.have.property('content-type', 'application/json; charset=utf-8');
        expect(response.header).to.have.property('cache-control', 'must-revalidate');
        expect(response.header).to.have.property('etag');
      });
    });

    it(`returns a 404 when not using the correct locale`, async () => {
      await supertest.get('/translations/foo.json').then((response) => {
        expect(response.status).to.eql(404);
      });
    });
  });
}
