import React, { ReactElement } from 'react';
import { useSelector } from 'react-redux';
import { Route } from 'react-router';
import Login from '../components/Login';
import { Portal } from '../data/PortalsData';
import PortalPage from '../pages/PortalPage';
import { StoreStateType } from '../redux/store/store';

type PortalRouteProps = {
  exact: boolean,
  path: string,
  portalObject: Portal,
};

const PortalRoute = (portalProps: PortalRouteProps): ReactElement => {
  const user = useSelector((state: StoreStateType) => state.user);
  return (
    <Route
      {...portalProps}
      render={
          (props: any) => {
          if (Object.keys(user).length) {
            return <PortalPage {...portalProps} {...props} />;
          } else {
            const { portalObject } = portalProps;
            return <Login portal={portalObject} {...props} />;
          }
        }
      }
    />
  )
};

export default PortalRoute
