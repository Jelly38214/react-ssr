import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

const reducer = (state = { name: 'jelly' }, action) => {
  return state;
}

const getStore = () => createStore(reducer, applyMiddleware(thunk))

export default getStore;