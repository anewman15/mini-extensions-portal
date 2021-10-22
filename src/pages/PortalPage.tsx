import React from 'react';
import Home from '../components/Home';
import { Portal } from '../data/PortalsData';

type PortalPropsType = {
  portalObject: Portal,
  match: {
    params: {
      id: string,
    },
  }
}

const PortalPage = ({ portalObject, match }: PortalPropsType ) => {
  return (
    <Home />
  )
};

export default PortalPage;
