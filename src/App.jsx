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
    // Precio base en dólares
    let precioBase = 13000;

    if (altura <= 50) {
      // Agregar un ajuste si la altura es menor o igual a 50
      precioBase += 2000;
    } else if (altura <= 100) {
      // Agregar otro ajuste si la altura está entre 51 y 100
      precioBase += 4000;
    } else {
      // Agregar un ajuste adicional si la altura es mayor a 100
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
    const precio = calcularPrecio(parseInt(pokemon.height));
    const cotizacion = `${pokemon.name} mide ${pokemon.height} de altura y tiene ADN de tipo ${pokemon.dna}. Precio: $${precio.toLocaleString('en-US')}`;
    const nuevasCotizaciones = [...cotizaciones, cotizacion];
    setCotizaciones(nuevasCotizaciones);

    // Actualiza el estado cotizacionInfo con la información
    setCotizacionInfo(cotizacion);

    guardarDatosEnLocalStorage('cotizaciones', nuevasCotizaciones);

    // Muestra una alerta
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
