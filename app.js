const express = require('express');
const bodyParser = require('body-parser');
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');
const schema = require('./graphql/schema');
const mockServer = require('./graphql/mockServer');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hi');
});

app.use('/graphql', graphqlExpress({
  schema,
}));

app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

module.exports = app;

const { graphql } = require('graphql');

const query = `
  query {
    contacts {
      name
    }
  }
`;

if (process.env.MOCK) {
  mockServer();
}

graphql(schema, query).then((result) => console.log('Got result', result.data.contacts));
