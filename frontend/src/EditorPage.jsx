import React, { useState,useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import IconRecortar from './photos/recortar.png';
import IconAñadirTexto from './photos/texto.png';
import IconEliminarFondo from './photos/tijera.png';
import IconExtender from './photos/expandir.png';
import IconEliminarObjetos from './photos/borrar.png';
import IconReemplazar from './photos/pinceles.png';
import IconGuardar from './photos/guardar.png';
import IconProbar from './photos/descargar.png';
import ImageInfo from './ImageInfo';

import supabase from "./supabase-client";

import { fetchResourceByID, fetchNombreUsuarioByID, fetchCategoriasByResourceID } from './supabase-consultas';

const itemStyle = {
  backgroundColor: 'white',
  borderRadius: '10px',
  padding: '15px 10px',
  textAlign: 'center',
  boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
  cursor: 'pointer',
  userSelect: 'none',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  fontSize: '12px',
  gap: '6px',
  width: '100px',
  marginBottom: '10px'
};

export default function ImageEditor({ imageList,usuarioActual }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState('gratis');

  // Estado para el autor actual del recurso
  const [autor,setAutor] = useState('');

  // Estado para las categorias del recurso actual
  const [categoria,setCategoria] = useState('');

  const imageId = parseInt(id, 10);

  // Buscar imagen dentro de imageList que coincida con la id del parametro
  var newImageObj;
  for(let i = 0; i < imageList.length; i++){
    if(imageList[i].id === imageId){
      newImageObj = imageList[i];
      break;
    }
  }
  const imageObj = newImageObj;//imageList[imageId];

  // Obtener el nombre del usuario del recurso actual
  useEffect(() => {
    if (!imageObj) return;
    fetchNombreUsuarioByID(setAutor,imageObj.autor_usuario_id);
  }, [imageObj]); // Se usa como dependencia que el objeto imageObj se haya encontrado

  // Obtener el nombre de las categorias del recurso actual (separadas por ' | ')
  useEffect(() => {
    if (!imageObj) return;
    fetchCategoriasByResourceID(setCategoria,imageObj.id);
  }, [imageObj]); // Se usa como dependencia que el objeto imageObj se haya encontrado

  

  console.log("ID:", id);
  console.log("imageId:", imageId);
  console.log("imageList.length:", imageList.length);
  console.log("imageList: ",imageList);
  console.log("imageObj:", imageObj);
  console.log("nombre autor: ",autor);
  if (!imageObj) {
    return <div>Imagen no encontrada</div>;
  }




  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', fontFamily: 'Arial, sans-serif' }}>
      {/* Contenedor de paneles */}
      <div style={{ display: 'flex', flex: 1 }}>
        {/* Panel izquierdo */}
        <aside style={{
          width: '200px',
          color: 'black',
          background: '#f4f4f4',
          padding: '20px',
          borderRight: '1px solid #ccc',
          justifyContent: 'center'
        }}>
          <ul style={{
            listStyle: 'none',
            paddingLeft: 0,
            margin: 0,
            display: 'flex',
            flexDirection: 'column',
            gap: '15px',
          }}>
            <li style={itemStyle}>
              <img src={IconRecortar} alt="Recortar" style={{ width: '30px', marginBottom: '8px' }} />
              Recortar
            </li>
            <li style={itemStyle}>
              <img src={IconAñadirTexto} alt="Añadir texto" style={{ width: '34px', marginBottom: '8px' }} />
              Añadir texto
            </li>

            <hr style={{ borderColor: '#ddd', margin: '10px 0' }} />

            <li style={itemStyle}>
              <img src={IconEliminarFondo} alt="Eliminar fondo" style={{ width: '40px', marginBottom: '8px' }} />
              Eliminar fondo
            </li>
            <li style={itemStyle}>
              <img src={IconExtender} alt="Extender imágenes" style={{ width: '25px', marginBottom: '8px' }} />
              Extender imágenes
            </li>
            <li style={itemStyle}>
              <img src={IconEliminarObjetos} alt="Eliminar objetos" style={{ width: '34px', marginBottom: '8px' }} />
              Eliminar objetos
            </li>
            <li style={itemStyle}>
              <img src={IconReemplazar} alt="Añadir o reemplazar objetos" style={{ width: '34px', marginBottom: '8px' }} />
              Añadir o reemplazar objetos
            </li>
          </ul>
        </aside>

        {/* Panel central */}
        <main style={{ flex: 1, padding: '20px', textAlign: 'center', backgroundColor: '#fff' }}>
          <div style={{color: '#000',textAlign: 'left'}}>
            Titulo: {imageObj.titulo}<br/>
            Tags: {imageObj.palabras_claves_busqueda}
          </div>
          <div style={{ marginBottom: '15px', display: 'flex', justifyContent: 'center', gap: '10px' }}>
            <button
              style={{
                padding: '8px 16px',
                backgroundColor: '#cccccc',
                color: 'Black',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                fontSize: '14px',
                
              }}
              onClick={() => alert('Guardar clickeado')}
            >
                 <img src={IconGuardar} alt="Guardar" style={{ width: '20px', height: '20px', paddingRight: '8px' }} />
              Guardar
            </button>
            <button
              style={{
                padding: '8px 16px',
                backgroundColor: '#cccccc',
                color: 'Black',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                fontSize: '14px',
              }}
              onClick={() => alert('Probar clickeado')}
            >
             <img src={IconProbar} alt="Guardar" style={{ width: '20px', height: '20px',paddingRight: '8px' }} />
              Probar
            </button>
          </div>
          <div
  style={{
    position: 'relative',
    margin: '0 auto',
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    backgroundColor: '#f0f0f0',
  }}
>
  <img
    src={imageObj.ruta_archivo}
    alt={`Imagen ${imageId}`}
    style={{
        width: '900x', 
        height: '600px',
      objectFit: 'cover',
      display: 'block'
    }}
  />
  <div
    style={{
      position: 'absolute',
      bottom: '10px',
      left: '10px',
      background: 'rgba(255, 255, 255, 0.5)',
      color: 'Black',
      padding: '5px 10px',
      borderRadius: '5px',
      fontSize: '20px',
    }}
  >
     <img 
    src={require('./photos/IStock.png')} 
    alt="Logo iStock" 
    style={{ width: '120px', height: 'auto' }} 
  />
    <br />
    Credit: {autor}
  </div>
  
</div>
{/* Contenedor para descripción y autor */}
<div style={{
    padding: '10px 15px',
    backgroundColor: 'white',
    textAlign: 'left',
    borderRadius: '0 0 8px 8px',
    boxShadow: '0 -2px 6px rgba(0,0,0,0.1)'
  }}>
    <p style={{ margin: '0', fontWeight: 'bold', fontSize: '18px', color: 'Black' }}>
      Descripción
    </p>
    <p style={{ margin: '5px 0 0', fontSize: '14px', color: '#555' }}>
    {imageObj.descripcion}
    </p>
  </div>
          
        </main>
 {/* Panel derecho */}
<aside style={{
  width: '300px',
  background: '#f9f9f9',
  color: 'black',
  padding: '20px',
  borderLeft: '1px solid #ccc',
}}>

  <h3 style={{ marginBottom: '5px' }}>Nuevos precios más bajos</h3>
  <p style={{ marginTop: 0, marginBottom: '10px', fontWeight: 'normal', color: '#555' }}>
    Imágenes de alta calidad para todos tus proyectos
  </p>

  {/* Opción 1: Pago único */}
  <div 
    onClick={() => setSelectedOption('pago')}
    style={{
      cursor: 'pointer',
      border: selectedOption === 'pago' ? '2px solid #00796b' : '2px solid transparent',
      borderRadius: '8px',
      padding: '15px',
      marginBottom: '20px',
      backgroundColor: selectedOption === 'pago' ? '#b2dfdb' : 'transparent'
    }}
  >
    <p style={{ fontWeight: 'bold', fontSize: '18px', margin: 0 }}>
      AR${imageObj.precio} por esta imagen
    </p>
  </div>

  {/* Opción 2: Prueba gratuita */}
  <div 
    onClick={() => setSelectedOption('gratis')}
    style={{
      cursor: 'pointer',
      border: selectedOption === 'gratis' ? '2px solid #00796b' : '2px solid transparent',
      borderRadius: '8px',
      padding: '15px',
      backgroundColor: selectedOption === 'gratis' ? '#e0f7fa' : 'transparent',
      color: selectedOption === 'gratis' ? '#004d40' : 'black',
      fontSize: '16px',
    }}
  >
    <h4 style={{ marginBottom: '5px', color: selectedOption === 'gratis' ? '#00796b' : 'black' }}>PRUEBA GRATUITA DE UN MES</h4>

    <p style={{ fontWeight: 'bold', marginBottom: '10px' }}>Obtén esta imagen gratis</p>
    <ul style={{ paddingLeft: '20px', marginTop: 0, marginBottom: '10px' }}>
      <li>✓ Obtén las 10 imágenes que desees</li>
      <li>✓ El primer mes es gratis, luego AR$ 17.200 por mes</li>
      <li>✓ Cancela en cualquier momento durante tu mes de prueba</li>
    </ul>
    <p style={{ fontWeight: 'bold', marginTop: 0 }}>
      <a href="#" style={{ color: '#00796b', textDecoration: 'none' }}>
        Obtén más información sobre la prueba gratuita ›
      </a>
    </p>
  </div>

  <button
    style={{
      backgroundColor: '#00796b',
      color: 'white',
      padding: '10px 20px',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      marginTop: '20px',
      width: '100%',
      fontWeight: 'bold'
    }}
    onClick={async () => {
      //const { data: { user } } = await supabase.auth.getUser();

      // Comprobar si se inició sesion
      if (Object.keys(usuarioActual).length === 0) {
        navigate('/iniciosesion');
      } else {
        navigate(`/caja/${imageObj.id}`, {
          state: { imageUrl: imageObj.ruta_archivo }
        });
      }
    }}
  >
    Continuar con la compra
  </button>

<button
            style={{
              backgroundColor: '#f44336',
              color: 'white',
              padding: '10px 20px',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              width: '100%',
              fontWeight: 'bold'
            }}
          onClick={() =>{
            navigate('/precios');
          }}>
            Ver planes y precio
          </button>
          {/*Información del archivo*/}
          <ImageInfo image={imageObj} autorName={autor} categories={categoria}></ImageInfo>
</aside>
        
      </div>

      {/* Nuevo div debajo de todo */}
      
      <div style={{
        padding: '15px',
        backgroundColor: '#ececec',
        textAlign: 'center',
        borderTop: '1px solid #ccc'
      }}>
      
      </div>
    </div>
  );
}