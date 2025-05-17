import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

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
import ImageEditor from './EditorPage';

function App() {
  const fotos = [foto1, foto2, foto3, foto4, foto5, foto6, foto7];

  const [imageList] = useState(
    () => Array.from({ length: 100 }, () => fotos[Math.floor(Math.random() * fotos.length)])
  );

  return (
    <Router>
      <div className="App">
        <ButtonAppBar />
        <header className="App-header">
          <Routes>
            <Route path="/" element={<SquareGrid imageList={imageList} />} />
            <Route path="/editor/:id" element={<ImageEditor imageList={imageList} />} />
          </Routes>
        </header>
        <footer>
          <Footer />
        </footer>
      </div>
    </Router>
  );
}

export default App;

