import './app.html'
import './css/app.scss'

import React from 'react'
import { render } from 'react-dom'
import { Route } from 'react-router-dom'
import Loadable from 'react-loadable'

import { Provider } from 'react-redux'
import { applyMiddleware, combineReducers, createStore, compose } from 'redux'
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux'

import createHistory from 'history/createBrowserHistory'

import { ui, activeSession, sessions, token, timerState, time } from './reducers.js'
import { READY } from './consts.js'

const history = createHistory()
const middleware = routerMiddleware(history)
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

let store = createStore(
  combineReducers({
    ui: ui,
    token: token,
    activeSession: activeSession,
    sessions: sessions,
    timerState: timerState,
    time: time,
    router: routerReducer
  }),
  {
    ui: {
      drawer: {
        open: false,
      }
    },
    token: null,
    activeSession: 0,
    sessions: [
      {
       name: 'Session 1',
        scramble: '333'
      }
    ],
    timerState: READY,
    time: {
      currentTime: 0,
      startTime: null
    }
  }, composeEnhancers(
    applyMiddleware(middleware)
  )
)

const Home = Loadable({
  loader: () => import('./views/Home.jsx'),
  loading() {
    return <div>Loading...</div>
  }
})
const Timer = Loadable({
  loader: () => import('./views/Timer.jsx'),
  loading() {
    return <div>Loading...</div>
  }
})
const Login = Loadable({
  loader: () => import('./views/Login.jsx'),
  loading() {
    return <div>Loading...</div>
  }
})

render(
  (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <div>
          <Route exact path='/' component={Home} />
          <Route path='/timer' component={Timer} />
          <Route path='/login' component={Login} />
        </div>
      </ConnectedRouter>
    </Provider>
  ), document.getElementById('app')
)
