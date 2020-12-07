import React from 'react'
import Header from './components/Header'
import { renderRoutes } from 'react-router-config'
import { headerComponentActions } from './components/Header/store'
import styles from './App.css'

export const App = (props) => {
  if(props.staticContext) {
    props.staticContext.css.push(styles._getCss())
  }

  return (
    <div>
      <Header staticContext={props.staticContext} />
      {renderRoutes(props.route.routes)}
    </div>
  )
}

App.loadData = (store) => {
  return store.dispatch(headerComponentActions.getHeaderInfo())
}
