import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './App';
import News from './containers/News/News';

const root = document.getElementById('app');

const model = window.__MODEL__;

const Router = () => (
  <BrowserRouter>
    <div>
      <Route exact path="/" render={props => <App {...props} {...model} />} />
      <Route path="/news/cnn" component={News} />
    </div>
  </BrowserRouter>
);

hydrate(<Router />, root);
