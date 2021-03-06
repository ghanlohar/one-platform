import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import "@patternfly/react-core/dist/styles/base.css";
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import BreadcrumbContextProvider from './context/BreadcrumbContext.jsx'

const renderApp = () => {
  render(
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <BreadcrumbContextProvider>
        <App />
      </BreadcrumbContextProvider>
    </BrowserRouter>,
    document.getElementById("root")
  );
};

window.OpAuthHelper ? window.OpAuthHelper.onLogin(renderApp) : renderApp();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
