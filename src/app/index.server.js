import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter, Route } from 'react-router-dom';
import App from './App';
import News from './containers/News/News';

function index(model) {
  return renderToString(
    <StaticRouter context={{}}>
      <div>
        <Route exact path="/" render={props => <App {...props} {...model} />} />
        <Route path="/news/cnn" component={News} />
      </div>
    </StaticRouter>
  );
}

export default index;
