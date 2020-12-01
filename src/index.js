import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter } from 'react-router-dom'
import ReactGA from 'react-ga'

import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
ReactGA.initialize(process.env.REACT_APP_GA)

ReactDOM.render(
  <React.StrictMode>
    <ProviderState>
      <HashRouter>
        <App />
      </HashRouter>
    </ProviderState>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register()
