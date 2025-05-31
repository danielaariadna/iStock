import { useEffect, useState } from "react";
//import { createClient } from '@supabase/supabase-js'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Account from './Account';

import './App.css';
import SquareGrid from './SquareGrid';
import ButtonAppBar from './NavBar';
import Footer from './Footer';
import ImageEditor from "./EditorPage"; 

import InicioSesion from "./InicioSesion";
import Registrarse from "./Registrarse";
import LayoutConNavbar from './LayoutConNavbar';


import supabase from "./supabase-client"; // Permite un singleton con la conexión a la base de datos

import {fetchResources, insertUsuarioBasico, updateUsuarioCompleto} from "./supabase-consultas";

function App() {
  // Estado para recursos (con categorías)
  const [resources, setResources] = useState([]);


  // Estado para filtro de categoría (string con código) y búsqueda
  const [filter, setFilter] = useState('Todas');
  const [inputValue, setInputValue] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  // Estado del usuario que actualmente inició sesión
  const [usuarioActual,setUsuarioActual] = useState({});

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

  //updateUsuarioCompleto("aiejde@gmail.com","ioa","aowidow","netflix");
  //insertUsuarioBasico("jeremiasjulian5003@gmail.com",1234,"argentina",false);
  //updateUsuarioCompleto("jeremiasjulian5003@gmail.com","Jere","Julian","google 2");

  // Manejo de la búsqueda con Enter
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      setSearchTerm(inputValue);
    }
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Rutas con Navbar y Footer */}
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
            <Route path="/cuenta" element={<Account usuario={usuarioActual} />} />
          </Route>

          {/* Rutas sin Navbar ni Footer */}
          <Route path="/iniciosesion" element={<InicioSesion setUsuarioActual={setUsuarioActual} />} />
          <Route path="/registro" element={<Registrarse />} />

        </Routes>

        <Footer />
      </div>
    </Router>
  );
}
  
export default App;
