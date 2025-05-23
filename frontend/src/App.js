import { useEffect, useState } from "react";
import { createClient } from '@supabase/supabase-js'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import './App.css';
import SquareGrid from './SquareGrid';
import ButtonAppBar from './NavBar';
import Footer from './Footer';
import ImageEditor from "./EditorPage"; 

function App() {
  
  const supabaseUrl = 'https://iennmlivjcdgfdccxinc.supabase.co'
  const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imllbm5tbGl2amNkZ2ZkY2N4aW5jIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc3ODc2NjQsImV4cCI6MjA2MzM2MzY2NH0.Y-7YQeSAk0-pDj9kOoaJkHDBvzeh7KDPSFzySTMOp10"
  const supabase = createClient(supabaseUrl, supabaseKey)

  // Estado para recursos (con categorías)
  const [resources, setResources] = useState([]);

  // Estado para filtro de categoría (string con código) y búsqueda
  const [filter, setFilter] = useState('Todas');
  const [inputValue, setInputValue] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  // Obtener recursos con sus categorías al montar el componente
  useEffect(() => {
    async function fetchResources() {
      const { data, error } = await supabase
        .from('recursos')
        .select(`
          *,
          recurso_pertenecea_categoria (
            categoria_codigo
          )
        `);

      if (error) {
        console.error('Error al cargar recursos:', error);
      } else {
        setResources(data);
      }
    }
    fetchResources();
  }, []);

  // Filtrar recursos según categoría y palabra clave
  const filteredResources = resources.filter(resource => {
    // Filtrar por categoría (si no es 'Todas')
    if (filter !== 'Todas') {
      const categoriasIds = resource.recurso_pertenecea_categoria.map(c => c.categoria_codigo.toString());
      if (!categoriasIds.includes(filter)) {
        return false;
      }
    }

    // Filtrar por palabra clave
    const palabras = resource.palabras_claves_busqueda.toLowerCase().split(';').map(p => p.trim());

    if (searchTerm.trim() !== '' && !palabras.some(palabra => palabra.includes(searchTerm.toLowerCase()))) {
      return false;
    }

    return true;
  });

  // Manejo de la búsqueda con Enter
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      setSearchTerm(inputValue);
    }
  };

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
            <option value="1">Aire Libre</option>
            <option value="2">Paisaje</option>
            <option value="3">Argentina</option>
            {/* Agrega más opciones de categorías si las hay */}
          </select>

          <input
            type="search"
            placeholder="Buscar por palabra clave (ej: agua, verde...)"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            style={{ flexGrow: 1, padding: '15px', fontSize: '16px' }}
          />
        </div>

        <header className="App-header">
          <Routes>
            <Route path="/" element={<SquareGrid imageList={filteredResources} />} />
            <Route path="/editor/:id" element={<ImageEditor imageList={filteredResources.map(r => r)} />} />
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
