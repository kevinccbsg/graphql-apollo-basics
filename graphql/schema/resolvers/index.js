const { contacts, createContact } = require('./contact');

const resolvers = {
  Query: {
    contacts, 
  },
  Mutation: {
    createContact,
  },
};

module.exports = resolvers;
