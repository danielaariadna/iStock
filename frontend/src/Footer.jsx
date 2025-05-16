import React from 'react';
import istockLogo from './buttons/istockLogo.png';

export default function Footer() {
  return (
    <div>
      <div style={{ backgroundColor: '#0C0D0D', color: '#FFF', fontSize: '24px', padding: '10px' }}>
        Mensaje de pedir suscripción
      </div>

      <div style={{ color: '#FFF', backgroundColor: '#181A1A', display: 'flex', justifyContent: 'space-between', padding: '20px' }}>
        <div className="ft-logo-botones" style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <a href="."><img src={istockLogo} alt="iStock Logo" style={{ width: '120px', height: 'auto' }} /></a>
          <button>Idioma</button>
          <button>Región</button>
        </div>

        <div className="ft-mas-informacion" style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          {[...Array(8)].map((_, i) => <a key={i} href=".">Prueba</a>)}
        </div>

        <div className="ft-empresa" style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          {[...Array(8)].map((_, i) => <a key={i} href=".">Prueba</a>)}
        </div>

        <div className="ft-asistencia" style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          {[...Array(8)].map((_, i) => <a key={i} href=".">Prueba</a>)}
        </div>

        <div className="ft-botones-sociales" style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          <button>Facebook</button>
          <button>Twitter</button>
          <button>Instagram</button>
        </div>
      </div>

      <div style={{ backgroundColor: '#181A1A', color: '#FFF', padding: '30px 20px' }}>
        © 2025 iStockphoto LP. El diseño de iStock es una marca comercial de iStockphoto LP. Explora millones de fotos, ilustraciones y vídeos de stock de gran calidad.
      </div>
    </div>
  );
}
