import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Homepage from './pages/Homepage';
import Navbar from './components/Navbar';
import Contact from './components/Contact';

ReactDOM.render(
  <React.StrictMode>
    <Navbar />
    <Homepage />
    <Contact />
  </React.StrictMode>,
  document.getElementById('root')
);
