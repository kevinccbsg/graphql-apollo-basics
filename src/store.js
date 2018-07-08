import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import reducer from './reducers';

const initState = {};

const store = createStore(
  // combine reducer
  reducer,
  initState, // initial state
  applyMiddleware(logger),
);

export default store;
