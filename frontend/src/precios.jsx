import React, { useState } from 'react';
import imagenIcon from './photos/imagen.png';
import videoIcon from './photos/video.png';
import fybIcon from './photos/fyb.png';
import { useNavigate } from 'react-router-dom';
const styles = {
  container: {
    height: '100vh',
    width: '100vw',
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://www.rmit.edu.au/content/dam/rmit/rmit-images/professorial-academy/professorial-academy-banner.jpg")`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundColor: '#191847',
    color: 'white',
    padding: '16px',
    fontFamily: 'Arial, sans-serif',
  },
tabsContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '8px',
    marginTop:'35px',
    marginBottom: '16px',
  },
  tabButton: (active) => ({
    padding: '8px 19px',
    borderRadius: '2px',
    backgroundColor: active ? 'white' : 'rgba(46, 43, 95, 0.6)',
    color: active ? 'black' : 'white',
    cursor: 'pointer',
    border: 'none',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontSize: '15px',
    width: '220px',
    height: '50px',  
  }),
  tabSmallText: {
    fontSize: '10px',
  },
  subscriptionCard: {
    maxWidth: '400px',
    margin: '0 auto',
    backgroundColor: 'white',
    color: 'black',
    borderRadius: '12px',
    padding: '24px',
  },
  toggleContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '16px',
    alignItems: 'center',
  },
  toggleLabel: {
    cursor: 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
  },
  toggleInput: {
    position: 'absolute',
    opacity: 0,
    width: 0,
    height: 0,
  },
  toggleSlider: {
    width: '44px',
    height: '24px',
    backgroundColor: '#ccc',
    borderRadius: '24px',
    position: 'relative',
    transition: 'background-color 0.2s',
  },
  toggleSliderBefore: {
    content: '""',
    position: 'absolute',
    width: '18px',
    height: '18px',
    left: '3px',
    bottom: '3px',
    backgroundColor: 'white',
    borderRadius: '50%',
    transition: 'transform 0.2s',
  },
  toggleInputCheckedSlider: {
    backgroundColor: '#319795', // teal-500
  },
  toggleInputCheckedBefore: {
    transform: 'translateX(20px)',
  },
  subscriptionTitle: {
    fontSize: '1.25rem',
    fontWeight: '600',
    marginBottom: '8px',
  },
  subscriptionDesc: {
    fontSize: '14px',
    color: '#4a4a4a',
    marginBottom: '16px',
  },
  downloadButton: {
    width: '100%',
    backgroundColor: '#e2e8f0',
    color: '#000',
    borderRadius: '8px',
    padding: '8px 0',
    fontSize: '14px',
    border: 'none',
    marginBottom: '16px',
    cursor: 'pointer',
  },
  creditsContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    marginBottom: '16px',
  },
  creditButton: {
    backgroundColor: '#319795',
    color: 'white',
    borderRadius: '9999px',
    padding: '4px 12px',
    fontSize: '14px',
    border: 'none',
    cursor: 'pointer',
  },
  smallTextGray: {
    fontSize: '12px',
    color: '#a0aec0',
    marginBottom: '16px',
  },
  priceLarge: {
    fontSize: '2rem',
    fontWeight: 'bold',
  },
  priceSmall: {
    fontSize: '14px',
    fontWeight: 'normal',
  },
  pricePerDownload: {
    fontSize: '14px',
    marginTop: '4px',
  },
  creditsTabContainer: {
    textAlign: 'center',
  },
  creditsPackages: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '16px',
  },
  packageCard: (highlighted) => ({
    backgroundColor: 'white',
    color: 'black',
    padding: '16px',
    borderRadius: '12px',
    width: '144px',
    border: highlighted ? '2px solid #319795' : '1px solid #ddd',
  }),
  packageTitle: {
    fontSize: '18px',
    fontWeight: '600',
  },
  packagePrice: {
    fontSize: '14px',
    margin: '4px 0',
  },
  packageSavings: {
    fontSize: '12px',
    color: '#718096',
  },
  creditsSummary: {
    marginTop: '24px',
  },
  creditsSummaryText: {
    marginBottom: '8px',
  },
  creditsSummaryItems: {
    display: 'flex',
    justifyContent: 'center',
    gap: '24px',
    marginBottom: '16px',
  },
  buyButton: {
    backgroundColor: '#e53e3e',
    padding: '12px 24px',
    borderRadius: '8px',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
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
  const subscriptionData = {
    anual: {
      10: { precio: 17200, precioPorDescarga: 1720 },
      25: { precio: 29400, precioPorDescarga: 1776 },
      50: { precio: 48800, precioPorDescarga: 976 },
      750: { precio: 81600, precioPorDescarga: 108 }, // ejemplo
    },
    mensual: {
      10: { precio: 29100, precioPorDescarga: 2910 },
      25: { precio: 41100, precioPorDescarga: 1644 },
      50: { precio: 67300, precioPorDescarga: 1346 },
      750: { precio: 117200, precioPorDescarga: 156 }, // ejemplo
    }
  };
  const PricingComponent = ({ usuarioActual}) => {
  const [activeTab, setActiveTab] = useState('subscriptions');
  const [annualPlan, setAnnualPlan] = useState(true);
  const [page, setPage] = useState(0);
  const [selected, setSelected] = useState(2);
  const [selectedDownloads, setSelectedDownloads] = useState(10);
  const navigate = useNavigate();
  const handleSelect = (index) => {
    setSelected(index);
  };

  const getDetails = (credit) => {
    const images = credit.credits * 1;
    const videos = credit.credits / 6;
    return { images, videos };
  };


  const ToggleSwitch = ({ checked, onChange }) => {
    return (
      <label style={styles.toggleLabel}>
        <input
          type="checkbox"
          checked={checked}
          onChange={onChange}
          style={styles.toggleInput}
        />
        <div
          style={{
            ...styles.toggleSlider,
            backgroundColor: checked ? '#319795' : '#ccc',
          }}
        >
          <div
            style={{
              ...styles.toggleSliderBefore,
              transform: checked ? 'translateX(20px)' : 'translateX(0)',
              position: 'absolute',
              width: '18px',
              height: '18px',
              left: '3px',
              bottom: '3px',
              backgroundColor: 'white',
              borderRadius: '50%',
              transition: 'transform 0.2s',
              content: '""',
            }}
          />
        </div>
      </label>
    );
  };
  const [hovered, setHovered] = useState(null);
  return (
    <div style={styles.container}>
      <h1 style={{ fontSize: '25px' }}>
        Mueve y conmueve a tus clientes con imágenes y vídeos auténticos y de alta calidad
      </h1>
      <p style={{ fontSize: '20px' }}>
        Accede a una amplia biblioteca de imágenes que no encontrarás en ningún otro lugar, sin contenido generado con IA.
      </p>

      <div style={styles.tabsContainer}>
        <button
          style={styles.tabButton(activeTab === 'subscriptions')}
          onClick={() => setActiveTab('subscriptions')}
        >
          Suscripciones
          <div style={styles.tabSmallText}>Precio más conveniente</div>
        </button>
        <button
          style={styles.tabButton(activeTab === 'credits')}
          onClick={() => setActiveTab('credits')}
        >
          Paquetes de créditos
          <div style={styles.tabSmallText}>Pago instantáneo</div>
        </button>
        
      </div>
      
      {activeTab === 'subscriptions' ? (
        <div style={styles.subscriptionCard}>
          <div style={styles.toggleContainer}>
            <span style={{ fontSize: '18px' }}>Plan anual</span>
            <ToggleSwitch checked={annualPlan} onChange={() => setAnnualPlan(!annualPlan)} />
            <span style={{ fontSize: '18px' }}>Mes a mes</span>
          </div>

         {(() => {
      const currentPlan = annualPlan
      ? subscriptionData.anual[selectedDownloads]
      : subscriptionData.mensual[selectedDownloads];
      if (!currentPlan || !currentPlan.precio || !currentPlan.precioPorDescarga) {
        return <p>Cargando precios...</p>;
      }
    
      return (
        <>
          <h2 style={styles.subscriptionTitle}>Premium</h2>
          <p style={styles.subscriptionDesc}>
            Todas las imágenes, incluidas las imágenes Signature auténticas y de alta calidad que solo puedes encontrar en iStock
          </p>
          <button style={styles.downloadButton}>
            Todas las imágenes son una descarga
          </button>
          <p style={styles.smallTextGray}>Descargas por mes</p>

          <div style={styles.creditsContainer}>
          {[10, 25, 50, 750].map(num => (
          <button
          key={num}
          style={{
            ...styles.creditButton,
            backgroundColor: selectedDownloads === num ? '#319795' : '#fff', // resaltar seleccionado
            color: selectedDownloads === num ? '#fff' : '#000',
            border:'2px solid #319795' ,
                    }}
          onClick={() => setSelectedDownloads(num)}
        >
          {num}
        </button>
  ))}
</div>
<p style={styles.smallTextGray}>
  Transferencia de descargas no utilizadas
  <span style={{ position: 'relative', display: 'inline-block', marginLeft: '8px' }}>
    <span
      style={{
        backgroundColor: '#319795',
        color: 'white',
        borderRadius: '50%',
        width: '18px',
        height: '18px',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '12px',
        cursor: 'help',
        fontWeight: 'bold',
        position: 'relative',
      }}
      onMouseEnter={(e) => {
        const tooltip = e.currentTarget.nextSibling;
        tooltip.style.visibility = 'visible';
        tooltip.style.opacity = '1';
      }}
      onMouseLeave={(e) => {
        const tooltip = e.currentTarget.nextSibling;
        tooltip.style.visibility = 'hidden';
        tooltip.style.opacity = '0';
      }}
    >
      ?
    </span>
    <span
      style={{
        visibility: 'hidden',
        width: '240px',
        backgroundColor: 'black',
        color: '#fff',
        textAlign: 'center',
        borderRadius: '6px',
        padding: '8px',
        position: 'absolute',
        zIndex: 1,
        bottom: '125%',
        left: '50%',
        transform: 'translateX(-50%)',
        opacity: 0,
        transition: 'opacity 0.3s ease',
        fontSize: '12px',
        lineHeight: '1.4',
      }}
    >
      Transfiere hasta 250 descargas sin utilizar mes a mes. Si la renovación automática se encuentra desactivada, al finalizar tu suscripción perderás todas las descargas no utilizadas.
    </span>
  </span>
</p>


            <>
          <div>

            <span style={styles.priceLarge}>
              AR$ {currentPlan.precio.toLocaleString()} 
            </span>
            <span style={styles.priceSmall}> por mes</span>
          </div>
          <p style={styles.pricePerDownload}>
            AR$ {currentPlan.precioPorDescarga.toLocaleString()} / descarga
          </p>
          <button
  style={styles.buyBtn}
  onClick={async () => {
    if (Object.keys(usuarioActual).length === 0) {
      navigate('/iniciosesion');
    } else {
      if (activeTab === 'subscriptions') {
        navigate('/caja', {
          state: {
            tipo: 'suscripcion',
            plan: annualPlan ? 'anual' : 'mensual',
            precio: 17200 // ajustá si usás otro precio
          }
        });
      } 
    }
  }}
>
  Suscribirse
</button>
  </>

        </>
      );
    })()}
          
        </div>
      ) : (
        
        <div style={styles.wrapper}>
      
      <p  style={{ fontSize: '15px' }}>
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
{creditData[page].map((item, index) => {
  const isActive = selected === index || hovered === index;
  const isSelected = selected === index;

  return (
    <div
      key={index}
      style={{
        ...styles.card,
        position: 'relative', // importante para el icono absoluto
        border: isActive ? '3px solid #34B59F' : '1px solid #ccc',
        backgroundColor: isActive ? '#fff' : '#f9f9f9',
        color: isActive ? '#000' : '#666E6E',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
      }}
      onClick={() => handleSelect(index)}
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
    >
      {isSelected && (
        <div style={{
          position: 'absolute',
          top: '8px',
          left: '8px',
          backgroundColor: '#34B59F',
          color: 'white',
          borderRadius: '50%',
          width: '20px',
          height: '20px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: '14px',
          fontWeight: 'bold',
          boxShadow: '0 0 4px rgba(0,0,0,0.2)',
          zIndex: 10,
          userSelect: 'none',
        }}>
          ✓
        </div>
      )}
      <div style={styles.credits}>{item.credits}</div>
      <div>Créditos</div>
      <div style={styles.price}>AR$ {item.price.toLocaleString()}</div>
      {item.savings && (
        <div style={styles.savings}>Ahorrás AR$ {item.savings.toLocaleString()}</div>
      )}
    </div>
  );
})}
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

      <button
  style={styles.buyBtn}
  onClick={async () => {
    if (Object.keys(usuarioActual).length === 0) {
      navigate('/iniciosesion');
    } else {
      
        const seleccionado = creditData[page][selected];
        if (seleccionado) {
          navigate('/caja/${creditData[page][selected]?.credits}', {
            state: {
              tipo: 'creditos',
              cantidad: seleccionado.credits,
              precio: seleccionado.price
            }
          });
        } else {
          alert('Por favor seleccioná un paquete de créditos.');
        }
      
    }
  }}
>
  Comprar {activeTab === 'subscriptions' ? 'suscripción' : `${creditData[page][selected]?.credits} créditos`}
</button>
    </div>
        
      )}
      
    </div>
    
  );
};

export default PricingComponent;
