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

  const calcularPrecio = (altura) => {
    let precioBase = 13000;

    if (altura <= 50) {
      precioBase += 2000;
    } else if (altura <= 100) {
      precioBase += 4000;
    } else {
      precioBase += 6000;
    }

    return precioBase;
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
    if (pokemon.name === 'Elija una opción' || !pokemon.height || !pokemon.dna) {
      alert('Por favor, seleccione una opción y complete todos los datos necesarios para cotizar.');
      return;
    }

    const altura = parseInt(pokemon.height);

    if (altura > 140 || altura < 24) {
      alert('La altura del Pokémon debe estar en el rango de 24 a 140. Por favor, ingrese una altura válida.');
      return;
    }

    const precio = calcularPrecio(altura);
    const cotizacion = `${pokemon.name} mide ${altura} de altura y tiene ADN de tipo ${pokemon.dna}. Precio: $${precio.toLocaleString('en-US')}`;
    const nuevasCotizaciones = [...cotizaciones, cotizacion];
    setCotizaciones(nuevasCotizaciones);

    setCotizacionInfo(cotizacion);

    guardarDatosEnLocalStorage('cotizaciones', nuevasCotizaciones);

    alert('Guardado automáticamente. Ver en Historial');
  };

  return (
    <div className="App">
      <Header />
      <button onClick={toggleCotizador}>
        {showCotizador ? 'Ver Historial' : 'Volver al Cotizador'}
      </button>

      {showCotizador ? (
        <>
          <CotizadorForm cotizarPokemon={cotizarPokemon} pokemonData={pokemonData} />
          {cotizacionInfo && <p>{cotizacionInfo}</p>}
        </>
      ) : (
        <HistorialCotizaciones cotizaciones={cotizaciones} />
      )}
    </div>
  );
}

export default App;
