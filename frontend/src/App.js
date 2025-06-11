import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Account from './Account';
import './App.css';
import SquareGrid from './SquareGrid';
import ButtonAppBar from './NavBar';
import Footer from './Footer';
import ImageEditor from "./EditorPage"; 
import InicioSesion from "./InicioSesion";
import Registrarse from "./Registrarse";
import LayoutConNavbar from './LayoutConNavbar';

import supabase from "./supabase-client";
import { fetchResources, insertUsuarioBasico, updateUsuarioCompleto, insertCompraRecurso, fetchRecursosCompradosPorUsuario } from "./supabase-consultas";
import Caja from './Caja';

import supabase from "./supabase-client"; // Permite un singleton con la conexión a la base de datos

//import {insertCompraRecursoUsandoSubscripcion,insertCompraSubscripcion,updateUsuarioSoloSubscripcion,insertCompraRecursoUsandoCreditos,updateUsuarioSoloCreditos,insertCompraCreditos,fetchPaqueteCreditosByID,purchaseHash,fetchResources, insertUsuarioBasico, updateUsuarioCompleto,insertCompraRecurso,fetchRecursosCompradosPorUsuario} from "./supabase-consultas";
//import {} from "./business-logic"
import {fetchResources} from "./supabase-consultas";

function App() {
  const [resources, setResources] = useState([]);
  const [filter, setFilter] = useState('Todas');
  const [inputValue, setInputValue] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [usuarioActual, setUsuarioActual] = useState({});

  useEffect(() => {
    fetchResources(setResources);
  }, []);

  const filteredResources = resources.filter(resource => {
    if (filter !== 'Todas') {
      const categoriasIds = resource.recurso_pertenecea_categoria.map(c => c.categoria_codigo.toString());
      if (!categoriasIds.includes(filter)) {
        return false;
      }
    }

    const palabras = resource.palabras_claves_busqueda.toLowerCase().split(';').map(p => p.trim());
    if (searchTerm.trim() !== '' && !palabras.some(palabra => palabra.includes(searchTerm.toLowerCase()))) {
      return false;
    }

    return true;
  });

  //updateUsuarioCompleto("aiejde@gmail.com","ioa","aowidow","netflix");
  //insertUsuarioBasico("jeremiasjulian5003@gmail.com",1234,"argentina",false);
  //updateUsuarioCompleto("jeremiasjulian5003@gmail.com","Jere","Julian","google 2");

  //insertCompraRecurso("jeremiasjulian5003@gmail.com",1111222233334444,3);
  //fetchRecursosCompradosPorUsuario(null,"jeremiasjulian5003@gmail.com");

  //console.log(purchaseHash("jeremiasjulian5003@gmail.com"));

  //updateUsuarioSoloCreditos("jeremiasjulian5003@gmail.com",300);
  
  //fetchPaqueteCreditosByID(null,300);

  //insertCompraCreditos("jeremiasjulian5003@gmail.com",1111222233334444,300);
  //insertCompraRecursoUsandoCreditos("jeremiasjulian5003@gmail.com",3);
  //insertCompraRecursoUsandoCreditos("test@gmail.com",3);
  //updateUsuarioSoloSubscripcion("jeremiasjulian5003@gmail.com",2,120,4);

  //insertCompraSubscripcion("jeremiasjulian5003@gmail.com",1111222233334444,2);

  //insertCompraRecursoUsandoSubscripcion("test@gmail.com",4);

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
          <Route element={<LayoutConNavbar usuarioActual={usuarioActual} />}>
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
          <Route path="/caja" element={<Caja />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
