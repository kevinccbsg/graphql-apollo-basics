const { makeExecutableSchema } = require('graphql-tools');
const querys = require('./querys');
const Contact = require('./types/Contact');

const typeDefs = `
  ${querys}
  ${Contact}
`;

const schema = makeExecutableSchema({
  typeDefs,
});

module.exports = schema;
