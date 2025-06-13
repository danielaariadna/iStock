import * as React from 'react';
import {AppBar, Box, Toolbar, Button, IconButton, Drawer, List, ListItem, ListItemText, useMediaQuery, useTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';
import iStockLogo from "./buttons/istockLogo.png";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


export default function ButtonAppBar({usuarioActual}) {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const navigate = useNavigate();

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleNavItemClick = (item) => {
    switch(item){
      case "Iniciar Sesion":
        navigate('/iniciosesion');
        break;
      case "Ver Perfil":
        navigate('/cuenta');
        break;
      case "Precios":
        navigate('/precios');
        break;
        case "Fotos":
          // Si la sesión está iniciada, navega a la página de inicio (por ejemplo '/')
          if (Object.keys(usuarioActual).length !== 0) {
            navigate('/'); // o la ruta donde están las fotos con sesión
          } else {
            // si no hay sesión, puede ir a login o donde prefieras
            navigate('/');
          }
          break;
      default:
        console.log(`Navegando a ${item} (aún no implementado)`);
        break;
    }
  };

  // División de ítems
  const leftNavItems = ["Videos ", "Fotos", "Ilustraciones", "Vectores", "Recursos"];
  const rightNavItems = ["Precios", "Boards"];

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ bgcolor: "#000" }}>
        <Toolbar>
          {/* Logo */}
          <Box display="flex" alignItems="center" sx={{ mr: 2, cursor: 'pointer' }} onClick={() => {
      
             navigate( '/');
            }}>
            <img src={iStockLogo} alt="iStock" style={{ width: "100px", height: "auto" }} />
          </Box>

          {/* Menú izquierdo */}
          {!isMobile && (
            <Box display="flex" gap={1}>
              {leftNavItems.map((item) => (
                <Button
                  key={item}
                  color="inherit"
                  onClick={() => handleNavItemClick(item)}
                  sx={{ textTransform: 'none', display: 'flex', alignItems: 'center', gap: 0.5 }}
                >
                  {item}
                  <KeyboardArrowDownIcon sx={{ fontSize: 18 }} />
                </Button>
              ))}
            </Box>
          )}

          {/* Espacio separador */}
          <Box sx={{ flexGrow: 1 }} />

          {/* Menú derecho */}
          {!isMobile && (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              {rightNavItems.map((item) => (
                <Button
                  key={item}
                  color="inherit"
                  onClick={() => handleNavItemClick(item)}
                  sx={{ textTransform: 'none' }}
                >
                  {item}
                </Button>
              ))}
              <Button
                onClick={() => handleNavItemClick(Object.keys(usuarioActual).length === 0 ? "Iniciar Sesion" : "Ver Perfil")}
                variant="contained"
                sx={{
                  backgroundColor: "#20ad87",
                  color: "#fff",
                  textTransform: "none",
                  '&:hover': {
                    backgroundColor: "#1d9272"
                  }
                }}
              >
                {Object.keys(usuarioActual).length === 0 ? "Iniciar Sesion" : "Ver Perfil"}
              </Button>
            </Box>
          )}

          {/* Menú hamburguesa para móviles */}
          {isMobile && (
            <>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="end"
                onClick={handleDrawerToggle}
              >
                <MenuIcon />
              </IconButton>
              <Drawer
                anchor="left"
                open={drawerOpen}
                onClose={handleDrawerToggle}
              >
                <Box
                  sx={{ width: 250 }}
                  role="presentation"
                  onClick={handleDrawerToggle}
                  onKeyDown={handleDrawerToggle}
                >
                  <List>
                    {[...leftNavItems, ...rightNavItems, "Iniciar Sesion"].map((text) => (
                      <ListItem button key={text} onClick={() => handleNavItemClick(text)}>
                        <ListItemText primary={text} />
                      </ListItem>
                    ))}
                  </List>
                </Box>
              </Drawer>
            </>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
