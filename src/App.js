import React from 'react'
import Header from './components/Header'
import { renderRoutes } from 'react-router-config'
import { headerComponentActions } from './components/Header/store'

export const App = (props) => {
  return (
    <div>
      <Header />
      {renderRoutes(props.route.routes)}
    </div>
  )
}

App.loadData = (store) => {
  return store.dispatch(headerComponentActions.getHeaderInfo())
}
