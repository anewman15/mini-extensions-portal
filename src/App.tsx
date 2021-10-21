import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store/store';
import Portal from './pages/Portal';

function App() {
  return (
    <Provider store={store}>
      <Portal />
    </Provider>
  );
};

export default App;
