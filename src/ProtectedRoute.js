import React from 'react'
import { Redirect, Route } from 'react-router-dom'

const ProtectedRoute = ({
  component,
  path,
  exact,
}) => {
  const isAuthenticated = localStorage.getItem('token')
    return (
      isAuthenticated
        ? <Route component={component} path={path} exact={exact} />
        : <Redirect to={{ pathname: '/auth' }} />
    )
}

export default ProtectedRoute
