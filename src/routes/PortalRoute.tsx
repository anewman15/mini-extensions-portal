import React, { ReactElement } from 'react';
import { Route } from 'react-router';
import { Record, FieldSet } from 'airtable';
import { Portal } from '../data/PortalsData';

type PortalRouteProps = {
  exact: boolean,
  path: string,
  user: Record<FieldSet> | {},
  component: any,
  portalObject: Portal,
};

const PortalRoute = ({ user, component: Component, ...others }: PortalRouteProps): ReactElement => (
  <Route
    {...others}
    render={(props: any) => {
      return <Component {...others} {...props} />;
      }
    }
  />
);

export default PortalRoute
