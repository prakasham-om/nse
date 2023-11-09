import thunk from 'redux-thunk';
import { legacy_createStore as createStore,combineReducers,applyMiddleware } from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension'

import fetchReducer from './reducer/bn_reducer.js'


const reducer=combineReducers({
    bnOption:fetchReducer
})

const middleware=[thunk]

const store=createStore(reducer,composeWithDevTools(applyMiddleware(...middleware)));


export default store