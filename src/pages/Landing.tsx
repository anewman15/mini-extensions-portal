import React from 'react';
import { Link } from 'react-router-dom';
import { Portal, portals } from '../data/PortalsData';

const Landing = () => {
  const portalLinks = portals.map((portal: Portal) => (
    <div key={portal.id}>
      <Link to={`/portals/${portal.id}`}>{portal.id}</Link>
    </div>
  ));

  return (
    <div>
      {portalLinks}
    </div>
  )
};

export default Landing;
