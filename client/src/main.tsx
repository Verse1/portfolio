import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Homepage from './pages/Homepage';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Contact />
  </React.StrictMode>,
  document.getElementById('root')
);
