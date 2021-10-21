import React from 'react'
import { Route, Redirect } from 'react-router';

export const AuthenticatedRoute = ({ user, component: Component, ...others}: any) => (
  <Route
    {...others}
    render={
      props => {
        if (user && user.id) {
          return <Component {...others} {...props} />;
        } else {
          return <Redirect to="/login" />;
        }
      }
    }
  />
);

export const AuthenticationRoute = ({ user, component: Component, ...others}: any) => (
  <Route
    {...others}
    render={
      props => {
        if (user && user.id) {
          return <Redirect to="/" />;
        } else {
          return <Component {...others} {...props} />;
        }
      }
    }
  />
);
