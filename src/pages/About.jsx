import React from 'react';

const About = () => {
  const aboutContainerStyle = {
    backgroundColor: 'blue',
    color: 'white',
    padding: '2rem',
    textAlign: 'center',
  };

  const aboutTitleStyle = {
    fontSize: '2.5rem',
    marginBottom: '1rem',
    fontFamily: 'Rockwell, sans-serif',
  };

  const aboutParagraphStyle = {
    fontSize: '1.2rem',
    margin: '1rem 0',
  };

  const buttonStyle = {
    backgroundColor: 'white',
    color: 'blue',
    padding: '1rem 2rem',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  };

  const hoverEffect = {
    '&:hover': {
      backgroundColor: 'lightgray',
      color: 'blue',
    },
  };

  const responsiveContainer = {
    maxWidth: '1000px',
    margin: '0 auto',
  };

  return (
    <div style={aboutContainerStyle}>
      <div style={responsiveContainer}>
        <h1 style={aboutTitleStyle}>Nuestra Historia</h1>
        <p style={aboutParagraphStyle}>
          La clonación Pokémon nos ha llevado a lugares inimaginables. Durante tiempos de crisis, nos encontramos con un dilema que solo podía resolverse de una manera sorprendente. Conocimos a Héctor, un programador novato que comenzó su viaje con nosotros.
        </p>
        <p style={aboutParagraphStyle}>
          Héctor, recién llegado, trajo consigo un aire de misterio. Algunos dicen que es un ser humano clonado, otros creen que es una creación de la ciencia ficción. En cualquier caso, su pasión y creatividad han resultado en hermosas animaciones CSS que hacen que nuestros Pokémon clonados cobren vida.
        </p>
        <p style={aboutParagraphStyle}>
          En esta sección, te invitamos a explorar nuestro mundo de forma divertida. Héctor ha preparado animaciones sorprendentes que seguramente te sacarán una sonrisa. ¡Y no te preocupes, todo es responsivo, así que disfruta de la experiencia en cualquier dispositivo!
        </p>
        <button style={{ ...buttonStyle, ...hoverEffect }}>
          <span>¡Diviértete aquí! </span>
        </button>
      </div>
    </div>
  );
};

export default About;
