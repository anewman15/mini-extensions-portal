import React from 'react';
import { Link } from 'react-router-dom';
import { Portal, portals } from '../data/PortalsData';

const Landing = () => {
  const portalLinks = portals.map((portal: Portal) => (
    <h3 key={`${portal.id}`} className="text-l font-bold my-3">
      <Link className="text-gray-600 hover:text-gray-800" to={`/portals/${portal.id}`}>{portal.id}</Link>
    </h3>
  ));

  return (
    <div className="container mx-auto my-8 w-10/12">
      <h2 className="my-3 p-4 text-green-800 text-xl text-center font-semibold">Your Portals</h2>
      <div className="container my-3 mx-auto py-4 px-8 w-8/12 bg-gray-100 rounded filter drop-shadow">
        {portalLinks}
      </div>
    </div>
  )
};

export default Landing;
