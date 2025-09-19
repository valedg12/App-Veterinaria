import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Box,
  Typography,
} from '@mui/material';
import { Edit as EditIcon, Delete as DeleteIcon } from '@mui/icons-material';

const AnimalsList = ({ animals, clients, onEdit, onDelete }) => {
  const getClientName = (clientId) => {
    const client = clients.find((c) => c.id === clientId);
    return client ? client.name : 'Cliente no encontrado';
  };

  if (animals.length === 0) {
    return (
      <Box sx={{ p: 3, textAlign: 'center' }}>
        <Typography variant="h6" color="textSecondary">
          No hay mascotas registradas
        </Typography>
      </Box>
    );
  }

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Nombre</TableCell>
            <TableCell>Especie</TableCell>
            <TableCell>Edad</TableCell>
            <TableCell>Dueño</TableCell>
            <TableCell align="center">Acciones</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {animals.map((animal) => (
            <TableRow key={`${animal.clientId}-${animal.name}`}>
              <TableCell>{animal.name}</TableCell>
              <TableCell>{animal.species}</TableCell>
              <TableCell>{animal.age} años</TableCell>
              <TableCell>{getClientName(animal.clientId)}</TableCell>
              <TableCell align="center">
                <IconButton
                  color="primary"
                  onClick={() => onEdit(animal)}
                  aria-label="editar"
                >
                  <EditIcon />
                </IconButton>
                <IconButton
                  color="error"
                  onClick={() => onDelete(animal.clientId, animal.name)}
                  aria-label="eliminar"
                >
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default AnimalsList;