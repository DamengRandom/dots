import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Navbar } from "dmjs-react-components";
// components
import Dashboard from '../containers/Dashboard';
import { CreateDot } from '../containers/Dots/CreateDot';
import NotFound from '../containers/NotFound';
import { title, links } from '../configs';

const Routes = () => {
  return (
    <BrowserRouter>
      <div>
        <Navbar title={title} links={links} />
        <Switch>
          <Route path="/" component={Dashboard} exact={true} />
          <Route path="/create-dot" component={CreateDot} exact={true} />
          <Route path="*" component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export { Routes };
