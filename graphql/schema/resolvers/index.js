const { contacts } = require('./contact');

const resolvers = {
  Query: {
    contacts, 
  },
};

module.exports = resolvers;
