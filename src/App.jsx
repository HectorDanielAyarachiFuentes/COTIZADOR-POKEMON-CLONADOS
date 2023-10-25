import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import pokemonData from './pokemonData.json';


function App() {
  const [showCotizador, setShowCotizador] = useState(true);
  const [cotizaciones, setCotizaciones] = useState([]);

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

  const cotizarPokemon = (pokemon) => {
    const precio = calcularPrecio(parseInt(pokemon.height));
    const cotizacion = `${pokemon.name} mide ${pokemon.height} de altura y tiene ADN de tipo ${pokemon.dna}. Precio: $${precio}`;
    setCotizaciones([...cotizaciones, cotizacion]);
  };

  return (
    <div className="App">
      <a href="https://vitejs.dev" target="_blank">
        <img src="/vite.svg" className="logo" alt="Vite logo" />
      </a>
      <a href="https://react.dev" target="_blank">
        <img src="/react.svg" className="logo react" alt="React logo" />
      </a>
      <h1>Cotizador de Pokémon</h1>
      <button onClick={toggleCotizador}>
        {showCotizador ? 'Ver Historial' : 'Volver al Cotizador'}
      </button>

      {showCotizador && (
        <div id="pokemon-form">
          <label htmlFor="pokemon-name">Nombre del Pokémon:</label>
          <select id="pokemon-name">
            {pokemonData.pokemon.map((pokemon, index) => (
              <option key={index} value={index}>{pokemon.name}</option>
            ))}
          </select>

          <label htmlFor="pokemon-height">Altura (en cm):</label>
          <input type="number" id="pokemon-height" min="23" max="140" />

          <label htmlFor="pokemon-dna">Tipo de ADN (extrato):</label>
          <select id="pokemon-dna">
            {pokemonData.pokemon.map((pokemon, index) => (
              <option key={index} value={index}>{pokemon.dna}</option>
            ))}
          </select>

          <button type="button" onClick={() => cotizarPokemon(pokemonData.pokemon[document.getElementById('pokemon-name').value])}>Calcular</button>
        </div>
      )}

      <div id="historial">
        <h2>Historial de Cotizaciones</h2>
        <ul id="cotizaciones">
          {cotizaciones.map((cotizacion, index) => (
            <li key={index}>{cotizacion}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;