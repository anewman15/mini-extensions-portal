import React, { ReactElement } from 'react';
import { Route } from 'react-router';
import { Portal } from '../data/PortalsData';
import PortalPage from '../pages/PortalPage';

type PortalRouteProps = {
  exact: boolean,
  path: string,
  portalObject: Portal,
};

const PortalRoute = (portalProps: PortalRouteProps): ReactElement => {
  return (
    <Route
      {...portalProps}
      render={
          (props: any) => {
            return <PortalPage {...portalProps} {...props} />;
        }
      }
    />
  )
};

export default PortalRoute
