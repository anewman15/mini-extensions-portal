import React from 'react';
import { useSelector } from 'react-redux';
import Home from '../components/Home';
import Login from '../components/Login';
import { Portal } from '../data/PortalsData';
import { StoreStateType } from '../redux/store/store';

type PortalPropsType = {
  portalObject: Portal,
  match: {
    params: {
      id: string,
    },
  }
}

const PortalPage = ({ portalObject, match }: PortalPropsType ) => {
  const user = useSelector((state: StoreStateType) => state.user);

  return (
    <div>
      { Object.keys(user).length ? <Home portal={portalObject} /> : <Login portal={portalObject} />}
    </div>
  )
};

export default PortalPage;
