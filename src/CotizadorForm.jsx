import React, { useState } from 'react';

function CotizadorForm({ cotizarPokemon, pokemonData }) {
  const [selectedPokemon, setSelectedPokemon] = useState(0);
  const [altura, setAltura] = useState(23);
  const [selectedDna, setSelectedDna] = useState(0);

  const handleSelectChange = (event) => {
    setSelectedPokemon(event.target.value);
  };

  const handleAlturaChange = (event) => {
    setAltura(event.target.value);
  };

  const handleDnaChange = (event) => {
    setSelectedDna(event.target.value);
  };

  const handleCotizarClick = () => {
    cotizarPokemon({
      name: pokemonData.pokemon[selectedPokemon].name,
      height: altura,
      dna: pokemonData.pokemon[selectedDna].dna,
    });
  };

  return (
    <div id="pokemon-form">
      <label htmlFor="pokemon-name">Nombre del Pokémon:</label>
      <select id="pokemon-name" onChange={handleSelectChange} value={selectedPokemon}>
        {pokemonData.pokemon.map((pokemon, index) => (
          <option key={index} value={index}>
            {pokemon.name}
          </option>
        ))}
      </select>

      <label htmlFor="pokemon-height">Altura (en cm):</label>
      <input
        type="number"
        id="pokemon-height"
        min="23"
        max="140"
        value={altura}
        onChange={handleAlturaChange}
      />

      <label htmlFor="pokemon-dna">Tipo de ADN (extrato):</label>
      <select id="pokemon-dna" onChange={handleDnaChange} value={selectedDna}>
        {pokemonData.pokemon.map((pokemon, index) => (
          <option key={index} value={index}>
            {pokemon.dna}
          </option>
        ))}
      </select>

      <button type="button" onClick={handleCotizarClick}>
        Calcular
      </button>
    </div>
  );
}

export default CotizadorForm;
