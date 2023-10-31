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
  const [audioPlayer, setAudioPlayer] = useState(null);

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
    // Tu lógica para cotizar a los Pokémon va aquí.
    // Puedes usar setCotizaciones para actualizar la lista de cotizaciones.
  };

  const playAudio = () => {
    if (audioPlayer) {
      if (audioPlayer.paused) {
        audioPlayer.play();
      } else {
        audioPlayer.pause();
      }
    } else {
      // Crea el elemento de audio y establece su origen
      const newAudioPlayer = new Audio();
      newAudioPlayer.src = '/Musica/Alexandre Pires-Amame.mp3';
      setAudioPlayer(newAudioPlayer);
      newAudioPlayer.play();
    }
  };

  const pokemonColors = {
    background: '#f44242', // Color de fondo inspirado en Pokémon
    text: '#fff', // Color de texto
  };

  return (
    <div className="pokemon-app">
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <button
          style={{
            backgroundColor: pokemonColors.background,
            color: pokemonColors.text,
            border: 'none',
            cursor: 'pointer',
            padding: '10px 20px',
            borderRadius: '5px',
            fontSize: '16px',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
          }}
          onClick={playAudio}
        >
          <h1 style={{ fontWeight: 'bold', textTransform: 'uppercase' }}>¡Pokemon Routers! </h1>
        </button>
      </div>

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="about" element={<About />} />
          <Route index element={<Home />} />
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
