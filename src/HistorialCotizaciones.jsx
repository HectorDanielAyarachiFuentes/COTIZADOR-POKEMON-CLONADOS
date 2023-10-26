// HistorialCotizaciones.jsx
import React from 'react';

function HistorialCotizaciones({ cotizaciones }) {
  return (
    <div id="historial">
      <h2>Historial de Cotizaciones</h2>
      <ul id="cotizaciones">
        {cotizaciones.map((cotizacion, index) => (
          <li key={index}>{cotizacion}</li>
        ))}
      </ul>
    </div>
  );
}

export default HistorialCotizaciones;
