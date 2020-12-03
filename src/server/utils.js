import React from 'react'
import ReactDOM from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import Routes from '../Routes'

export const render = (req) => {
  const content = ReactDOM.renderToString((
    <StaticRouter location={req.path} context={{}}>
      {Routes}
    </StaticRouter>
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