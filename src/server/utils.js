import React from 'react'
import ReactDOM from 'react-dom/server'
import { StaticRouter, Switch } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import { Provider } from 'react-redux'
import { Helmet } from 'react-helmet'

// 在这里，拿到异步数据，并填充到store之中
// store里面到底填充什么并不知道 ，需要结合当前访问的路径和路由做判断
// 如果用户访问 / 路径，我们就拿home组件的异步数据
// 如果用户访问 /login 路径，我们就拿login组件的异步数据

// 根据路由的路径，往store里面加载数据

export const render = (store, Routes, req, context) => {

  const content = ReactDOM.renderToString((
    // keep store unique for every user. 
    <Provider store={store}>
      <StaticRouter location={req.path} context={context}>
        <Switch>
          {renderRoutes(Routes)}
        </Switch>
      </StaticRouter>
    </Provider>
  ))
  const helmet = Helmet.renderStatic()

  const cssString = context.css.join('\n')

  return (
    `
      <html>
      <head>
        ${helmet.title.toString()}
        ${helmet.meta.toString()}
        ${cssString && `<style type="text/css">${cssString}</style>`}
      </head> 
      <body>
        <div id="root">${content}</div> 
        <script>
          // 注水
          window.context = {
            state: ${JSON.stringify(store.getState())}
          } 
        </script>
        <script src='/index.js'></script>
      </body>
      </html> 
    `
  )
}