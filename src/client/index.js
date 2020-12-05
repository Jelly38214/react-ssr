import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import { Provider } from 'react-redux'
import Routes from '../Routes'
import { getClientStore } from '../store'

const App = () => {
  return (
    <Provider store={getClientStore()}>
      <BrowserRouter>
        <Switch>
          {renderRoutes(Routes)}
        </Switch>
      </BrowserRouter>
    </Provider>
  )
}

ReactDOM.hydrate(<App />, document.getElementById('root'))