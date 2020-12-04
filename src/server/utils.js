import React from 'react'
import ReactDOM from 'react-dom/server'
import { matchPath, StaticRouter, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import Routes from '../Routes'
import getStore from '../store'

// 在这里，拿到异步数据，并填充到store之中
// store里面到底填充什么并不知道 ，需要结合当前访问的路径和路由做判断
// 如果用户访问 / 路径，我们就拿home组件的异步数据
// 如果用户访问 /login 路径，我们就拿login组件的异步数据

// 根据路由的路径，往store里面加载数据

export const render = (req) => {
  const store = getStore();
  const matchRoutes = [];
  Routes.forEach(route => {
    if (matchPath(req.path, route)) matchRoutes.push(route)
  })
  // 让matchRoutes里面的所有的组件，对应的loadData方法执行一次

  const content = ReactDOM.renderToString((
    // keep store unique for every user. 
    <Provider store={store}>
      <StaticRouter location={req.path} context={{}}>
        <Switch>
          {Routes.map(item => <Route {...item} />)}
        </Switch>
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