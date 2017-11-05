import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import App from './components/App/App';

function index(url, props) {
  return renderToString(
    <StaticRouter location={url} context={{}}>
      <App {...props} />
    </StaticRouter>
  );
}

export default index;
