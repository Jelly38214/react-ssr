import React from 'react'
import ReactDOM from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import Routes from '../Routes'

export const render = (req) => {
  const reducer = (state = { name: 'jelly' }, action) => {
    return state;
  }
  const store = createStore(reducer, applyMiddleware(thunk));
  const content = ReactDOM.renderToString((
    <Provider store={store}>
      <StaticRouter location={req.path} context={{ store }}>
        {Routes}
      </StaticRouter>
    </Provider>
  ))

  return `
  <html>
    <head>
      <title>ssr</title> 
    </head> 
    <body>
      <div id="root">${content}</div> 
      <script src='/index.js'></script>
    </body>
  </html> 
`
}