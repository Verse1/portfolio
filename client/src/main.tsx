import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Contact from './components/Contact';
import App from './App';

const root = createRoot(document.getElementById('root')!);

root.render(
  <React.StrictMode>
    <App />
    <Contact />
  </React.StrictMode>
);
