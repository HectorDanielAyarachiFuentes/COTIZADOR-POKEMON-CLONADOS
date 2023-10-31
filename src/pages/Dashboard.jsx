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
            src="https://scontent.fnqn4-1.fna.fbcdn.net/v/t39.30808-6/391626291_7067940753297285_6954890977725599637_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHJ2qLTodrcoNTlc1TIDsCjf99v5hG6fqx_32_mEbp-rLm-XJ6xAz5PCdh40uC9wIrvSm_l331_zryGks6CNy_e&_nc_ohc=E2OmCQ25kfwAX8FSsjO&_nc_ht=scontent.fnqn4-1.fna&oh=00_AfBWI2gxrs1KHkpzt1wPk7OS537VFCJJ86AlUojwmIX6Zw&oe=65444FC3"
            alt="Imagen 1"
            style={{ maxWidth: '40%', maxHeight: '40%' }}
          />
          <p className="legend">Leyenda 1</p>
        </div>
        <div>
          <img
            src="https://scontent.fnqn4-1.fna.fbcdn.net/v/t39.30808-6/396470565_7103794599711900_2327821716882610993_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHXIBwEr4Evg5finEwhdz4v2P6_X4MZSgLY_r9fgxlKAscMKQ-bkd7P1LwPuB9grDL54LkVdRqTNPpo6tBulUq3&_nc_ohc=AJAu7gBThwYAX-vVL04&_nc_ht=scontent.fnqn4-1.fna&oh=00_AfDif2A8BTbOdMtB7D7AYmF_ZQuiPC8YhS5WVuxfjfhNlg&oe=6545A456"
            alt="Imagen 2"
            style={{ maxWidth: '80%', maxHeight: '80%' }}
          />
          <p className="legend">Leyenda 2</p>
        </div>
        <div>
          <img
            src="https://scontent.fnqn4-1.fna.fbcdn.net/v/t39.30808-6/385909076_7001680676589960_1120534810491128134_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFvVplQsA_xXqupuKDoYZKavU_ypcv0LZ29T_Kly_QtnZC2y-k-OYW8EJ1fqVBYjt10VefUABVOrtt050z8KZ-Z&_nc_ohc=Fr0NQnv9IScAX8F4Ctr&_nc_ht=scontent.fnqn4-1.fna&oh=00_AfCMegXPcA5pelBlUKR1A1qqZlYvtmQ_3kP-MuOi9cJPgA&oe=6544F679"
            alt="Imagen 3"
            style={{ maxWidth: '80%', maxHeight: '80%' }}
          />
          <p className="legend">Leyenda 3</p>
        </div>
      </Carousel>
    </div>
  );
};

export default Dashboard;
