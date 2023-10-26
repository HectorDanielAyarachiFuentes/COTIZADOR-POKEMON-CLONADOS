import React, { useState } from 'react';
import './App.css';

function HistorialCotizaciones({ cotizaciones }) {
  const [historial, setHistorial] = useState(cotizaciones);

  return (
    <div id="historial">
      <h2>Historial de Cotizaciones</h2>
      <ul id="cotizaciones">
      {historial.map((cotizacion, index) => (
  <li key={index}>
    <p className="cotizacion-item">{index + 1}. {cotizacion}</p>
    <p>Fecha y Hora: {getCurrentDateTime()}</p>
  </li>
))}

      </ul>
    </div>
  );
}

function getCurrentDateTime() {
  const now = new Date();
  return now.toLocaleString();
}

export default HistorialCotizaciones;
