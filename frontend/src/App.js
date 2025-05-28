import { useEffect, useState } from "react";
//import { createClient } from '@supabase/supabase-js'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import './App.css';
import SquareGrid from './SquareGrid';
import ButtonAppBar from './NavBar';
import Footer from './Footer';
import ImageEditor from "./EditorPage"; 

import supabase from "./supabase-client"; // Permite un singleton con la conexión a la base de datos

import {fetchResources} from "./supabase-consultas";

function App() {
  // Estado para recursos (con categorías)
  const [resources, setResources] = useState([]);

  // Estado para filtro de categoría (string con código) y búsqueda
  const [filter, setFilter] = useState('Todas');
  const [inputValue, setInputValue] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  // Obtener recursos con sus categorías al montar el componente
  useEffect(() => {
    fetchResources(setResources);
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

        
        

        <header className="App-header">
          <Routes>
            <Route path="/" element={
              <div style={{"display":"flex","flexDirection": 'column',"flex-grow":"1","width":"100%"}}>
                <>
                {/*Barra de Busqueda*/}
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
                </>

                {/*Grilla de Imagenes*/}
                <SquareGrid imageList={filteredResources} />
              </div>
          
          } />
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

    function SearchBar({filter, e, setFilter, inputValue, setInputValue, handleKeyDown}) {
      return (<>
                {
    /*Barra de Busqueda*/
  }
                <div style={{
    padding: '15px',
    backgroundColor: '#fff',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    maxWidth: '2000px'
  }}>
                  <select value={filter} onChange={e => setFilter(e.target.value)} style={{
      padding: '15px',
      fontSize: '16px'
    }}>
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

                  <input type="search" placeholder="Buscar por palabra clave (ej: agua, verde...)" value={inputValue} onChange={e => setInputValue(e.target.value)} onKeyDown={handleKeyDown} style={{
      flexGrow: 1,
      padding: '15px',
      fontSize: '16px'
    }} />
                </div>
                </>);
    }
  
export default App;
