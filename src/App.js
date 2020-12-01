import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import ProtectedRoute from './ProtectedRoute.js'

import Manager from './Pages/Manager'
import Create from './Pages/Create'
import Details from './Pages/Details'
import Login from './Pages/Login'
import Success from './Pages/Success'
import Error from './Pages/Error'
import Profile from './Pages/Profile'

const App = () => {
  return (
    <Switch>
      <Route exact path='/auth' component={Login} />
      <Route path='/auth/error' component={Error} />
      <ProtectedRoute path='/manager' component={Manager} />
      <ProtectedRoute exact path='/create' component={Create} />
      <ProtectedRoute exact path='/detail/:id' component={Details} />
      <ProtectedRoute path='/create/success' component={Success} />
      <ProtectedRoute path='/create/error' component={Error} />
      <ProtectedRoute path='/detail/:id/error' component={Error} />
      <ProtectedRoute path='/priority/:id/error' component={Error} />
      <ProtectedRoute path='/suply/:id/error' component={Error} />
      <ProtectedRoute path='/detail/:id/success' component={Success} />
      <ProtectedRoute path='/priority/:id/success' component={Success} />
      <ProtectedRoute path='/suply/:id/success' component={Success} />
      <ProtectedRoute path='/profile' component={Profile} />
      <Redirect from="*" to="/auth" />
    </Switch>
  )
}

export default App
