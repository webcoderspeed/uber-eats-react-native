import { combineReducers } from 'redux';
import cartReducer from './cart.reducer';

const reducers = combineReducers({
  cartReducer,
});

const rootReducer = (state, action) => reducers(state, action);

export default rootReducer;
