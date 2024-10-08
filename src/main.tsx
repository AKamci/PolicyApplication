// src/index.tsx
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS'i ekleyin
import React from 'react';
//import ReactDOM from 'react-dom';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement); // root'u tanımla
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
