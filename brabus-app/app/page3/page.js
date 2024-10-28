'use client';

import React from 'react';

const Vehicles = () => {
  const cars = [
    {
      name: 'Brabus G-Wagon',
      photo: 'G.jpg', // Fotka pre horný riadok
      price: '200,000 €',
      description: 'PRIDAM AJ POPIS.',
      videoLink: 'https://www.youtube.com/watch?v=example1', // Odkaz na video
    },
    {
      name: 'BRABUS 900 Rocket R',
      photo: 'PR.jpg', // Fotka pre horný riadok
      price: '549,130 €',
      description: 'PRIDAM AJ POPIS.',
      videoLink: 'https://www.youtube.com/watch?v=example2', // Odkaz na video
    },
    {
      name: 'Brabus Smart',
      photo: 'SM.jpg', // Fotka pre horný riadok
      price: '50,000 €',
      description: 'PRIDAM AJ POPIS.',
      videoLink: 'https://www.youtube.com/watch?v=example3', // Odkaz na video
    },
    {
      name: 'BRABUS 850',
      photo: 'SS.jpg', // Fotka pre horný riadok
      price: '480,067 €',
      description: 'PRIDAM AJ POPIS.',
      videoLink: 'https://www.youtube.com/watch?v=example4', // Odkaz na video
    },
    {
      name: 'Brabus Rocket 900',
      photo: '900.jpg', // Fotka pre horný riadok
      price: '400,000 €',
      description: 'PRIDAM AJ POPIS.',
      videoLink: 'https://www.youtube.com/watch?v=example5', // Odkaz na video
    },
    {
      name: 'Brabus E63',
      photo: 'E.jpg', // Fotka pre horný riadok
      price: '180,000 €',
      description: 'PRIDAM AJ POPIS.',
      videoLink: 'https://www.youtube.com/watch?v=example6', // Odkaz na video
    },
  ];

  const largeCarPhotos = [
    'G2.jpg', // Fotka pre dolný riadok
    'PR2.jpg', // Fotka pre dolný riadok
    'SM2.jpg', // Fotka pre dolný riadok
    'SS2.jpg', // Fotka pre dolný riadok
    '9002.jpg', // Fotka pre dolný riadok
    'E2.jpg', // Fotka pre dolný riadok
  ];

  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Autá v ponuke</h1>
      
      {/* Prvý riadok s fotkami na celú šírku boxov */}
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', marginBottom: '30px' }}>
        {cars.map((car, index) => (
          <div key={index} style={{ flex: '1 1 300px', maxWidth: '550px', height: '550px', textAlign: 'center', padding: '0', margin: '10px', border: '1px solid #ddd', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
            <img src={car.photo} alt={`${car.name} photo`} style={{ width: '100%', height: '450px', objectFit: 'cover' }} />
            <div style={{ padding: '10px' }}>
              <h3 style={{ margin: '5px 0', fontSize: '1.2rem' }}>{car.name}</h3>
              <p style={{ fontWeight: 'bold', color: '#333', fontSize: '1.5rem' }}>{car.price}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Druhá časť s väčšími fotkami a detailným popisom áut */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {cars.map((car, index) => (
          <div key={index} style={{ display: 'flex', alignItems: 'flex-start', border: '1px solid #ddd', borderRadius: '8px', padding: '20px' }}>
            {/* Ľavá strana - väčšia fotka auta */}
            <div style={{ flex: '0 0 250px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <img src={largeCarPhotos[index]} alt={`${car.name} large photo`} style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px' }} />
            </div>
            {/* Pravá strana - popis auta */}
            <div style={{ flex: '1', padding: '0 20px', textAlign: 'left' }}>
              <h2 style={{ margin: '0', fontSize: '1.5rem' }}>{car.name}</h2>
              <p style={{ fontWeight: 'bold', color: '#333', marginBottom: '10px' }}>{car.price}</p>
              <p>{car.description}</p>
              <a href={car.videoLink} target="_blank" rel="noopener noreferrer" style={{ color: '#007bff', textDecoration: 'underline' }}>Pozrieť video</a>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          h1 {
            font-size: 1.5rem; // Zmenšiť nadpis na mobiloch
          }
          .car-card {
            width: 100%; // Nastaviť šírku na 100% pre mobil
          }
          .large-car-photo {
            width: 100%; // Väčšie fotky budú mať 100% šírku
          }
        }
      `}</style>
    </div>
  );
};

export default Vehicles;