import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Navbar } from "dmjs-react-components";
// components
import { Dashboard } from '../containers/Dashboard';
import { CreateDot } from '../containers/Dots/CreateDot';
import { NotFound } from '../containers/NotFound';

const Routes = () => {
  const title = "Dots ..";
  const links = [
    { type: 'route', name: 'Create Dot', url: '/create-dot' },
    { type: 'icon', target: '_blank', href: 'https://github.com/DamengRandom', icon: 'fab fa-github' },
  ];
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
