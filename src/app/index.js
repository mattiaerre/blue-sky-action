import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const root = document.getElementById('app');

const props = window.__MODEL__;

ReactDOM.render(<App {...props} />, root);
