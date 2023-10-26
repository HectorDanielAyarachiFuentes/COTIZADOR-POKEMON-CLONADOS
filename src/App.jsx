import React, { useState, useEffect } from 'react';
import Header from './Header';
import CotizadorForm from './CotizadorForm';
import HistorialCotizaciones from './HistorialCotizaciones';
import './App.css';
import pokemonData from './pokemonData.json';

function App() {
  const [showCotizador, setShowCotizador] = useState(true);
  const [cotizaciones, setCotizaciones] = useState([]);
  const [historial, setHistorial] = useState([]);

  useEffect(() => {
    const cotizacionesLocalStorage = localStorage.getItem('cotizaciones');
    if (cotizacionesLocalStorage) {
      setCotizaciones(JSON.parse(cotizacionesLocalStorage));
    }
  }, []);

  const toggleCotizador = () => {
    setShowCotizador(!showCotizador);
  };

  const calcularPrecio = (altura) => {
    if (altura <= 50) {
      return 10;
    } else if (altura <= 100) {
      return 20;
    } else {
      return 30;
    }
  };

  const guardarDatosEnLocalStorage = (clave, datos) => {
    try {
      const datosString = JSON.stringify(datos);
      localStorage.setItem(clave, datosString);
    } catch (error) {
      console.error('Error al guardar en el Local Storage:', error);
    }
  };

  const cotizarPokemon = (pokemon) => {
    const precio = calcularPrecio(parseInt(pokemon.height));
    const cotizacion = `${pokemon.name} mide ${pokemon.height} de altura y tiene ADN de tipo ${pokemon.dna}. Precio: $${precio}`;
    const nuevasCotizaciones = [...cotizaciones, cotizacion];
    setCotizaciones(nuevasCotizaciones);

    guardarDatosEnLocalStorage('cotizaciones', nuevasCotizaciones);
  };

  return (
    <div className="App">
      <Header />
      <button onClick={toggleCotizador}>
        {showCotizador ? 'Ver Historial' : 'Volver al Cotizador'}
      </button>

      {showCotizador ? (
        <CotizadorForm cotizarPokemon={cotizarPokemon} pokemonData={pokemonData} />
      ) : (
        <HistorialCotizaciones cotizaciones={cotizaciones} />
      )}
    </div>
  );
}

export default App;
