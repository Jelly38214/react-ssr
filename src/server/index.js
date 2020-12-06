import express from 'express'
import { createProxyMiddleware } from 'http-proxy-middleware'
import { render } from './utils'
import { matchRoutes } from 'react-router-config'
import Routes from '../Routes'
import { getStore } from '../store'

const app = express()
app.use(express.static('public'))
app.use('/nodeapi', createProxyMiddleware({ target: 'https://cz.droomo.top/mock/5bf3aa57bc19540767dd9451/example', pathRewrite: { '^/nodeapi': '' }, secure: false, changeOrigin: true }))

app.get('*', (req, res) => {
  const store = getStore(req);
  const matchedRoutes = matchRoutes(Routes, req.path)

  // 让matchedRoutes里面的所有的组件，对应的loadData方法执行一次
  const promises = [];
  matchedRoutes.forEach(item => {
    if (item.route.loadData) {
      const _promise = new Promise((resolve, reject) => {
        item.route.loadData(store).then(resolve).catch(resolve)
      })

      promises.push(_promise)
    } 
  })

  Promise.all(promises).then(() => {
    const context = {};
    const html = render(store, Routes, req, context);

    // 301, 需要Redirect组件配置使用
    if (context.action === 'REPLACE') {
      res.redirect(301, context.action.url)
    }

    // 404
    if (context.NotFound) {
      res.status(404).send(html).end()
    }

    res.send(html);
  })
})

var server = app.listen(3000);