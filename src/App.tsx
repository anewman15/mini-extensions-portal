import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store/store';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes/routes';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </Provider>
  );
};

export default App;
