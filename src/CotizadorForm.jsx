import React, { useState } from 'react';

function CotizadorForm({ cotizaciones, setCotizaciones, setCotizacionInfo, pokemonData }) {
  const [selectedPokemon, setSelectedPokemon] = useState('');
  const [altura, setAltura] = useState('24');
  const [selectedDna, setSelectedDna] = useState('');
  const [selectedRareza, setSelectedRareza] = useState('');

  const handleSelectChange = (event) => {
    setSelectedPokemon(event.target.value);
  };

  const handleAlturaChange = (event) => {
    setAltura(event.target.value);
  };

  const handleDnaChange = (event) => {
    setSelectedDna(event.target.value);
  };

  const handleRarezaChange = (event) => {
    setSelectedRareza(event.target.value);
  };

  const handleCotizarClick = () => {
    cotizarPokemon({
      name: selectedPokemon,
      height: altura,
      dna: selectedDna,
      rareza: selectedRareza,
    });
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

  const getRarezaFactor = (rareza) => {
    switch (rareza) {
      case 'común':
        return 1.1; // Ejemplo de factor para Pokémon comunes.
      case 'raro':
        return 1.5; // Ejemplo de factor para Pokémon raros.
      default:
        return 1.0; // Valor por defecto si no se especifica rareza.
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
    if (pokemon.name === '' || !pokemon.height || !pokemon.dna || !pokemon.rareza) {
      alert('Por favor, seleccione una opción y complete todos los datos necesarios para cotizar.');
      return;
    }

    const altura = parseInt(pokemon.height);

    if (altura > 140 || altura < 24) {
      alert('La altura del Pokémon debe estar en el rango de 24 cm a 140 cm. Por favor, ingrese una altura válida.');
      return;
    }

    const precioBase = calcularPrecio(altura);
    const rarezaFactor = getRarezaFactor(pokemon.rareza);
    const precioFinal = precioBase * rarezaFactor;

    const cotizacion = `${pokemon.name} mide ${altura} de altura, tiene ADN de tipo ${pokemon.dna}, rareza ${pokemon.rareza}. Precio: $${precioFinal.toLocaleString('en-US')}`;
    const nuevasCotizaciones = [...cotizaciones, cotizacion];
    setCotizaciones(nuevasCotizaciones);

    setCotizacionInfo(cotizacion);

    guardarDatosEnLocalStorage('cotizaciones', nuevasCotizaciones);

    alert('Guardado automáticamente. Ver en Historial');
  };

  return (
    <div id="pokemon-form">
      <label htmlFor="pokemon-name">Nombre del Pokémon:</label>
      <select id="pokemon-name" onChange={handleSelectChange} value={selectedPokemon}>
        <option value="">Elija una opción</option>
        {pokemonData.pokemon.map((pokemon, index) => (
          <option key={index} value={pokemon.name}>
            {pokemon.name}
          </option>
        ))}
      </select>

      <label htmlFor="pokemon-height">Altura (en cm):</label>
      <input
        type="number"
        id="pokemon-height"
        min="24"
        max="140"
        value={altura}
        onChange={handleAlturaChange}
      />

      <label htmlFor="pokemon-dna">Tipo de ADN (extracto):</label>
      <select id="pokemon-dna" onChange={handleDnaChange} value={selectedDna}>
        <option value="">Elija una opción</option>
        {pokemonData.pokemon.map((pokemon, index) => (
          <option key={index} value={pokemon.dna}>
            {pokemon.dna}
          </option>
        ))}
      </select>

      <label htmlFor="pokemon-rareza">Rareza del Pokémon:</label>
      <select id="pokemon-rareza" onChange={handleRarezaChange} value={selectedRareza}>
        <option value="">Elija una opción</option>
        <option value="común">Común</option>
        <option value="raro">Raro</option>
        {/* Agrega más opciones según tu necesidad */}
      </select>

      <button type="button" onClick={handleCotizarClick}>
        Calcular
      </button>
    </div>
  );
}

export default CotizadorForm;
