import React, { useState } from 'react';
import imagenIcon from './photos/imagen.png';
import videoIcon from './photos/video.png';
import fybIcon from './photos/fyb.png';
const creditData = [
  [
    { credits: 1, price: 5800 },
    { credits: 3, price: 17400 },
    { credits: 6, price: 34800 },
    { credits: 12, price: 66200, savings: 3400 },
    { credits: 18, price: 98100, savings: 6300 },
  ],
  [
    { credits: 24, price: 126500, savings: 12700 },
    { credits: 36, price: 186800, savings: 22000 },
    { credits: 60, price: 297000, savings: 51000 },
    { credits: 150, price: 718100, savings: 151900 },
    { credits: 300, price: 1378100, savings: 361900 },
  ],
];

export default function CreditCarousel() {
  const [page, setPage] = useState(0);
  const [selected, setSelected] = useState(2);

  const handleSelect = (index) => {
    setSelected(index);
  };

  const getDetails = (credit) => {
    const images = credit.credits * 1;
    const videos = credit.credits / 6;
    return { images, videos };
  };

  return (
    <div style={styles.wrapper}>
      <p style={{ fontSize: '25px' }}>
        Mueve y conmueve a tus clientes con imágenes y vídeos auténticos y de alta calidad
      </p>
      <p style={{ fontSize: '20px' }}>
        Accede a una amplia biblioteca de imágenes que no encontrarás en ningún otro lugar, sin contenido generado con IA.
      </p>
      <p style={{ fontSize: '15px' }}>
        Los créditos no requieren compromisos y son una fórmula estupenda para obtener archivos que no están incluidos en tu suscripción.
      </p>

      <div style={styles.carousel}>
        {page > 0 && (
          <button style={styles.navBtn} onClick={() => setPage(page - 1)}>
            <svg width="40" height="40" fill="#fff" viewBox="0 0 24 24">
              <path d="M15 18l-6-6 6-6" stroke="#fff" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        )}

        {creditData[page].map((item, index) => (
          <div
            key={index}
            style={{
              ...styles.card,
              border: selected === index ? '2px solid #00f7c2' : '1px solid #ccc',
              backgroundColor: '#fff',
              color: selected === index ? '#000' : '#666E6E',
            }}
            onClick={() => handleSelect(index)}
          >
            <div style={styles.credits}>{item.credits}</div>
            <div>Créditos</div>
            <div style={styles.price}>AR$ {item.price.toLocaleString()}</div>
            {item.savings && (
              <div style={styles.savings}>Ahorrás AR$ {item.savings.toLocaleString()}</div>
            )}
          </div>
        ))}

        {page < creditData.length - 1 && (
          <button style={styles.navBtn} onClick={() => setPage(page + 1)}>
            <svg width="40" height="40" fill="none" viewBox="0 0 24 24">
              <path d="M9 6l6 6-6 6" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        )}
      </div>

      <div style={styles.summary}>
        <p style={{ fontSize: '15px' }}>Con este paquete podrías obtener hasta:</p>
        {creditData[page][selected] && (
          <div style={styles.assets}>
            <div style={styles.assetItem}>
              <img src={imagenIcon} alt="imagen" style={styles.icon} />
              {getDetails(creditData[page][selected]).images} imágenes
            </div>
            <div style={styles.assetItem}>
              <img src={videoIcon} alt="video" style={styles.icon} />
              {Math.floor(getDetails(creditData[page][selected]).videos)} vídeos
            </div>
            <div style={styles.assetItem}>
              <img src={fybIcon} alt="mezcla" style={styles.icon} />
              una mezcla de ambos
            </div>
          </div>
        )}
      </div>

      <button style={styles.buyBtn}>
        Comprar {creditData[page][selected]?.credits} créditos
      </button>
    </div>
  );
}

const styles = {
  wrapper: {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://www.rmit.edu.au/content/dam/rmit/rmit-images/professorial-academy/professorial-academy-banner.jpg")`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    color: '#fff',
    padding: '20px',
    fontFamily: 'sans-serif',
    borderRadius: '8px',
    textAlign: 'center',
    height: '100vh',
    width: '100vw',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    boxSizing: 'border-box',
  },
  carousel: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '12px',
    flexWrap: 'nowrap',
    overflowX: 'auto',
    padding: '10px',
  },
  navBtn: {
    backgroundColor: 'transparent',
    border: 'none',
    fontSize: '24px',
    color: '#fff',
    cursor: 'pointer',
  },
  card: {
    padding: '16px',
    borderRadius: '1px',
    width: '150px',
    textAlign: 'center',
    cursor: 'pointer',
    height: '170px',
  },
  credits: {
    fontSize: '50px',
  },
  price: {
    marginTop: '8px',
    fontWeight: 'bold',
    fontSize: '18px',
  },
  savings: {
    fontSize: '12px',
    color: '#ccc',
    marginTop: '4px',
  },
  summary: {
    marginTop: '20px',
  },
  assets: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    marginTop: '10px',
  },
  assetItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    color: '#fff',
  },
  icon: {
    width: '24px',
    height: '24px',
  },
  buyBtn: {
    backgroundColor: '#ff4646',
    color: '#fff',
    border: 'none',
    padding: '12px 24px',
    borderRadius: '6px',
    fontSize: '16px',
    marginTop: '20px',
    cursor: 'pointer',
    width: '250px', 
  },
};
