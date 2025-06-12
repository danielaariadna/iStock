import React, { useState, useMemo } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Box,
  TextField,
  Typography,
  Grid,
  Paper,
  Button,
  Divider,
  List,
  ListItem,
  ListItemText,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  RadioGroup,
  FormControlLabel,
  Radio,
  Checkbox,
  Link,
  OutlinedInput,
  InputAdornment
} from '@mui/material';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import iStockLogo from './buttons/istockLogo.png';
import visaLogo from './buttons/visa.png';
import mastercardLogo from './buttons/mastercard.png';
import cabalLogo from './buttons/cabal.png';
import naranjaLogo from './buttons/naranja.png';

import { useLocation } from 'react-router-dom'; 


const Caja = ({usuarioActual,tipoCompra,medioDePago}) => {
  const [tipoDoc, setTipoDoc] = useState('DNI');
  const [pais, setPais] = useState('');
  const [provincia, setProvincia] = useState('Buenos Aires');
  const [mostrarEmpresa, setMostrarEmpresa] = useState(false);
  const [nombreEmpresa, setNombreEmpresa] = useState('');
  const [iva, setIva] = useState('');
  const [noAplica, setNoAplica] = useState(false);

  const location = useLocation();
  const imageUrl = location.state?.imageUrl;

  const [empresa, setEmpresa] = useState('');

  const [mostrarNotas, setMostrarNotas] = useState(false);
  const [nota1, setNota1] = useState('');
  const [nota2, setNota2] = useState('');
  const [nota3, setNota3] = useState('');

  const handleTipoDocChange = (e) => {
    const value = e.target.value;
    setTipoDoc(value);
    setNoAplica(false);
    setEmpresa('');
    setIva('');
  };

  const ResumenPedido = () => {
      const { state } = useLocation();
      const item = state?.selectedItem || {
        thumbnail: 'https://via.placeholder.com/120x90?text=Imagen',
        descripcion: '1 crédito de iStock',
        precio: 5800,
        iva: 1218,
      };

      const currency = useMemo(
        () =>
          new Intl.NumberFormat('es-AR', {
            style: 'currency',
            currency: 'ARS',
            minimumFractionDigits: 2,
          }),
        []
      );

      const subtotal = item.precio;
      const total = subtotal + item.iva;  
      const [mostrarCodigoPromo, setMostrarCodigoPromo] = useState(false);
      const [codigoPromo, setCodigoPromo] = useState('');

    return (
      <>
        <AppBar position="static" sx={{ bgcolor: '#0a0a0a', boxShadow: 1 }}>
          <Toolbar sx={{ justifyContent: 'center', minHeight: 200, paddingY: 2 }}>
            <Box component="img" src={iStockLogo} alt="iStock" sx={{ height: 45 }} />
          </Toolbar>
        </AppBar>
        <Typography
          variant="h5"
          gutterBottom
          sx={{ fontWeight: 'bold', textAlign: 'start', ml: 5, mb: 4 }}
        >
          Verificar
        </Typography>

        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
          <Paper
            elevation={3}
            sx={{ width: '90%', maxWidth: 1400, display: 'flex', borderRadius: 2 }}
          >
            {/* Formulario lado izquierdo */}
            <Box sx={{ flex: 2, p: 4, bgcolor: '#f5f5f5' }}>
              <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', textAlign: 'left', mb: 4 }}>
                Información de facturación
              </Typography>

              <FormControl fullWidth sx={{ mb: 2 , backgroundColor: '#fff'}}>
                <InputLabel>País</InputLabel>
                <Select value={pais} onChange={(e) => setPais(e.target.value)} label="País">
                  <MenuItem value={'Argentina'}>Argentina</MenuItem>
                  <MenuItem value={'Chile'}>Chile</MenuItem>
                  <MenuItem value={'Brasil'}>Brasil</MenuItem>
                  <MenuItem value={'Uruguay'}>Uruguay</MenuItem>
                  <MenuItem value={'Bolivia'}>Bolivia</MenuItem>
                </Select>
              </FormControl>

              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <TextField fullWidth label="Nombre de pila" variant="outlined" sx={{ backgroundColor: '#fff' }}/>
                </Grid>
                <Grid item xs={6}>
                  <TextField fullWidth label="Apellido" variant="outlined" sx={{ backgroundColor: '#fff' }}/>
                </Grid>
              </Grid>

              <TextField fullWidth label="Dirección" variant="outlined" sx={{ mt: 2 , backgroundColor: '#fff'}} />
              <TextField fullWidth label="Piso, departamento, etc." variant="outlined" sx={{ mt: 2 , backgroundColor: '#fff'}} />
              <TextField fullWidth label="Código Postal" variant="outlined" sx={{ mt: 2 , backgroundColor: '#fff'}} />

              <Grid container spacing={2} sx={{ mt: 1 }}>
                <Grid item xs={6}>
                  <FormControl fullWidth sx={{ mb: 2, backgroundColor: '#fff' }}>
                    <InputLabel>Provincia</InputLabel>
                    <Select
                      value={provincia}
                      onChange={(e) => setProvincia(e.target.value)}
                      label="Provincia"
                    >
                      <MenuItem value="Buenos Aires">Buenos Aires</MenuItem>
                      <MenuItem value="Córdoba">Córdoba</MenuItem>
                      <MenuItem value="Santa Fe">Santa Fe</MenuItem>
                      <MenuItem value="Mendoza">Mendoza</MenuItem>
                      <MenuItem value="Tucumán">Tucumán</MenuItem>
                      <MenuItem value="Salta">Salta</MenuItem>
                      <MenuItem value="Misiones">Misiones</MenuItem>
                      <MenuItem value="San Luis">San Luis</MenuItem>
                      <MenuItem value="Chubut">Chubut</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>

                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    label="Ciudad/Pueblo"
                    variant="outlined"
                    sx={{ backgroundColor: '#fff' }}
                  />
                </Grid>
              </Grid>

              <Box sx={{ mt: 2 }}>
                {!mostrarEmpresa && (
                  <Link
                    href="#"
                    underline="none"
                    onClick={(e) => {
                      e.preventDefault();
                      setMostrarEmpresa(true);
                    }}
                    sx={{ 
                      color: '#0dbf6b',
                      cursor: 'pointer',
                      textAlign: 'left',
                      display: 'block'
                    }}
                  >
                    Agregar empresa u organización
                  </Link>
                )}
              </Box>

              {mostrarEmpresa && (
                <>
                  <TextField
                    fullWidth
                    label="Nombre de la empresa"
                    variant="outlined"
                    value={nombreEmpresa}
                    onChange={(e) => setNombreEmpresa(e.target.value)}
                    sx={{ mt: 2 , backgroundColor: '#fff'}}
                  />
                  <Typography variant="caption" sx={{ mt: 2 ,ml: 0.5, textAlign: 'left', display: 'block' }}>
                    Introduzca el nombre legal registrado ante las autoridades fiscales
                  </Typography>
                </>
              )}

              <Divider sx={{ my: 3 }} />

              <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', textAlign: 'left', mb: 2}}>
                Número de identificación fiscal
              </Typography>
              <Typography variant="body2" gutterBottom sx={{ textAlign: 'left', mb: 2}}>
                Si se realiza la compra para una empresa u organización, ingrese sus datos de CUIT/CUIL. Si no, ingrese los datos de su DNI.
              </Typography>

              <FormControl component="fieldset" sx={{ mt: 2 }}>
                <RadioGroup
                  value={tipoDoc}
                  onChange={handleTipoDocChange}
                >
                  <FormControlLabel value="CUIT/CUIL" control={<Radio />} label="CUIT/CUIL" />
                  <FormControlLabel value="DNI" control={<Radio />} label="DNI" />
                </RadioGroup>
              </FormControl>

              <TextField
                fullWidth
                label={`Número de ${tipoDoc}`}
                variant="outlined"
                sx={{ mt: 2 , backgroundColor: '#fff'}}
              />

              <Typography variant="caption" sx={{ ml: 0.5, textAlign: 'left', display: 'block'}}>
                {tipoDoc === "CUIT/CUIL"
                  ? "Un número de CUIT/CUIL contiene 11 dígitos (sin espacios, letras ni caracteres especiales)."
                  : "El número DNI consta de 8 dígitos."}
              </Typography>

              {tipoDoc === "DNI" && (
                <>
                  <TextField
                    fullWidth
                    label="Empresa u organización"
                    variant="outlined"
                    sx={{ mt: 2 , backgroundColor: '#fff'}}
                    value={noAplica ? "No aplicable" : empresa}
                    onChange={(e) => setEmpresa(e.target.value)}
                    disabled={noAplica}
                  />
                  <Typography variant="caption" sx={{ ml: 0.5, textAlign: 'left', display: 'block'}}>
                    Introduzca el nombre legal registrado ante las autoridades fiscales
                  </Typography>

                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={noAplica}
                        onChange={(e) => setNoAplica(e.target.checked)}
                      />
                    }
                    label="No aplicable"
                  />
                  <Typography variant="caption" sx={{ ml: 0.5 , textAlign: 'left', display: 'block'}}>
                    Consumidor final
                  </Typography>
                </>
              )}

              {tipoDoc === "CUIT/CUIL" && (
                <>
                  <TextField
                    fullWidth
                    label="Empresa u organización"
                    variant="outlined"
                    sx={{ mt: 2 , backgroundColor: '#fff'}}
                    value={empresa}
                    onChange={(e) => setEmpresa(e.target.value)}
                  />
                  <Typography variant="caption" sx={{ ml: 0.5, textAlign: 'left', display: 'block'}}>
                    Introduzca el nombre legal registrado ante las autoridades fiscales
                  </Typography>
                  <FormControl fullWidth sx={{ mt: 2 }}>
                    <InputLabel>IVA</InputLabel>
                    <Select
                      value={iva}
                      onChange={(e) => setIva(e.target.value)}
                      label="IVA"
                      sx={{ backgroundColor: '#fff' }}
                    >
                      <MenuItem value="Responsable Inscripto">Inscripción del responsable del IVA</MenuItem>
                      <MenuItem value="Exento">IVA Sujeto Exento</MenuItem>
                      <MenuItem value="Monotributo">Responsable Monotributo</MenuItem>
                    </Select>
                  </FormControl>
                </>
              )}

              <Divider sx={{ my: 3 }} />
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', textAlign: 'left', mb: 4 }}>
                  Tarjeta de crédito
                </Typography>

                <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
                  <Box component="img" src={visaLogo} alt="Visa" height={10} />
                  <Box component="img" src={mastercardLogo} alt="MasterCard" height={10} />
                  <Box component="img" src={cabalLogo} alt="Cabal" height={10} />
                  <Box component="img" src={naranjaLogo} alt="Naranja" height={10} />
                </Box>

                <OutlinedInput
                  fullWidth
                  placeholder="Credit card number"
                  startAdornment={
                    <InputAdornment position="start">
                      <CreditCardIcon />
                    </InputAdornment>
                  }
                  sx={{ backgroundColor: '#fff', mb: 2 }}
                />

                <Grid container spacing={2}>
                  <Grid item xs={4}>
                    <TextField fullWidth label="MM/AA" placeholder="MM/AA" sx={{ backgroundColor: '#fff' }} />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField fullWidth label="Security code" type="password" sx={{ backgroundColor: '#fff' }} />
                  </Grid>
                </Grid>

                <FormControlLabel
                  control={<Checkbox />}
                  label="Guardar esta tarjeta en mi cuenta"
                  sx={{ mt: 2 }}
                />

              <Divider sx={{ my: 3 }} />

              <Typography variant="h6" gutterBottom sx={{ textAlign: 'left' }}>
                Notas
              </Typography>

              <Typography
                onClick={() => setMostrarNotas(!mostrarNotas)}
                sx={{ cursor: 'pointer', color: 'green', mb: 2 , textAlign: 'right'}}
              >
                Añadir nota
              </Typography>

              {mostrarNotas && (
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mb: 2 }}>
                  <TextField
                    label="Número de orden de compra (opcional)"
                    value={nota1}
                    onChange={(e) => setNota1(e.target.value)}
                    variant="outlined"
                    fullWidth
                    sx={{backgroundColor: '#fff'}}

                  />
                  <Typography variant="body2" sx={{textAlign: 'left' }}>
                    Esto aparecerá en su factura para ayudarle a gestionar su compra. Si no utiliza números de orden de compra, introduzca un número o frase para us propios registros.
                  </Typography>
                  <TextField
                    label="Título del puesto o proyecto (opcional)"
                    value={nota2}
                    onChange={(e) => setNota2(e.target.value)}
                    variant="outlined"
                    fullWidth
                    sx={{backgroundColor: '#fff'}}
                  />
                  <TextField
                    label="Ordenado por (opcional)"
                    value={nota3}
                    onChange={(e) => setNota3(e.target.value)}
                    variant="outlined"
                    fullWidth
                    sx={{backgroundColor: '#fff'}}
                  />
                </Box>
              )}

              <Divider sx={{ my: 3 }} />

              <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', textAlign: 'left', mb: 4 }}>
                Total
              </Typography>
              <Typography variant="body2" sx={{ mt: 2, textAlign: 'left' }}>
                Al hacer clic en "Estoy de acuerdo - Comprar y descargar", usted reconoce que ha leído y acepta los términos y condiciones del Acuerdo de licencia de contenido y acepta nuestro Acuerdo de membresía, Política de privacidad y Términos de uso.
              </Typography>

              <Button variant="contained" color="error" fullWidth sx={{ mt: 3}}>
                Estoy de acuerdo - Comprar y descargar
              </Button>
            </Box>

            <Box
              sx={{
                flex: 1,
                bgcolor: '#fff',
                p: 4,
                borderLeft: '1px solid #ddd',
                position: 'sticky',
                top: 20,
                alignSelf: 'flex-start',
                height: 'fit-content',
              }}
            >
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                <Typography fontWeight="bold" sx={{ fontSize: '1.5rem' }}>
                  Resumen del pedido
                </Typography>
                <Link
                  component={RouterLink}
                  to="/precios"
                  underline="none"
                  sx={{ color: '#0dbf6b', fontSize: '16.8px' }}
                >
                  Cambiar de plan
                </Link>
              </Box>

              {/* Línea del producto ----------------------------------------- */}
              <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
                {imageUrl && (
                  <Box sx={{ mb: 2 }}>
                    <img src={imageUrl} alt="Imagen seleccionada" style={{ width: '100%', maxHeight: '300px', objectFit: 'contain' }} />
                  </Box>
                )}
                <Box sx={{ flexGrow: 1 }}>
                  <Typography variant="body2">{item.descripcion}</Typography>
                </Box>
                <Typography variant="body2" fontWeight={500}>
                  {currency.format(item.precio)}
                </Typography>
              </Box>

              <Divider sx={{ my: 2 }} />

              {/* Sub-total & IVA -------------------------------------------- */}
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                <Typography variant="body2">Total parcial</Typography>
                <Typography variant="body2">
                  {currency.format(subtotal)}
                </Typography>
              </Box>

              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                <Typography variant="body2">IVA</Typography>
                <Typography variant="body2">
                  {currency.format(item.iva)}
                </Typography>
              </Box>

              <Divider sx={{ my: 2 }} />

              {/* Total ------------------------------------------------------- */}
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant="h6" fontWeight="bold">
                  Total
                </Typography>
                <Typography variant="h6" fontWeight="bold">
                  {currency.format(total)}
                </Typography>
              </Box>

              {/* Código promocional ----------------------------------------- */}
              {!mostrarCodigoPromo ? (
                <Link
                  href="#"
                  underline="none"
                  onClick={(e) => {
                    e.preventDefault();
                    setMostrarCodigoPromo(true);
                  }}
                  sx={{ color: '#0dbf6b', fontSize: 14, display: 'block', mt: 3 }}
                >
                  ¿Tienes un código promocional?
                </Link>
              ) : (
                <Box sx={{ mt: 3 }}>
                  <Grid container spacing={1}>
                    <Grid item xs={8}>
                      <TextField
                        fullWidth
                        placeholder="Introduce tu código"
                        variant="outlined"
                        value={codigoPromo}
                        onChange={(e) => setCodigoPromo(e.target.value)}
                        size="medium"
                      />
                    </Grid>
                    <Grid item xs={4}>
                      <Button
                        fullWidth
                        variant="contained"
                        size="medium"
                        sx={{
                          bgcolor: '#0dbf6b',
                          color: '#fff',
                          fontSize: '1rem',
                          height: '100%',
                          '&:hover': { bgcolor: '#0aa45c' }
                        }}
                        onClick={() => {
                          console.log("Código aplicado:", codigoPromo);
                        }}
                      >
                        Aplicar
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
              )}
            </Box>
          </Paper>
        </Box>
      </>
    );
  };
  return <ResumenPedido />;
};

export default Caja;
