import React from 'react';
import { createRoot } from 'react-dom'; // Importa createRoot desde react-dom
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from "react-router-dom";

const root = createRoot(document.getElementById('root')); // Usa createRoot para crear el root
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);