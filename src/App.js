import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Manager from './Pages/Manager'
import Create from './Pages/Create'
import Signature from './Pages/Signature'
import Details from './Pages/Details'
import Release from './Pages/Release'
import Login from './Pages/Login'

const App = () => {
  return (
    <Switch>
      <Route path='/auth' component={Login} />
      <Route path='/manager' component={Manager} />
      <Route path='/create' component={Create} />
      <Route path='/signature' component={Signature} />
      <Route path='/detail/:id' component={Details} />
      <Route path='/release/:id' component={Release} />
      <Redirect from="*" to="/auth" />
    </Switch>
  )
}

export default App
