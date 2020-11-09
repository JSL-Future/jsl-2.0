import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Manager from './Pages/Manager'
import Create from './Pages/Create'
import Signature from './Pages/Signature'
import Details from './Pages/Details'
import Release from './Pages/Release'

const App = () => {
  return (
    <Switch>
      <Route path='/manager' component={Manager} />
      <Route path='/create' component={Create} />
      <Route path='/signature' component={Signature} />
      <Route path='/detail/:id' component={Details} />
      <Route path='/release/:id' component={Release} />
      <Redirect path="/" to="/manager" />
    </Switch>
  )
}

export default App
