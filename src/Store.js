import { createStore } from 'redux';
import { applyMiddleware } from 'redux';
import reducer from './Reducer/Reducer'
import logger from 'redux-logger'
import thunk from 'redux-thunk';
const store =createStore(reducer,applyMiddleware(logger,thunk))
export default store;