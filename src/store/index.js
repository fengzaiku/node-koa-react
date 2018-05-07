import { createStore, combineReducers ,applyMiddleware} from 'redux'
import {routerReducer } from 'react-router-redux'
import thunk from 'redux-thunk'

import reducers from '../reducer/'


const store = createStore(
    reducers,
    applyMiddleware(thunk)
  )


export default store

