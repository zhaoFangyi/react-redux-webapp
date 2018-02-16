import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import {
  BrowserRouter,
  Route,
  // Redirect,
  Switch,
} from 'react-router-dom'

import AuthRoute from './component/authroute/authroute'
import Login from './container/login/login'
import Register from './container/register/register'
import BossInfo from './container/bossinfo/bossinfo'
import GeniusInfo from './container/geniusinfo/geniusinfo'
import Dashboard from './container/dashboard/dashboard'
import reducers from './reducer'
import './config'
import './index.css'

const store = createStore(reducers, compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f
))

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <AuthRoute />
        <Switch>
          <Route path='/bossinfo' component={BossInfo} />
          <Route path='/geniusinfo' component={GeniusInfo} />
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
          <Route component={Dashboard} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
