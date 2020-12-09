import React from 'react'
import { Helmet } from 'react-helmet'

const Login = () => {
  return (
    <div>
      <Helmet>
        <title>LoginTitle</title>
        <meta charSet="utf-8" />
        <meta name="description" content="Helmet application" />
      </Helmet>
      <div> Login</div>
    </div>
  )
}

export default Login;