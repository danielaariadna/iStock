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

  const [inputValue, setInputValue] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const [filter, setFilter] = useState('Todas');

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      setSearchTerm(inputValue);
    }
  };

  const filteredImages = imageList.filter(img => {
    const filename = img.split('/').pop();

    if (filter !== 'Todas' && !filename.startsWith(filter)) {
      return false;
    }

    if (!filename.toLowerCase().includes(searchTerm.toLowerCase())) {
      return false;
    }

    return true;
  });

  return (
    <Router>
      <div className="App">
        <ButtonAppBar />
        <div style={{ padding: '15px', backgroundColor: '#fff', display: 'flex', alignItems: 'center', gap: '10px', maxWidth: '2000px' }}>
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            style={{ padding: '15px', fontSize: '16px' }}
          >
            <option value="Todas">Todas</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
          </select>

          <input
            type="search"
            placeholder="Buscar imagen (ej: 1, 2, 3...)"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            style={{ flexGrow: 1, padding: '15px', fontSize: '16px' }}
          />
        </div>
        <header className="App-header">
          <Routes>
            <Route path="/" element={<SquareGrid imageList={filteredImages} />} />
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