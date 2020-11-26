import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Manager from './Pages/Manager'
import Create from './Pages/Create'
import Details from './Pages/Details'
import Login from './Pages/Login'

const App = () => {
  return (
    <Switch>
      <Route path='/auth' component={Login} />
      <Route path='/manager' component={Manager} />
      <Route path='/create' component={Create} />
      <Route path='/detail/:id' component={Details} />
      <Redirect from="*" to="/auth" />
    </Switch>
  )
}

export default App
