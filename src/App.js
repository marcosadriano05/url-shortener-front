import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import Home from './pages/Home'
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';

import './App.css';

const App = () => {
  return (
    <div className="app-container">
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/signup" exact component={SignUp} />
          <Route path="/dashboard" exact component={Dashboard} />
        </Switch>
      </Router>
    </div>
  )
}

export default App;
