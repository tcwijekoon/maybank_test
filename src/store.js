import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import search from './reducers/search';

const store = createStore(search, applyMiddleware(thunk));

export default store;
