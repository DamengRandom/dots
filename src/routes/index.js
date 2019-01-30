import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// components
import { Dashboard } from '../containers/Dashboard';
import { CreateDot } from '../containers/Dots/CreateDot';
import { NotFound } from '../containers/NotFound';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Dashboard} exact={true} />
        <Route path="/create-dot" component={CreateDot} exact={true} />
        <Route path="*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export { Routes };
