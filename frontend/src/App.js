import { useEffect, useState } from "react";
import { createClient } from '@supabase/supabase-js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import SquareGrid from './SquareGrid';
import ImageEditor from "./EditorPage";
import InicioSesion from "./InicioSesion";
import Registrarse from "./Registrarse";
import LayoutConNavbar from './LayoutConNavbar';

const supabaseUrl = 'https://iennmlivjcdgfdccxinc.supabase.co';
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imllbm5tbGl2amNkZ2ZkY2N4aW5jIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc3ODc2NjQsImV4cCI6MjA2MzM2MzY2NH0.Y-7YQeSAk0-pDj9kOoaJkHDBvzeh7KDPSFzySTMOp10";
const supabase = createClient(supabaseUrl, supabaseKey);

function App() {
  const [resources, setResources] = useState([]);
  const [filter, setFilter] = useState('Todas');
  const [inputValue, setInputValue] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

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

  const filteredResources = resources.filter(resource => {
    if (filter !== 'Todas') {
      const categoriasIds = resource.recurso_pertenecea_categoria.map(c => c.categoria_codigo.toString());
      if (!categoriasIds.includes(filter)) {
        return false;
      }
    }

    const palabras = resource.palabras_claves_busqueda?.toLowerCase().split(';').map(p => p.trim()) || [];
    if (searchTerm.trim() !== '' && !palabras.some(palabra => palabra.includes(searchTerm.toLowerCase()))) {
      return false;
    }

    return true;
  });

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      setSearchTerm(inputValue);
    }
  };

  return (
    <Router>
      <Routes>
        {/* Rutas con NavBar y Footer */}
        <Route element={<LayoutConNavbar />}>
          <Route path="/" element={
            <div style={{ display: "flex", flexDirection: 'column', flexGrow: "1", width: "100%" }}>
              <div style={{ padding: '15px', backgroundColor: '#fff', display: 'flex', alignItems: 'center', gap: '10px', maxWidth: '2000px' }}>
                <select
                  value={filter}
                  onChange={(e) => {
                    setFilter(e.target.value);
                    setInputValue('');
                    setSearchTerm('');
                  }}
                  style={{ padding: '15px', fontSize: '16px' }}
                >
                  <option value="Todas">Todas</option>
                  <option value="1">Aire Libre</option>
                  <option value="2">Paisaje</option>
                  <option value="3">Argentina</option>
                  <option value="4">Comida</option>
                  <option value="5">Animales</option>
                  <option value="6">Flores</option>
                  <option value="7">Música</option>
                  <option value="8">Deportes</option>
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

              <SquareGrid imageList={filteredResources} />
            </div>
          } />

          <Route path="/editor/:id" element={<ImageEditor imageList={filteredResources} />} />
        </Route>

        {/* Rutas sin NavBar ni Footer */}
        <Route path="/iniciosesion" element={<InicioSesion />} />
        <Route path="/registro" element={<Registrarse />} />
      </Routes>
    </Router>
  );
}

export default App;
