import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { POPUP_ROOT } from './constants';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
    <div id={POPUP_ROOT} />
  </React.StrictMode>
);

