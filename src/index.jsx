import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { capturePrerenderedShell } from './utils/prerenderedShell';

// Must run before render(), which empties #root. On a prerendered page that
// container holds the finished HTML the visitor is already looking at, and
// PageLoader shows it instead of a blank spinner while the route chunk loads.
capturePrerenderedShell();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
