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
);const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000; // Elige el puerto que desees

// Define tus rutas estáticas primero
app.use(express.static(path.join(__dirname, 'public')));

// Luego, agrega una ruta para manejar todas las demás solicitudes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
  console.log(`Servidor en ejecución en el puerto ${port}`);
});
