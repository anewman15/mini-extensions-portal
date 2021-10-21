import React from 'react';
import { useSelector } from 'react-redux';
import { Switch } from 'react-router-dom';
import PortalPage from '../pages/PortalPage';
import PortalRoute from './PortalRoute';
import { portals } from '../data/PortalsData';
import { StoreStateType } from '../redux/store/store';

const Routes = () => {
  const user = useSelector((state: StoreStateType) => state.user);

  return (
  <Switch>
    <PortalRoute exact path="/:id" user={user} component={PortalPage} portalObject={portals[0]} />
  </Switch>
  );
};

export default Routes;
