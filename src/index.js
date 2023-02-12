import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import Blank from './components/Blank';
const isDesktop = window.innerWidth >= 1024;

if (isDesktop) {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  const root = ReactDOM.createRoot(document.getElementById('root'));

  alert('This application is only optimized for desktop view. Please view on a larger screen for optimal experience.');
  root.render(<Blank/>);

}
