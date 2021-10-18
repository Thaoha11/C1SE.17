import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import './index.css';
import App from './App';

import Home from './Component/Home';
import ListProfile from './Component/ListProfile';

import reportWebVitals from './reportWebVitals';
import Detail from './Component/Detail';
import Login from './Component/Login';
import Place from './Component/Place';
import Admin from './Component/Admin';
import UserProfile from './Component/UserProfile';
import Register from './Component/Register';

ReactDOM.render(
  <div>
    <Router>
      <App>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/list' component={ListProfile} />
          <Route path='/detail' component={Detail} />
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
          <Route path='/place' component={Place} />
          <Route path='/admin' component={Admin} />
          <Route path='/userprofile' component={UserProfile} />
        </Switch>
      </App>
    </Router>
  </div>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
