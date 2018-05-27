import React from 'react';
import { render } from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import 'semantic-ui-css/semantic.min.css';
import './styles/style.styl';
import App from './App';

const client = new ApolloClient();

render((
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
), document.getElementById('root'));
