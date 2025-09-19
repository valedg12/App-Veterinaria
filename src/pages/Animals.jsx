import React, { useState } from 'react';
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  List,
  ListItem,
  ListItemText,
  TextField,
  Typography,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
} from '@mui/material';
import PetsIcon from '@mui/icons-material/Pets';

export default function Animals({ animals, clients, addAnimal }) {
  const [open, setOpen] = useState(false);
  const [newAnimal, setNewAnimal] = useState({ name: '', species: '', ownerId: '' });

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setNewAnimal({ name: '', species: '', ownerId: '' });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewAnimal((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddAnimal = () => {
    if (
      newAnimal.name.trim() === '' ||
      newAnimal.species.trim() === '' ||
      newAnimal.ownerId === ''
    )
      return;
    addAnimal(newAnimal);
    handleClose();
  };

  // Función para obtener nombre del dueño por ownerId
  const getOwnerName = (ownerId) => {
    const owner = clients.find((c) => c.id === Number(ownerId));
    return owner ? owner.name : 'Desconocido';
  };

  return (
    <Box sx={{ maxWidth: 600, margin: 'auto', p: 2 }}>
      <Typography variant="h4" gutterBottom>
        Lista de Mascotas
      </Typography>
      <List>
        {animals.map((animal) => (
          <ListItem key={animal.id} divider>
            <PetsIcon sx={{ mr: 2 }} />
            <ListItemText
              primary={`${animal.name} (${animal.species})`}
              secondary={`Dueño: ${getOwnerName(animal.ownerId)}`}
            />
          </ListItem>
        ))}
      </List>
      <Button variant="contained" onClick={handleOpen} sx={{ mt: 2 }}>
        Agregar Mascota
      </Button>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Nueva Mascota</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Nombre"
            name="name"
            fullWidth
            variant="standard"
            value={newAnimal.name}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            label="Especie"
            name="species"
            fullWidth
            variant="standard"
            value={newAnimal.species}
            onChange={handleChange}
          />
          <FormControl fullWidth margin="dense" variant="standard">
            <InputLabel id="owner-label">Dueño</InputLabel>
            <Select
              labelId="owner-label"
              name="ownerId"
              value={newAnimal.ownerId}
              onChange={handleChange}
              label="Dueño"
            >
              {clients.map((client) => (
                <MenuItem key={client.id} value={client.id}>
                  {client.name} (ID: {client.id})
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button onClick={handleAddAnimal} variant="contained">
            Agregar
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}