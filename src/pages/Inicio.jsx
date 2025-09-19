import React from 'react';
import { Typography, Box } from '@mui/material';

export default function Inicio() {
  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>
        App veterinaria
      </Typography>
      <Typography>
        Menú para administrar clientes y mascotas
      </Typography>
    </Box>
  );
}