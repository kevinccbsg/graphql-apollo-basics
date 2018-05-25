const { makeExecutableSchema } = require('graphql-tools');
const querys = require('./querys');
const Contact = require('./types/Contact');
const resolvers = require('./resolvers');

const typeDefs = `
  ${querys}
  ${Contact}
`;

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

module.exports = schema;
