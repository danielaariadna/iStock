import { useEffect, useState } from "react";
import { createClient } from '@supabase/supabase-js'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import './App.css';
import SquareGrid from './SquareGrid';
import ButtonAppBar from './NavBar';
import Footer from './Footer';
import ImageEditor from "./EditorPage"; // Importá tu editor

async function getResources(supabase){
    const { data, error } = await supabase
  .from('recursos')
  .select()
  return data;
  
}

function App() {
  const supabaseUrl = 'https://iennmlivjcdgfdccxinc.supabase.co'
  const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imllbm5tbGl2amNkZ2ZkY2N4aW5jIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc3ODc2NjQsImV4cCI6MjA2MzM2MzY2NH0.Y-7YQeSAk0-pDj9kOoaJkHDBvzeh7KDPSFzySTMOp10"
  const supabase = createClient(supabaseUrl, supabaseKey)

  // Generar lista de fotos a mostrar
  var imageList = []

  const [instruments, setInstruments] = useState([]);
  useEffect(() => {
    getInstruments();
  }, []);
  async function getInstruments() {
    const { data } = await supabase.from("recursos").select();
    setInstruments(data);
  }
  
  instruments.forEach(function(element){
    imageList.push(element.ruta_archivo);
  })
  

  console.log("imagelist: ",imageList);
  
  
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