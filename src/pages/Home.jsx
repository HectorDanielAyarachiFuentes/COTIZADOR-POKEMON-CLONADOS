import React from 'react';

const Home = () => {
  const homeStyle = {
    backgroundColor: 'blue',
    color: 'white',
    padding: '2rem',
    textAlign: 'center',
    animation: 'fadeIn 2s',
  };

  const titleStyle = {
    fontSize: '2.5rem',
    marginBottom: '1rem',
    fontFamily: 'Rockwell, sans-serif',
  };

  const paragraphStyle = {
    fontSize: '1.2rem',
    margin: '1rem 0',
  };

  return (
    <div style={homeStyle}>
      <h1 style={titleStyle}>Explora el Mundo de PokéClonación</h1>
      <p style={paragraphStyle}>
        Bienvenido a un lugar donde la ciencia y la imaginación se entrelazan en un ballet azul y plateado. En nuestro laboratorio futurista, exploramos las maravillas de la clonación de Pokémon, en un universo inspirado por la elegancia de la ciencia ficción.
      </p>
      <p style={paragraphStyle}>
        Nuestros investigadores han descubierto la clave de la clonación Pokémon, fusionando los secretos del ADN con la creatividad única de nuestros científicos. Cada clon de Pokémon es una obra de arte, una interpretación única de la creatividad científica.
      </p>
      <p style={paragraphStyle}>
        En este mundo, los Pokémon clonados se convierten en protagonistas de una sinfonía cósmica. Desde el dulce canto de los Jigglypuff hasta los riffs eléctricos de los Pikachu, cada Pokémon es una estrella en su propio concierto.
      </p>
      <p style={paragraphStyle}>
        Te invitamos a unirte a nosotros en esta elegante odisea. Explora la belleza de la ciencia, la música, y la imaginación en un viaje que nunca olvidarás.
      </p>
    </div>
  );
};

export default Home;
