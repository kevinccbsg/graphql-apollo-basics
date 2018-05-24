const express = require('express');
const bodyParser = require('body-parser');
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');
const { makeExecutableSchema } = require('graphql-tools');

const PORT = process.env.PORT || 3000;

const app = express();

app.get('/', (req, res) => {
  res.send('Hi');
});

module.exports = app;
