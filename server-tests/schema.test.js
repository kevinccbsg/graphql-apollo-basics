const { mockServer } = require('graphql-tools');
const schema = require('../graphql/schema');
const appMockFunctions = require('../graphql/mockServer');

describe('GraphQL schema', () => {
  let MockServer;
  beforeAll(() => {
    MockServer = mockServer(schema);
    appMockFunctions();
  });
  it('Has valid definitions', () => {
    expect(async() => {
      await MockServer.query(`{ __schema { types { name } } }`);
    }).not.toThrow();
  });
});
