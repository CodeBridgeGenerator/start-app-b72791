const assert = require('assert');
const app = require('../../src/app');

describe('\'lecturer\' service', () => {
  it('registered the service', () => {
    const service = app.service('lecturer');

    assert.ok(service, 'Registered the service (lecturer)');
  });
});
