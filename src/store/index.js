import { Provider } from 'react-redux'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { homeReducer } from '../containers/Home/store'
import { serverRequest } from '../server/request'
import { clientRequest } from '../client/request'

const reducer = combineReducers({
  home: homeReducer
})


export const getStore = () => createStore(reducer, applyMiddleware(thunk.withExtraArgument(serverRequest)))

export const getClientStore = () => {
  const defaultState = window.context.state;
  return createStore(reducer, defaultState, applyMiddleware(thunk.withExtraArgument(clientRequest)))
} 
