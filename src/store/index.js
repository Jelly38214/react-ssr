import { Provider } from 'react-redux'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { homeReducer } from '../containers/Home/store'
import { headerReducer } from '../components/Header/store'
import { serverRequest } from '../server/request'
import { clientRequest } from '../client/request'

const reducer = combineReducers({
  home: homeReducer,
  header: headerReducer
})


export const getStore = (req) => createStore(reducer, applyMiddleware(thunk.withExtraArgument(serverRequest(req))))

export const getClientStore = () => {
  const defaultState = window.context.state;
  return createStore(reducer, defaultState, applyMiddleware(thunk.withExtraArgument(clientRequest)))
} 
