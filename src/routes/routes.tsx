import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PortalRoute from './PortalRoute';
import { Portal, portals } from '../data/PortalsData';
import Landing from '../pages/Landing';

const Routes = () => {
  const routes = portals.map((portal: Portal) => (
    <PortalRoute key={`${portal.id}`} exact path={`/portals/${portal.id}`} portalObject={portal} />
    )
  );

  console.log(routes)
  return (
  <Switch>
    <Route exact path="/" component={Landing} />
    {
      routes
    }
  </Switch>
  );
};

export default Routes;
