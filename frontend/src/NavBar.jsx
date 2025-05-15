import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/material/Menu';
import iStockLogo from "./buttons/istockLogo.png"

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ bgcolor: "#000" }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          <MenuIcon />
          <img src={iStockLogo} alt="" style={{"width":"120px","height":"auto"}}/>
          </IconButton>
          <Button color="inherit">Videos</Button>
          <Button color="inherit">Fotos</Button>
          <Button color="inherit">Ilustraciones</Button>
          <Button color="inherit">Vectores</Button>
          
          <Button color="inherit">Recursos</Button>
          <Typography variant="p" component="div" sx={{ flexGrow: 1 }}>
            
          </Typography>
          <Button color="inherit">Precios</Button>
          <Button color="inherit">Boards</Button>
          <Button color="inherit">Cuenta</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}