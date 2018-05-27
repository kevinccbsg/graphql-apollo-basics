import React from 'react';
import { render } from 'react-dom';
import ApolloClient from 'apollo-boost';
import gql from 'graphql-tag';
import 'semantic-ui-css/semantic.min.css';
import './styles/style.styl';
import App from './App';

const client = new ApolloClient();

client
  .query({
    query: gql`{
      contacts {
        name
        lastName
        phone
        companyName
        address
        country
        city
      }
    }`
  })
  .then(result => console.log(result));


render((
  <App />
), document.getElementById('root'));
