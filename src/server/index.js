import express from 'express'
import proxy from 'express-http-proxy'
import { render } from './utils'
import { matchRoutes } from 'react-router-config'
import Routes from '../Routes'
import { getStore } from '../store'

const app = express()
app.use(express.static('public'))
app.use('/nodeapi', proxy('https://cz.droomo.top/mock/5dbfda1488b2265d7e2525b2', {
  proxyReqOptDecorator: function (proxyReqOpts, originalReq) {
    proxyReqOpts.rejectUnauthorized = false
    return proxyReqOpts;
  }
}))

app.get('*', (req, res) => {
  const store = getStore();
  const matchedRoutes = matchRoutes(Routes, req.path)

  // 让matchedRoutes里面的所有的组件，对应的loadData方法执行一次
  const promises = [];
  matchedRoutes.forEach(item => {
    if (item.route.loadData) promises.push(item.route.loadData(store))
  })
  Promise.all(promises).then(() => {
    res.send(render(store, Routes, req));
  })
})

var server = app.listen(3000);