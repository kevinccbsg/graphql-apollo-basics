const { graphql } = require('graphql');
const schema = require('./../../graphql/schema');
const { contacts } = require('../fixtures/contact-fixture');

describe('Contact testing', () => {
  it('Contact list', async () => {
    const query = `
      query {
        contacts {
          name
          lastName
          phone
          companyName
          address
          country
          city
        }
      }
    `;
    const result = await graphql(schema, query, null, { user: 'test' });
    const results = result.data.contacts;
    expect(results).toEqual(contacts);
  });
});