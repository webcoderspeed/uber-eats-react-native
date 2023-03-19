import { createStore } from 'redux';

import reducer from './reducers/index';

const configureStore = (initialState) => {
  return createStore(reducer, initialState);
};

const store =  configureStore();

export default store;
