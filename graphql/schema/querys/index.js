
module.exports = `
  type Query {
    contacts: [Contact]
  }

  type Mutation {
    createContact(contact: NewContact): Contact
  }
`;
