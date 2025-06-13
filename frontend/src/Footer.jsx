import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import istockLogo from './buttons/istockLogo.png'; // Ajustá esta ruta si tu logo está en otro lado

export default function Footer() {
  const footerLinkStyle = {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '14px',
    zindex: 10,
  };

  const sectionStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '6px'
  };

  const buttonStyle = {
    backgroundColor: '#222425',
    border: 'none',
    borderRadius: '4px',
    width: '40px',
    height: '40px',
    cursor: 'pointer',
    color: '#fff',
    fontSize: '18px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  };

  return (
    <div>
      {/* Mensaje superior */}
      <div style={{ backgroundColor: '#0C0D0D', color: '#FFF', fontSize: '18px', padding: '14px', textAlign: 'center' }}>
        Ahorra en las imágenes de alta calidad que más te gustan. <span style={{ color: '#00CC99' }}>Suscríbete hoy.</span>
      </div>

      {/* Contenido del footer */}
      <div style={{ color: '#FFF', backgroundColor: '#181A1A', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', padding: '30px 20px' }}>

        {/* Logo e idioma */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <a href="/"><img src={istockLogo} alt="iStock Logo" style={{ width: '120px', height: 'auto' }} /></a>
          <button style={{ backgroundColor: '#222425', color: '#fff', border: 'none', padding: '8px', cursor: 'pointer' }}>Español</button>
          <button style={{ backgroundColor: '#222425', color: '#fff', border: 'none', padding: '8px', cursor: 'pointer' }}>España</button>
        </div>

        {/* Más información */}
        <div style={sectionStyle}>
          <strong>Más información</strong>
          <a href="." style={footerLinkStyle}>Planes y precios</a>
          <a href="." style={footerLinkStyle}>Códigos descuentos de iStock</a>
          <a href="." style={footerLinkStyle}>Trucos e ideas</a>
          <a href="." style={footerLinkStyle}>Guía de búsqueda</a>
          <a href="." style={footerLinkStyle}>Fotos de stock</a>
          <a href="." style={footerLinkStyle}>Vídeos de stock</a>
          <a href="." style={footerLinkStyle}>Ilustraciones de stock</a>
          <a href="." style={footerLinkStyle}>Plugins y aplicaciones</a>
        </div>

        {/* Empresa */}
        <div style={sectionStyle}>
          <strong>Empresa</strong>
          <a href="." style={footerLinkStyle}>Acerca de nosotros</a>
          <a href="." style={footerLinkStyle}>Sala de prensa</a>
          <a href="." style={footerLinkStyle}>Investor</a>
          <a href="." style={footerLinkStyle}>Empleo</a>
          <a href="." style={footerLinkStyle}>Afiliados</a>
          <a href="." style={footerLinkStyle}>Vender material</a>
          <a href="." style={footerLinkStyle}>Asistencia al colaborador</a>
        </div>

        {/* Asistencia */}
        <div style={sectionStyle}>
          <strong>Asistencia</strong>
          <a href="." style={footerLinkStyle}>Contáctanos</a>
          <a href="." style={footerLinkStyle}>Preguntas frecuentes</a>
          <a href="." style={footerLinkStyle}>Mapa web</a>
        </div>

        {/* Botones sociales */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <button style={buttonStyle} aria-label="Facebook">
            <FaFacebookF />
          </button>
          <button style={buttonStyle} aria-label="Twitter">
            <FaTwitter />
          </button>
          <button style={buttonStyle} aria-label="Instagram">
            <FaInstagram />
          </button>
        </div>
      </div>

      {/* Pie de página */}
      <div style={{ backgroundColor: '#181A1A', color: '#FFF', padding: '30px 20px', fontSize: '13px' }}>
        © 2025 iStockphoto LP. El diseño de iStock es una marca comercial de iStockphoto LP. Explora millones de fotos, ilustraciones y vídeos de stock de gran calidad.
      </div>
    </div>
  );
}
