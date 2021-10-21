import React from 'react';
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
    <div>Hi {match.params.id}</div>
  )
};

export default PortalPage;
