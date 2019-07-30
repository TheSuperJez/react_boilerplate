import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';
import { UserReducer as user } from '../ducks/User';
import defaultState from './InitialState';

function configureStore(initialState) {
  const store = createStore(
    combineReducers({ user }),
    initialState, applyMiddleware(logger));
  return store;
}

export default configureStore(defaultState);
