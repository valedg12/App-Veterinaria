import React, { useState } from 'react';
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  IconButton,
  InputLabel,
  List,
  ListItem,
  ListItemText,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@mui/material';
import PetsIcon from '@mui/icons-material/Pets';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

export default function Animals({ animals, clients, addAnimal, editAnimal, deleteAnimal }) {
  const [open, setOpen] = useState(false);
  const [editingAnimal, setEditingAnimal] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    species: '',
    breed: '',
    age: '',
    ownerId: '',
  });

  const handleOpenAdd = () => {
    setEditingAnimal(null);
    setFormData({ name: '', species: '', breed: '', age: '', ownerId: '' });
    setOpen(true);
  };

  const handleOpenEdit = (animal) => {
    setEditingAnimal(animal);
    setFormData({
      name: animal.name,
      species: animal.species,
      breed: animal.breed || '',
      age: animal.age || '',
      ownerId: animal.ownerId,
    });
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setEditingAnimal(null);
    setFormData({ name: '', species: '', breed: '', age: '', ownerId: '' });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    if (
      !formData.name.trim() ||
      !formData.species.trim() ||
      !formData.breed.trim() ||
      !formData.age.trim() ||
      !formData.ownerId
    )
      return;

    if (editingAnimal) {
      editAnimal({ ...editingAnimal, ...formData, age: Number(formData.age) });
    } else {
      addAnimal({ ...formData, age: Number(formData.age) });
    }
    handleClose();
  };

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
          <ListItem
            key={animal.id}
            divider
            secondaryAction={
              <>
                <IconButton edge="end" aria-label="edit" onClick={() => handleOpenEdit(animal)}>
                  <EditIcon />
                </IconButton>
                <IconButton edge="end" aria-label="delete" onClick={() => deleteAnimal(animal.id)}>
                  <DeleteIcon />
                </IconButton>
              </>
            }
          >
            <PetsIcon sx={{ mr: 2 }} />
            <ListItemText
              primary={`${animal.name} (${animal.species})`}
              secondary={`Raza: ${animal.breed} | Edad: ${animal.age} años | Dueño: ${getOwnerName(
                animal.ownerId
              )}`}
            />
          </ListItem>
        ))}
      </List>
      <Button variant="contained" onClick={handleOpenAdd} sx={{ mt: 2 }}>
        Agregar Mascota
      </Button>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{editingAnimal ? 'Editar Mascota' : 'Nueva Mascota'}</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Nombre"
            name="name"
            fullWidth
            variant="standard"
            value={formData.name}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            label="Especie"
            name="species"
            fullWidth
            variant="standard"
            value={formData.species}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            label="Raza"
            name="breed"
            fullWidth
            variant="standard"
            value={formData.breed}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            label="Edad"
            name="age"
            type="number"
            fullWidth
            variant="standard"
            value={formData.age}
            onChange={handleChange}
            inputProps={{ min: 0 }}
          />
          <FormControl fullWidth margin="dense" variant="standard">
            <InputLabel id="owner-label">Dueño</InputLabel>
            <Select
              labelId="owner-label"
              name="ownerId"
              value={formData.ownerId}
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
          <Button onClick={handleSubmit} variant="contained">
            {editingAnimal ? 'Guardar' : 'Agregar'}
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}