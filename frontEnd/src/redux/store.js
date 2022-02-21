import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

import reducers from './reducers/main';

const initialState ={};

const middleware = applyMiddleware( thunk);

const store = createStore(reducers,initialState, composeWithDevTools(middleware));

export default store;