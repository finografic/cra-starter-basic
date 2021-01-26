// POLYFILLS
import 'regenerator-runtime/runtime';
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

// BASE IMPORTS
import React from 'react';
import ReactDOM from 'react-dom';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router } from 'react-router-dom';
import * as serviceWorker from 'serviceWorker';

// STORE
import { GlobalProvider } from 'store';

// ============================================== //

const MOUNT_NODE = document.getElementById('app');

const render = () => {
  const App = require('./containers/App').default;
  ReactDOM.render(
    <React.StrictMode>
      <GlobalProvider>
        <Router>
          <HelmetProvider>
            <App />
          </HelmetProvider>
        </Router>
      </GlobalProvider>
    </React.StrictMode>,
    MOUNT_NODE
  );
};

render();

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./containers/App', render);
}

serviceWorker.unregister();
