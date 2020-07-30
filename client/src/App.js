import React from 'react';
import './css/Main.css';

import { Switch, Route } from 'react-router-dom';

// Pages
import Login from './pages/Login';
import Main from './pages/index';
import ChoosePlan from './pages/ChoosePlan';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Main} />
      <Route path="/login" component={Login} />
      <Route path="/choose-plan" component={ChoosePlan} />
    </Switch>
  );
}

export default App;
