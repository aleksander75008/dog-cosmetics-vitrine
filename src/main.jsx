import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Gallery } from './components/Gallery.jsx';

/**
 * Application entry point.
 * index.css is imported here (not in tests) so that scroll-behavior: smooth
 * is applied in the browser but never evaluated in the jsdom test environment.
 */
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <main>
      <Gallery />
    </main>
  </React.StrictMode>,
);
