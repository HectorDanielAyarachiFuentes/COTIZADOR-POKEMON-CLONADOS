// CotizadorForm.jsx
import React from 'react';

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

export default CotizadorForm;
