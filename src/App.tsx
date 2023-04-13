import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Layouts from  './layouts'
import { Provider } from 'react-redux';
import store from './redux/store';
import { AppRoutes } from './Routes';

function App() {
  return (
    <BrowserRouter>
    <Provider store={store}>
      <Layouts>
          <AppRoutes />
      </Layouts>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
