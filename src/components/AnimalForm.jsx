import React, { useState, useEffect } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Box,
  MenuItem,
} from '@mui/material';

const AnimalForm = ({ open, handleClose, animal, clients, onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    species: '',
    age: '',
    clientId: '',
  });

  useEffect(() => {
    if (animal) {
      setFormData(animal);
    } else {
      setFormData({ name: '', species: '', age: '', clientId: '' });
    }
  }, [animal, open]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    onSubmit(formData);
    handleClose();
  };

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
      <DialogTitle>
        {animal ? 'Editar Mascota' : 'Agregar Nueva Mascota'}
      </DialogTitle>
      <DialogContent>
        <Box sx={{ pt: 2 }}>
          <TextField
            fullWidth
            label="Nombre"
            name="name"
            value={formData.name}
            onChange={handleChange}
            margin="normal"
            required
          />
          <TextField
            fullWidth
            select
            label="Especie"
            name="species"
            value={formData.species}
            onChange={handleChange}
            margin="normal"
            required
          >
            <MenuItem value="Perro">Perro</MenuItem>
            <MenuItem value="Gato">Gato</MenuItem>
            <MenuItem value="Conejo">Conejo</MenuItem>
            <MenuItem value="Pájaro">Pájaro</MenuItem>
            <MenuItem value="Otro">Otro</MenuItem>
          </TextField>
          <TextField
            fullWidth
            label="Edad"
            name="age"
            type="number"
            value={formData.age}
            onChange={handleChange}
            margin="normal"
            required
            inputProps={{ min: 0 }}
          />
          <TextField
            fullWidth
            select
            label="Dueño"
            name="clientId"
            value={formData.clientId}
            onChange={handleChange}
            margin="normal"
            required
          >
            {clients.map((client) => (
              <MenuItem key={client.id} value={client.id}>
                {client.name} ({client.email})
              </MenuItem>
            ))}
          </TextField>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancelar</Button>
        <Button onClick={handleSubmit} variant="contained">
          {animal ? 'Actualizar' : 'Agregar'}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AnimalForm;