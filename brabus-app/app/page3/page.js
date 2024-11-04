'use client';

import React from 'react';
import { Global, css } from '@emotion/react';

const GlobalStyles = () => (
    <Global
        styles={css`
            @font-face {
                font-family: 'Bgothm';
                src: url('/bgothm.ttf') format('truetype');
            }

            @font-face {
                font-family: 'AmazonEmber';
                src: url('/Amazon-Ember-MediumItalic.ttf') format('truetype');
            }

            body {
                margin: 0;
                padding: 0;
                background-color: #ffffff;
                font-family: 'Bgothm', sans-serif;
                color: #333;
            }

            h1, h2, h3, h4, h5, h6 {
                font-family: 'Bgothm', sans-serif;
            }

            p, a, span, li {
                font-family: 'AmazonEmber', sans-serif;
            }
        `}
    />
);

const Vehicles = () => {
  const cars = [
    {
      name: 'BRABUS G-Wagon',
      photo: 'G.jpg',
      price: '200,000 €',
      description: 'The BRABUS 900 Deep Blue is here. The final piece of your Deep Blue statement. An unquestionable Masterpiece of contemporary design, tailormade for those seeking the extraordinary. Like the carefully placed threads of a fitted blue suit, this 1-Second-Wow luxury Geländewagen is the definitive combination of sheer class and confident BRABUS performance – created for no less than a single purpose. To impress. Anywhere, any time. Based on the Mercedes-AMG G63, the BRABUS 900 Deep Blue is pure, timeless elegance.',
      videoLink: 'https://www.youtube.com/watch?v=Ueba3AB-zqc',
    },
    {
      name: 'BRABUS 900 Rocket R',
      photo: 'PR.jpg',
      price: '500,000 €',
      description: 'Welcome to the most extraordinary chapter of the BRABUS Rocket Legacy to date. A relentless pursuit of perfection. A captivating feeling of sheer power that only a BRABUS Rocket can deliver. Based for the very first time on the Porsche 911 Turbo S Coupe platform, the Rocket R is an indelible statement of individuality. It is the ultimate driving experience, radiating track-ready high-performance and unbound Masterpiece elegance in every single detail of its addicting presence. Production will be limited to only 25 units worldwide. Are you ready to Rocket?',
      videoLink: 'https://www.youtube.com/watch?v=ApG9Sqcuzpo',
    },
    {
      name: 'BRABUS 900',
      photo: 'E.jpg',
      price: '330,000€',
      description: 'The wolf in sheeps clothing - the brand-new BRABUS 900 offers pure understatement. It combines the performance of a rocket ship with the elegance and comfort of a modern luxury limousine. At first glance, no one would guess that this sophisticated business cruiser based on the Mercedes-AMG E 63 S hides the power of a supercar. It is an undercover rocket; a masterpiece of understatement that pushes the boundaries of performance and impresses with its unique Signature style character.',
      videoLink: 'https://www.youtube.com/watch?v=RD7XAQLGN_I',
    },
    {
      name: 'BRABUS 850',
      photo: 'SS.jpg',
      price: '480,000 €',
      description: 'The ultimate fusion of power and elegance has a name – BRABUS 850. A Masterpiece of contemporary expression, designed to maximize every single aspect of traditional luxury. This rolling symphony of avant-garde is its very own class of excellence, where unbound sophistication and confident strength come together in a breathtaking statement of individuality. Based on the Mercedes-Maybach S 680, the BRABUS 850 is the highest level of modern driving. It’s an experience without parallel. Every curve, every surface, every meticulously considered detail captivating the senses with a 1-Second-Wow factor that defies convention. Transcend the limits. Maximize luxury!',
      videoLink: 'https://www.youtube.com/watch?v=ic2EdfbkQUw',
    },
  ];

  const largeCarPhotos = [
    'G2.jpg',
    'PR2.jpg',
    'E2.jpg',
    'SS2.jpg',
  ];

  return (
    <div
      style={{
        backgroundImage: 'url(BLK.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        color: 'white',
        padding: '20px',
      }}
    >
      <GlobalStyles />

      <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>BRABUS MODELS</h1>

      <div className="car-gallery">
        {cars.map((car, index) => (
          <div key={index} className="car-card">
            <img src={car.photo} alt={`${car.name} photo`} className="car-photo" />
            <div style={{ padding: '10px', backgroundColor: '#000', color: '#fff' }}>
              <h3 style={{ margin: '5px 0', fontSize: '1.5rem' }}>{car.name}</h3>
              <p style={{ fontWeight: 'bold', color: '#fff', fontSize: '1.5rem' }}>{car.price}</p>
            </div>
          </div>
        ))}
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '30px', marginTop: '40px' }}>
        {cars.map((car, index) => (
          <div key={index} className="large-car-photo">
            <div style={{ flex: '0 0 350px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <img src={largeCarPhotos[index]} alt={`${car.name} large photo`} style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px' }} />
            </div>
            <div style={{ flex: '1', padding: '0 20px', textAlign: 'left' }}>
              <h2 style={{ margin: '0', fontSize: '2rem' }}>{car.name}</h2>
              <p style={{ fontWeight: 'bold', fontSize: '1.5rem', marginBottom: '10px' }}>{car.price}</p>
              <p className="car-description">{car.description}</p>
              <a href={car.videoLink} target="_blank" rel="noopener noreferrer" style={{ color: '#007bff', textDecoration: 'underline', fontSize: '1.1rem' }}>Pozrieť video</a>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .car-gallery {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          margin-bottom: 30px;
        }
        
        .car-card {
          flex: 1 1 300px;
          max-width: 550px;
          height: 550px;
          text-align: center;
          padding: 0;
          margin: 10px;
          border: 1px solid #ddd;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        }

        .car-photo {
          width: 100%;
          height: 450px;
          object-fit: cover;
        }

        .large-car-photo {
          display: flex;
          align-items: flex-start;
          border: 1px solid #ddd;
          border-radius: 8px;
          padding: 20px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
          background-color: #000;
          color: #fff;
        }

        @media (max-width: 425px) {
          h1 {
            font-size: 1.2rem;
          }

          .car-card {
            height: auto;
            margin: 5px;
          }

          .car-photo {
            height: 250px;
          }

          .large-car-photo {
            flex-direction: column;
            align-items: center;
            padding: 10px;
          }

          .large-car-photo h2 {
            font-size: 1.5rem;
          }

          .large-car-photo p {
            font-size: 1rem;
          }
        }

        @media (max-width: 375px) {
          h1 {
            font-size: 1.1rem;
          }

          .car-card {
            height: auto;
            margin: 5px;
          }

          .car-photo {
            height: 200px;
          }

          .large-car-photo {
            flex-direction: column;
            align-items: center;
            padding: 8px;
          }

          .large-car-photo h2 {
            font-size: 1.3rem;
          }

          .large-car-photo p {
            font-size: 0.9rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Vehicles;
