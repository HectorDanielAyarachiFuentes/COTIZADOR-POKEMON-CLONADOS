import React, { useState, useEffect } from 'react';
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
import { Routes, Route } from 'react-router-dom';

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
    <div className="pokemon-app">
      <h1 className="pokemon-title">Pokémon Routes</h1>
      <Routes>
  <Route path="/" element={<Layout />}>
    <Route path="about" element={<About />} />
    <Route index element={<Home />} /> {/* Utiliza 'index' en lugar de '/' */}
    <Route path="dashboard" element={<Dashboard />} />
    <Route path="*" element={<Default />} />
  </Route>
</Routes>

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