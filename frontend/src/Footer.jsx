import React from 'react'
import istockLogo from "./buttons/istockLogo.png"

export default function Footer() {

  

  return (
      
        <div>
          
          <div style={{"background-color":"#0C0D0D","color":"#FFF","font-size":"24px",}}>
            mensaje de pedir subscripcion
            
          </div>
          <div style={{"color":"#FFF","background-color":"#181A1A","display":"flex","justify-content":"space-between"}}>
            <div className = "ft-logo-botones" style={{"display":"flex","flex-direction":"column"}}>
                <a><img src={istockLogo} alt="" style={{"width":"120px","height":"auto"}}/></a>
                <button>Idioma</button>
                <button>Region</button>
            </div>
            <div className = "ft-mas-informacion" style={{"display":"flex","flex-direction":"column"}}>
                <a>Prueba</a>
                <a>Prueba</a>
                <a>Prueba</a>
                <a>Prueba</a>
                <a>Prueba</a>
                <a>Prueba</a>
                <a>Prueba</a>
                <a>Prueba</a>
            </div>
            <div className = "ft-empresa" style={{"display":"flex","flex-direction":"column"}}>
            <a>Prueba</a>
                <a>Prueba</a>
                <a>Prueba</a>
                <a>Prueba</a>
                <a>Prueba</a>
                <a>Prueba</a>
                <a>Prueba</a>
                <a>Prueba</a>
            </div>
            <div className = "ft-asistencia" style={{"display":"flex","flex-direction":"column"}}>
            <a>Prueba</a>
                <a>Prueba</a>
                <a>Prueba</a>
                <a>Prueba</a>
                <a>Prueba</a>
                <a>Prueba</a>
                <a>Prueba</a>
                <a>Prueba</a>
            </div>
            <div className = "ft-botones-sociales" >
                <button>Facebook</button>
                <button>Twitter</button>
                <button>Instagram</button>
                
            </div>
            
          </div>
          <div style={{"background-color":"#181A1A","color":"#FFF"}}>
            <br/><br/><br/>© 2025 iStockphoto LP. El diseño de iStock es una marca comercial de iStockphoto LP. Explora millones de fotos, ilustraciones y vídeos de stock de gran calidad.
          </div>
          
        </div>
  );
}
