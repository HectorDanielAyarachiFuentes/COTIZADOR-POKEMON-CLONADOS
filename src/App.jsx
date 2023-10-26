import React, { useState, useEffect } from 'react';
import Header from './Header';
import CotizadorForm from './CotizadorForm';
import HistorialCotizaciones from './HistorialCotizaciones';
import './App.css';
import pokemonData from './pokemonData.json';

function App() {
  const [showCotizador, setShowCotizador] = useState(true);
  const [cotizaciones, setCotizaciones] = useState([]);
  const [cotizacionInfo, setCotizacionInfo] = useState(null);

  useEffect(() => {
    const cotizacionesLocalStorage = localStorage.getItem('cotizaciones');
    if (cotizacionesLocalStorage) {
      setCotizaciones(JSON.parse(cotizacionesLocalStorage));
    }
  }, []);

  const toggleCotizador = () => {
    setShowCotizador(!showCotizador);
  };

  const cotizarPokemon = (pokemon) => {
    // Tu lógica para cotizar el Pokémon aquí.
    // Puedes usar setCotizaciones para actualizar la lista de cotizaciones.
  };

  return (
    <div className="App">
      <Header />
      <button onClick={toggleCotizador}>
        {showCotizador ? 'Ver Historial' : 'Volver al Cotizador'}
      </button>

      {showCotizador ? (
        <>
          <CotizadorForm cotizarPokemon={cotizarPokemon} pokemonData={pokemonData} cotizaciones={cotizaciones} setCotizaciones={setCotizaciones} setCotizacionInfo={setCotizacionInfo} />
          {cotizacionInfo && <p>{cotizacionInfo}</p>}
        </>
      ) : (
        <HistorialCotizaciones cotizaciones={cotizaciones} />
      )}
    </div>
  );
}

export default App;
