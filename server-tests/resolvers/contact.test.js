const { graphql } = require('graphql');
const schema = require('./../../graphql/schema');
const { contacts, newContact } = require('../fixtures/contact-fixture');

describe('Contact testing', () => {
  it('Contact list', async () => {
    const query = `
      query {
        contacts {
          id
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

  it('New Contact', async () => {
    const mutation = `
      mutation createContact($newContact: NewContact){
        createContact(contact: $newContact) {
          name
          lastName
          phone
        }
      }
    `;
    const result = await graphql(schema, mutation, null, { newContact });
    console.log(result);
    const results = result.data.contact;
    expect(results).toEqual(newContact);
  });
});