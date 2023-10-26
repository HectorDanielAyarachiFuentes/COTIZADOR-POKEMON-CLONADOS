import React, { useState, useEffect } from 'react';
import './App.css';
import pokemonData from './pokemonData.json';

function Header() {
  return (
    <div>
      <a href="https://hectordanielayarachifuentes.github.io/TIENDA-RAMONCITO/" target="_blank">
        <img
          src="/public/Imagenes Dulces/DULCE.jpg"
          className="logo"
          alt="DulceHermosa"
        />
      </a>
      <a href="https://react.dev" target="_blank">
        <img
          src="/public/Imagenes Dulces/DULCE.jpg"
          className="logo react"
          alt="DulceHermosa"
        />
      </a>
      <h1>Cotizador de Pokémon</h1>
    </div>
  );
}

function CotizadorForm({ cotizarPokemon, pokemonData }) {
  return (
    <div id="pokemon-form">
      <label htmlFor="pokemon-name">Nombre del Pokémon:</label>
      <select id="pokemon-name">
        {pokemonData.pokemon.map((pokemon, index) => (
          <option key={index} value={index}>
            {pokemon.name}
          </option>
        ))}
      </select>

      <label htmlFor="pokemon-height">Altura (en cm):</label>
      <input type="number" id="pokemon-height" min="23" max="140" />

      <label htmlFor="pokemon-dna">Tipo de ADN (extrato):</label>
      <select id="pokemon-dna">
        {pokemonData.pokemon.map((pokemon, index) => (
          <option key={index} value={index}>
            {pokemon.dna}
          </option>
        ))}
      </select>

      <button
        type="button"
        onClick={() => cotizarPokemon(pokemonData.pokemon[document.getElementById('pokemon-name').value])}
      >
        Calcular
      </button>
    </div>
  );
}

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

function App() {
  const [showCotizador, setShowCotizador] = useState(true);
  const [cotizaciones, setCotizaciones] = useState([]);

  useEffect(() => {
    // Recuperar cotizaciones almacenadas en el Local Storage al cargar la aplicación
    const cotizacionesLocalStorage = localStorage.getItem('cotizaciones');
    if (cotizacionesLocalStorage) {
      setCotizaciones(JSON.parse(cotizacionesLocalStorage));
    }
  }, []); // El segundo argumento [] asegura que esto solo se ejecute una vez al cargar la aplicación

  const toggleCotizador = () => {
    setShowCotizador(!showCotizador);
  };

  const calcularPrecio = (altura) => {
    // Lógica de cálculo de precios (simulación)
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

    // Guardar las cotizaciones en el Local Storage
    guardarDatosEnLocalStorage('cotizaciones', nuevasCotizaciones);
  };

  return (
    <div className="App">
      <Header />
      <button onClick={toggleCotizador}>
        {showCotizador ? 'Ver Historial' : 'Volver al Cotizador'}
      </button>

      {showCotizador && <CotizadorForm cotizarPokemon={cotizarPokemon} pokemonData={pokemonData} />}

      <HistorialCotizaciones cotizaciones={cotizaciones} />
    </div>
  );
}

export default App;
