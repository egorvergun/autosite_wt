import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function AboutUs() {
  return (
    <div
      style={{
        backgroundImage: 'url(BLK.jpg)', // nahraď 'your-image-url.jpg' svojím obrázkom
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh', // nastaví minimálnu výšku na 100% výšky okna
        color: 'white', // nastaví farbu textu na bielu pre lepšiu čitateľnosť
        padding: '20px' // pridať padding, ak je to potrebné
      }}
    >
      <h1 className="text-center mb-4" style={{ fontSize: '2.5rem', fontFamily: 'bgothm' }}>
        About Us
      </h1>
      <div className="row justify-content-center"> {/* Zarovná stredový box */}
        <div className="col-md-6">
          <div className="card mb-3 text-center" style={{ backgroundColor: 'light', color: 'black' }}>
            <div className="card-body">
              <h5 className="card-title" style={{ fontSize: '1.5rem' }}>
                Our Team
              </h5>
              <p className="card-text" style={{ fontSize: '1.1rem' }}>
                Our team is made up of the best people in the world. We love dogs but not cats.
                Our favorite color is purple.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-md-3 mb-3">
          <div className="card text-center">
            <div className="card-body">
              <h5 className="card-title" style={{ fontSize: '1.5rem' }}>VERHUN YEHOR</h5>
              <img src="Yehor.jpg" className="rounded-circle mb-3" alt="CEO" style={{ width: '200px', height: '200px', objectFit: 'cover' }} />
              <p className="card-text" style={{ fontSize: '1.1rem' }}>Our CEO is the best CEO in the world. He is a great guy and loves to play golf.</p>
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-3">
          <div className="card text-center">
            <div className="card-body">
              <h5 className="card-title" style={{ fontSize: '1.5rem' }}>KASABUTSKI YAN</h5>
              <img src="Jan.jpg" className="rounded-circle mb-3" alt="CTO" style={{ width: '200px', height: '200px', objectFit: 'cover' }} />
              <p className="card-text" style={{ fontSize: '1.1rem' }}>Our CTO is the best CTO in the world. He is a great guy and loves to play golf.</p>
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-3">
          <div className="card text-center">
            <div className="card-body">
              <h5 className="card-title" style={{ fontSize: '1.5rem' }}>KOROTKYY ARTEM</h5>
              <img src="Artem.jpg" className="rounded-circle mb-3" alt="COO" style={{ width: '200px', height: '200px', objectFit: 'cover' }} />
              <p className="card-text" style={{ fontSize: '1.1rem' }}>Our COO is the best COO in the world. He is a great guy and loves to play golf.</p>
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-3">
          <div className="card text-center">
            <div className="card-body">
              <h5 className="card-title" style={{ fontSize: '1.5rem' }}>STAHOVEC MATÚŠ</h5>
              <img src="developer.jpg" className="rounded-circle mb-3" alt="CMO" style={{ width: '200px', height: '200px', objectFit: 'cover' }} />
              <p className="card-text" style={{ fontSize: '1.1rem' }}>Our CMO is the best CMO in the world. He is a great guy and loves to play golf.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
