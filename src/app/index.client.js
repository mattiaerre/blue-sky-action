import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './containers/App/App';

const root = document.getElementById('app');

const props = window.__MODEL__;

const Router = () => (
  <BrowserRouter>
    <App {...props} />
  </BrowserRouter>
);

hydrate(<Router />, root);
