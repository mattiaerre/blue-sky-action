import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import App from './components/App/App';

function index(req, props) {
  return renderToString(
    <StaticRouter location={req.url} context={{}}>
      <App {...props} />
    </StaticRouter>
  );
}

export default index;
