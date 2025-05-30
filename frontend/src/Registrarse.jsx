import { useState } from 'react';
import {
  Container,
  Box,
  TextField,
  Button,
  Typography,
  Link,
  Paper,
  Checkbox,
  MenuItem,
  IconButton,
  InputAdornment,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import iStockLogo from './buttons/istockLogo.png';
import { useNavigate } from 'react-router-dom';

const countries = ['Argentina', 'Chile', 'México', 'España', 'Colombia'];

const CustomCheckbox = styled(Checkbox)({
  color: 'rgba(0, 0, 0, 0.6)',
  padding: 6,
  '&.Mui-checked': {
    color: '#000',
    backgroundColor: 'transparent',
  },
  '&:hover': {
    backgroundColor: 'rgba(0, 0, 0, 0.04)',
  },
  '& .MuiSvgIcon-root': {
    fontSize: 20,
  },
});

const RegisterForm = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [country, setCountry] = useState('Argentina');
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const validate = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      newErrors.email = 'Correo inválido';
    }
    if (!password) {
      newErrors.password = 'La contraseña es obligatoria';
    }
    if (!confirmPassword) {
      newErrors.confirmPassword = 'Confirma tu contraseña';
    }
    if (password && confirmPassword && password !== confirmPassword) {
      newErrors.confirmPassword = 'Las contraseñas no coinciden';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log('Datos válidos:', { email, password, country });
    }
  };

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
          fontFamily: 'Poppins, sans-serif',
        }}
      >
        <Container maxWidth="xs" sx={{ mt: 8 }}>
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
            <img src={iStockLogo} alt="iStock" style={{ width: '120px', height: 'auto' }} />
          </Box>

          <Paper
            elevation={0}
            sx={{
              p: 4,
              pt: 2,
              border: '1px solid #000',
              boxShadow: '0px 4px 20px #000',
              borderRadius: 0,
              fontFamily: 'Poppins, sans-serif',
            }}
          >
            <Typography variant="h5" align="left" gutterBottom>
              Registrarse
            </Typography>

            <Typography variant="body2" align="left" sx={{ mb: 2 }}>
              ¿Ya eres miembro?{' '}
              <Link
                href="#"
                sx={{ color: '#17937f', fontWeight: 500, cursor: 'pointer' }}
                onClick={(e) => {
                  e.preventDefault();
                  navigate('/iniciosesion');
                }}
              >
                Iniciar sesión
              </Link>
            </Typography>

            <Box component="form" noValidate autoComplete="off" onSubmit={handleSubmit}>
              <TextField
                fullWidth
                margin="normal"
                label="Correo electrónico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={!!errors.email}
                helperText={errors.email}
              />

              <TextField
                fullWidth
                margin="normal"
                label="Contraseña"
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                error={!!errors.password}
                helperText={errors.password}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label={showPassword ? 'Ocultar contraseña' : 'Mostrar contraseña'}
                        onClick={() => setShowPassword(!showPassword)}
                        onMouseDown={(e) => e.preventDefault()}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />

              <TextField
                fullWidth
                margin="normal"
                label="Confirma la contraseña"
                type={showConfirmPassword ? 'text' : 'password'}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                error={!!errors.confirmPassword}
                helperText={errors.confirmPassword}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label={showConfirmPassword ? 'Ocultar contraseña' : 'Mostrar contraseña'}
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        onMouseDown={(e) => e.preventDefault()}
                        edge="end"
                      >
                        {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />

              <TextField
                select
                fullWidth
                margin="normal"
                label="País"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              >
                {countries.map((country) => (
                  <MenuItem key={country} value={country}>
                    {country}
                  </MenuItem>
                ))}
              </TextField>

              <Box sx={{ display: 'flex', alignItems: 'flex-start', mt: 1, gap: 1 }}>
                <CustomCheckbox defaultChecked />
                <Typography
                  variant="body2"
                  sx={{
                    cursor: 'default',
                    userSelect: 'none',
                    mt: '4px',
                    lineHeight: 1.3,
                    color: 'rgba(0,0,0,0.87)',
                  }}
                >
                  Sí, quiero recibir correos electrónicos con inspiración visual, ofertas especiales y más.
                </Typography>
              </Box>

              <Button
                fullWidth
                type="submit"
                variant="contained"
                sx={{
                  mt: 3,
                  mb: 2,
                  textTransform: 'none',
                  backgroundColor: '#00b388',
                  color: '#fff',
                  fontWeight: 600,
                  '&:hover': {
                    backgroundColor: '#009c77',
                  },
                }}
              >
                Regístrate ahora
              </Button>

              <Typography variant="caption" display="block" sx={{ mt: 2 }}>
                Al unirte a iStock, aceptas nuestras{' '}
                <Link href="#" underline="hover">
                  Condiciones de uso
                </Link>
                ,{' '}
                <Link href="#" underline="hover">
                  Contrato de licencia
                </Link>{' '}
                y{' '}
                <Link href="#" underline="hover">
                  Política de privacidad
                </Link>{' '}
                (incluido el uso de cookies y otras tecnologías).
              </Typography>

              <Typography variant="caption" display="block" sx={{ mt: 1 }}>
                Este sitio está protegido por reCAPTCHA y se aplican la{' '}
                <Link href="#" underline="hover">
                  Política de privacidad
                </Link>{' '}
                y los{' '}
                <Link href="#" underline="hover">
                  Términos de servicio
                </Link>{' '}
                de Google.
              </Typography>
            </Box>
          </Paper>
        </Container>
      </Box>

      <Box component="footer" sx={{ mt: 4 }}>
        <Box
          sx={{
            backgroundColor: '#0a0a0a',
            color: '#fff',
            px: 2,
            py: 2,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            fontFamily: 'Poppins, sans-serif',
            fontSize: '14px',
            height: '80px',
          }}
        >
          <div
            style={{
              backgroundColor: '#0a0a0a',
              color: '#FFF',
              fontSize: '20px',
              padding: '14px',
              flexGrow: 1,
              textAlign: 'center',
            }}
          >
            Ahorra en las imágenes de alta calidad que más te gustan.{' '}
            <span style={{ color: '#00CC99', marginLeft: '6px' }}>Suscríbete hoy.</span>
          </div>
          <Typography
            component="a"
            href="./"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              mt: { xs: 1, sm: 0 },
              color: '#ccc',
              textDecoration: 'none',
              fontSize: '14px',
              display: 'block',
              textAlign: 'center',
              '&:hover': {
                textDecoration: 'underline',
                color: '#00CC99',
              },
            }}
          >
            546005278, MATJAZ SLANIC
          </Typography>
        </Box>

        <Box
          sx={{
            backgroundColor: 'rgba(148, 148, 148, 0.8)',
            color: 'rgb(74, 74, 74)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            py: 1,
            fontSize: '11.5px',
            fontFamily: 'Poppins, sans-serif',
            height: '40px',
          }}
        >
          ©2025 iStockphoto LP. El diseño de iStock es una marca comercial de iStockphoto LP.
        </Box>
      </Box>
    </Box>
  );
};

export default RegisterForm;
