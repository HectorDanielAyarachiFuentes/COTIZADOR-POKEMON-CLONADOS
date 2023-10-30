import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import Link and useNavigate
import Header from './Header';
import CotizadorForm from './CotizadorForm';
import HistorialCotizaciones from './HistorialCotizaciones';
import './App.css';
import pokemonData from './pokemonData.json';
import Layout from "./pages/Layout";
import About from "./pages/About";
import Home from "./pages/Home";
import Default from "./pages/Default";
import Dashboard from "./pages/Dashboard";

function App() {
  const [showCotizador, setShowCotizador] = useState(true);
  const [cotizaciones, setCotizaciones] = useState([]);
  const [cotizacionInfo, setCotizacionInfo] = useState(null);
  const navigate = useNavigate(); // Get the navigation function

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
    // Your logic to calculate the Pokémon quote goes here.
    // You can use setCotizaciones to update the list of quotes.
  };

  return (
    <div className="pokemon-app">
      <h1 className="pokemon-title">Pokémon Routes</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="about">About</Link>
          </li>
          <li>
            <Link to="dashboard">Dashboard</Link>
          </li>
        </ul>
      </nav>

      <Header />
      <button onClick={toggleCotizador}>
        {showCotizador ? 'View History' : 'Back to Quoter'}
      </button>

      {showCotizador ? (
        <>
          <CotizadorForm
            cotizarPokemon={cotizarPokemon}
            pokemonData={pokemonData}
            cotizaciones={cotizaciones}
            setCotizaciones={setCotizaciones}
            setCotizacionInfo={setCotizacionInfo}
          />
          {cotizacionInfo && <p>{cotizacionInfo}</p>}
        </>
      ) : (
        <HistorialCotizaciones cotizaciones={cotizaciones} />
      )}
    </div>
  );
}

export default App;
