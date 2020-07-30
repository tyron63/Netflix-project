import React from 'react';
import './css/Main.css';

import { Switch, Route } from 'react-router-dom';

// Pages
import Login from './pages/Login';
import Main from './pages/index';
import SignUp from './pages/SignUp';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Main} />
      <Route path="/login" component={Login} />
      <Route path="/signUp" component={SignUp} />
    </Switch>
  );
}

export default App;
