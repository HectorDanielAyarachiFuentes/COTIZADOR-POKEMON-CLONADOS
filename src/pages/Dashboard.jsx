import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Dashboard = () => {
  return (
    <div>
      <h1>Para Dulce</h1>
      <Carousel>
        <div>
          <img
            src="\Imagenes Dulces\Dulceprincesa.jpg"
            alt="Perro lindo de color amarillo con una tiara de princesa"
            style={{ maxWidth: '40%', maxHeight: '40%' }}
          />
          <p className="legend">Dulce Princesa</p>
        </div>
        <div>
          <img
            src="\Imagenes Dulces\Dulcemala.jpg"
            alt="Perro lindo amarillo saca la lengua"
            style={{ maxWidth: '80%', maxHeight: '80%' }}
          />
          <p className="legend">Dulce Rebelde</p>
        </div>
        <div>
          <img
            src="\Imagenes Dulces\Dulce sonrie.jpg"
            alt="Perrito amarillo"
            style={{ maxWidth: '80%', maxHeight: '80%' }}
          />
          <p className="legend">Dulce Sonrie</p>
        </div>
      </Carousel>
    </div>
  );
};

export default Dashboard;
