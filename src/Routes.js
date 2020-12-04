import React from 'react'
import { Route } from 'react-router-dom'
import Home from './containers/Home'
import Login from './containers/Login'

export default [
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
