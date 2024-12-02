import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function AboutUs() {
  return (
    <div
      style={{
        backgroundImage: 'url(BLK.jpg)', 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        color: 'white',
        padding: '20px'
      }}
    >
      <h1 className="text-center mb-4" style={{ fontSize: '2.5rem' }}>
        About Us
      </h1>
      <div className="row mt-4">
        <div className="col-md-3 mb-3">
          <div className="card text-center">
            <div className="card-body">
              <h5 className="card-title" style={{ fontSize: '1.5rem' }}>VERHUN YEHOR</h5>
              <img src="Yehor.jpg" className="rounded-circle mb-3" alt="CEO" style={{ width: '200px', height: '200px', objectFit: 'cover' }} />
              <p className="card-text" style={{ fontSize: '1.1rem' }}>Hrám na syntetizátor, rád chodím na turistiku a mám záľubu v strategických hrách.
              ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-3">
          <div className="card text-center">
            <div className="card-body">
              <h5 className="card-title" style={{ fontSize: '1.5rem' }}>KASABUTSKI YAN</h5>
              <img src="Jan.jpg" className="rounded-circle mb-3" alt="CTO" style={{ width: '200px', height: '200px', objectFit: 'cover' }} />
              <p className="card-text" style={{ fontSize: '1.1rem' }}>Som motion a grafický dizajnér, zberateľ, videobloger a geek. Milujem retro hry, herné konzoly, komiksy a kartové hry.</p>
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-3">
          <div className="card text-center">
            <div className="card-body">
              <h5 className="card-title" style={{ fontSize: '1.5rem' }}>KOROTKYY ARTEM</h5>
              <img src="Artem.jpg" className="rounded-circle mb-3" alt="COO" style={{ width: '200px', height: '200px', objectFit: 'cover' }} />
              <p className="card-text" style={{ fontSize: '1.1rem' }}>Rád hrám na gitaru, snowboardujem, ovládam programovací jazyk C++ a občas si vychutnám pivo s priateľmi.</p>
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-3">
          <div className="card text-center">
            <div className="card-body">
              <h5 className="card-title" style={{ fontSize: '1.5rem' }}>STAHOVEC MATÚŠ</h5>
              <img src="matus.jpg" className="rounded-circle mb-3" alt="CMO" style={{ width: '200px', height: '200px', objectFit: 'cover' }} />
              <p className="card-text" style={{ fontSize: '1.1rem' }}>Voľný čas trávim lyžovaním, čítaním kníh, obdivovaním športových áut a hraním simulátorových hier.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
