const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');
const schema = require('./graphql/schema');
const mockServer = require('./graphql/mockServer');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/graphql', graphqlExpress((req) => {
  console.log('middleware');
  return {
    schema,
    context: {
      user: 'demo',
    },
  };
}));

app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'dist', 'index.html'));
});

if (process.env.MOCK) {
  mockServer();
}

module.exports = app;
