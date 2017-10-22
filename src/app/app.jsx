import './app.html'
import './css/app.scss'

import React from 'react'
import {render} from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import Loadable from 'react-loadable'

import { createStore } from 'redux'

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
    <BrowserRouter>
      <div>
        <Route exact path='/' component={Home} />
        <Route path='/timer' component={Timer} />
        <Route path='/login' component={Login} />
      </div>
    </BrowserRouter>
  ), document.getElementById('app')
)
