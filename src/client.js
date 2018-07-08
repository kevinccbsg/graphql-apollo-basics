import React from 'react';
import { render } from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { Provider } from 'react-redux';
import 'semantic-ui-css/semantic.min.css';
import './styles/style.styl';
import App from './App';
import store from './store';

const client = new ApolloClient();

render((
  <ApolloProvider client={client}>
    <Provider store={store}>
      <App />
    </Provider>
  </ApolloProvider>
), document.getElementById('root'));
