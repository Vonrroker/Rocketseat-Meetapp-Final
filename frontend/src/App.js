import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';

import './config/ReactotronConfig';

import { ToastContainer } from 'react-toastify';
import history from './services/history';
import Routes from './Routes';

import { store, persistor } from './store';

import 'react-toastify/dist/ReactToastify.css';
import GlobalStyles from './styles/global';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router history={history}>
          <Routes />
          <ToastContainer />
          <GlobalStyles />
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
