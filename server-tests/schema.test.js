const { mockServer } = require('graphql-tools');
const schema = require('../graphql/schema');
const appMockServer = require('../graphql/mockServer');

describe('GraphQL schema', () => {
  appMockServer();
  it('Has valid definitions', () => {
    const MockServer = mockServer(schema);

    expect(async() => {
      await MockServer.query(`{ __schema { types { name } } }`);
    }).not.toThrow();
  });
});
