import React from 'react';
import ReactDOM from 'react-dom';
import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter } from 'react-router-redux';
import { Provider } from 'react-redux';

import {Route, Switch} from 'react-router';
import Login from './containers/Login';
import PrivateRoute from './containers/PrivateRoute';
import Chord from './components/Chord'

import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import App from './App';
import configureStore from './store';

const history = createHistory()
const store = configureStore(history)

ReactDOM.render((
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path = '/login' component = {Login} />
        <Route path = '/chords' component = {Chord} />
        <PrivateRoute path = '/' component = {App} />
      </Switch>
    </ConnectedRouter>
  </Provider>
), document.getElementById('root'));
