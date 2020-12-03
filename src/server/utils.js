import React from 'react'
import ReactDOM from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import Routes from '../Routes'
import getStore from '../store'

export const render = (req) => {
  const content = ReactDOM.renderToString((
    // keep store unique for every user. 
    <Provider store={getStore()}>
      <StaticRouter location={req.path} context={{}}>
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