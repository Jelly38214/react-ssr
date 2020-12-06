import React from 'react'
import Home from './containers/Home'
import Login from './containers/Login'
import { App } from './App'

export default [
  {
    path: '/',
    component: App,
    key: 'App',
    loadData: (store) => App.loadData(store),
    routes: [
      {
        path: '/',
        component: Home,
        exact: true,
        key: 'home',
        loadData: (store) => Home.loadData(store),
      },
      {
        path: '/login',
        component: Login,
        exact: true,
        key: 'login'
      }
    ]
  }
]
