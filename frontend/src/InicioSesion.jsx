import {fetchUsuarioByID} from "./supabase-consultas";

import { useState } from 'react';
import {
  Container,
  Box,
  TextField,
  Button,
  Typography,
  Link,
  Paper,
  Divider,
  InputAdornment,
  IconButton
} from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import iStockLogo from "./buttons/istockLogo.png";
import { useNavigate } from 'react-router-dom';

const LoginForm = ({setUsuarioActual}) => {
  const navigate = useNavigate();

  // Estado para controlar mostrar/ocultar la contraseña
  const [showPassword, setShowPassword] = useState(false);

  // Estados para guardar email y contraseña
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [usuarioSinAutorizacion,setUsuarioSinAutorizacion] = useState({});
  

  const handleClickShowPassword = () => {
    setShowPassword((show) => !show);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleClickIniciarSesion = () => {
    console.log("datos: ",email,password);
    fetchUsuarioByID(setUsuarioSinAutorizacion,email);
  };

  // Comprobación de inicio de sesión
  if(usuarioSinAutorizacion.contraseña === password){
    setUsuarioActual(usuarioSinAutorizacion); // Necesario para guardar el estado del usuario que actualmente inició sesión
    setUsuarioSinAutorizacion({});
    console.log("Sesión Validada");
    navigate('/cuenta');
  }

  return (
    <Box
      sx={{
        backgroundImage: 'url("/fondoInicioSesion.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >  
      <Box
        sx={{
          backgroundImage: 'url("/fondoInicioSesion.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          minHeight: '100vh',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Container maxWidth="xs">
          <Box
            sx={{
              backgroundColor: '#000',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '80px',
              boxShadow: '0px 4px 20px #000',
            }}
          >
            <img src={iStockLogo} alt="iStock" style={{ width: "120px", height: "auto" }} />
          </Box>

          <Paper
            elevation={0}
            sx={{
              p: 4,
              pt: 2,
              border: '1px solid #000',
              boxShadow: '0px 4px 20px #000',
              borderRadius: 0,
            }}
          >
            <Typography
              variant="h5"
              align="left"
              gutterBottom
              sx={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Iniciar sesión
            </Typography>

            <Box component="form" noValidate autoComplete="off">
              <TextField
                fullWidth
                margin="normal"
                label="Email o nombre de usuario"
                type="email"
                sx={{ fontFamily: 'Poppins, sans-serif' }}
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                fullWidth
                margin="normal"
                label="Contraseña"
                type={showPassword ? 'text' : 'password'}  // Cambia tipo según showPassword
                sx={{ fontFamily: 'Poppins, sans-serif' }}
                onChange={(e) => setPassword(e.target.value)}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label={showPassword ? 'Ocultar contraseña' : 'Mostrar contraseña'}
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />

              <Typography variant="body2" align="left" sx={{ mt: 1 }}>
                <Link
                  href="#"
                  sx={{
                    fontFamily: 'Poppins, sans-serif',
                    color: '#17937f',
                    '&:hover': {
                      color: '#168371',
                    }
                  }}
                >
                  ¿Has olvidado tu contraseña?
                </Link>
              </Typography>

              <Button
                fullWidth
                variant="contained"
                sx={{
                  mt: 3,
                  mb: 2,
                  textTransform: 'none',
                  backgroundColor: '#11c4a6',
                  color: '#fff',
                  fontFamily: 'Poppins, sans-serif',
                  '&:hover': {
                    backgroundColor: '#12b096',
                  }
                }}
                onClick={handleClickIniciarSesion}
              >
                Iniciar sesión
              </Button>

              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  width: '100%',
                  my: 2,
                }}
              >
                <Divider sx={{ flexGrow: 1, backgroundColor: '#b0bec5' }} />
                <Box
                  sx={{
                    width: 7,
                    height: 8,
                    borderRadius: '50%',
                    border: '2px solid #242727',
                    mx: 2,
                  }}
                />
                <Divider sx={{ flexGrow: 1, backgroundColor: '#b0bec5' }} />
              </Box>

              <Button
                fullWidth
                variant="contained"
                startIcon={<PersonIcon />}
                sx={{
                  mt: 3,
                  mb: 2,
                  textTransform: 'none',
                  backgroundColor: '#fff',
                  color: '#000',
                  fontFamily: 'Poppins, sans-serif',
                  '&:hover': {
                    backgroundColor: '#000',
                    color: '#fff',
                  }
                }}
                onClick={() => navigate('/registro')}
              >
                Crear una cuenta
              </Button>
            </Box>
          </Paper>
        </Container>
      </Box>

      <Box component="footer" sx={{ mt: 4 }}>
      

      
      </Box>
    </Box>
  );
};

export default LoginForm;
