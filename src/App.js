import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Manager from './Pages/Manager'
import Create from './Pages/Create'
import Details from './Pages/Details'
import Login from './Pages/Login'
import Success from './Pages/Success'
import Error from './Pages/Error'
import Perfil from './Containers/Perfil'

const App = () => {
  return (
    <Switch>
      <Route exact path='/auth' component={Login} />
      <Route path='/auth/error' component={Error} />
      <Route path='/manager' component={Manager} />
      <Route exact path='/create' component={Create} />
      <Route exact path='/detail/:id' component={Details} />
      <Route path='/create/success' component={Success} />
      <Route path='/create/error' component={Error} />
      <Route path='/detail/:id/error' component={Error} />
      <Route path='/priority/:id/error' component={Error} />
      <Route path='/suply/:id/error' component={Error} />
      <Route path='/detail/:id/success' component={Success} />
      <Route path='/priority/:id/success' component={Success} />
      <Route path='/suply/:id/success' component={Success} />
      <Route path='/perfil' component={Perfil} />
      <Redirect from="*" to="/auth" />
    </Switch>
  )
}

export default App
