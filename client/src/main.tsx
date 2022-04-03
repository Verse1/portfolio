import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Homepage from './pages/Homepage'
import Navbar from './components/Navbar'

ReactDOM.render(
  <React.StrictMode>
    <Navbar />
    <Homepage />
  </React.StrictMode>,
  document.getElementById('root')
);
