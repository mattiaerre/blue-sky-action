import React from 'react';
import { hydrate } from 'react-dom';
import App from './App';

const root = document.getElementById('app');

const props = window.__MODEL__;

hydrate(<App {...props} />, root);
