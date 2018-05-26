const { graphql } = require('graphql');
const schema = require('./../../graphql/schema');
const { contacts, newContact } = require('../fixtures/contact-fixture');

describe('Contact testing', () => {
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
  it('Contact list', async () => {
    const result = await graphql(schema, query, null, { user: 'test' });
    const results = result.data.contacts;
    expect(results).toEqual(contacts);
  });

  it('New Contact', async () => {
    const mutation = `
      mutation createNewContact($newContact: NewContact){
        createContact(contact: $newContact) {
          name
          lastName
          phone
        }
      }
    `;
    const result = await graphql(schema, mutation, null, { user: 'test' }, { newContact });
    const results = result.data.createContact;
    expect(results).toEqual(newContact);
    const getContact = await graphql(schema, query, null, { user: 'test' });
    const { contacts } = getContact.data;
    expect(contacts.length).toEqual(contacts.length);
  });
});