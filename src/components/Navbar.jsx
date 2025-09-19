import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Tabs,
  Tab,
  Box,
} from '@mui/material';

const Navbar = () => {
  const location = useLocation();

  // Definir valor para Tabs, solo para rutas con pestañas
  const tabValue = ['/clients', '/animals'].includes(location.pathname)
    ? location.pathname
    : false; // Ninguna pestaña activa en otras rutas (como '/')

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Veterinaria App
        </Typography>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs
            value={tabValue}
            textColor="inherit"
            indicatorColor="secondary"
          >
            <Tab label="Clientes" value="/clients" component={Link} to="/clients" />
            <Tab label="Mascotas" value="/animals" component={Link} to="/animals" />
          </Tabs>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;