import React from 'react';
import { useSelector } from 'react-redux';
import { Switch } from 'react-router-dom';
import Home from '../components/Home';
import Login from '../components/Login';
import { AuthenticatedRoute, AuthenticationRoute } from './authentication';
import { StoreStateType } from '../redux/store/store';

const Routes = () => {
  const user = useSelector((state: StoreStateType) => state.user);

  return (
  <Switch>
    <AuthenticatedRoute exact path="/" user={user} component={Home}></AuthenticatedRoute>
    <AuthenticationRoute exact path="/login" user={user} component={Login}></AuthenticationRoute>
  </Switch>
  );
};

export default Routes;
