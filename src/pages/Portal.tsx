import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from '../routes/routes';

const Portal = () => {
  return (
  <BrowserRouter>
    <Routes />
  </BrowserRouter>
  )
};

export default Portal;
