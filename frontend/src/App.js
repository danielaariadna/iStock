import React from 'react';

import foto1 from './photos/1.jpg';
import foto2 from './photos/2.jpg';
import foto3 from './photos/3.jpg';
import foto4 from './photos/4.jpg';
import foto5 from './photos/5.jpg';
import foto6 from './photos/6.jpg';
import foto7 from './photos/7.jpg';

import './App.css';
import SquareGrid from './SquareGrid';
import ButtonAppBar from './NavBar';
import Footer from './Footer';

function App() {
  // Lista de imágenes
  const fotos = [foto1, foto2, foto3, foto4, foto5, foto6, foto7];
  const imageList = Array.from({ length: 100 }, () => fotos[Math.floor(Math.random() * fotos.length)]);

  return (
    <div className="App">
      <ButtonAppBar />
      <header className="App-header">
        <SquareGrid imageList={imageList} />
      </header>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
