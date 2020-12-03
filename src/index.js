import express from 'express'
import React from 'react'
import ReactDOM from 'react-dom/server'
import Home from './containers/Home'

const app = express()

app.get('/', function (req, res) {
  res.send(ReactDOM.renderToString(<Home />))
})

var server = app.listen(3000);