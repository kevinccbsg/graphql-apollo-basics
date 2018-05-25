const { mockServer } = require('graphql-tools');
const _ = require('lodash');
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

  describe('Contact schema', () => {
    const schemaFields = [
      'name',
      'lastName',
      'phone',
      'companyName',
      'address',
      'country',
      'city',
    ];
    const subSchema = ['friends'];
    it('should have return correct properties', async () => {
      const query = `
        query {
          contacts {
            ${schemaFields.join('\n')}
            friends {
              name
            }
          }
        }
      `;
      const result = await MockServer.query(query);
      const results = result.data.contacts;
      expect(_.isArray(results)).toBe(true);
      expect(_.isEqual(Object.keys(results[0]), schemaFields.concat(subSchema))).toBe(true);
    });
  });
});
