const { makeExecutableSchema } = require('graphql-tools');
const querys = require('./querys');
const Contact = require('./types/Contact');
const resolvers = require('./resolvers');

const schema = makeExecutableSchema({
  typeDefs: [querys, Contact],
  resolvers,
});

module.exports = schema;
