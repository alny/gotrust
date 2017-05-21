import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import store from './store'
import { Home, Verify, List } from './components/containers'
import { Main } from './components/layouts'



const app = (
  <Provider store = { store.configureStore() }>

      <Router history={browserHistory}>

        <Route path="/" component={Main}>
          <IndexRoute component={Home}></IndexRoute>
            <Route path="/verify" component={Verify}></Route>
            <Route path="/list" component={List}></Route>
        </Route>

      </Router>

  </Provider>
)
ReactDOM.render(app, document.getElementById('root'))
