import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Box, Stack, MenuItem } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';

export default function AnimalForm({ animals, clients, onSave }) {
  const navigate = useNavigate();
  const { id } = useParams();

  const editingAnimal = animals.find(a => a.id === id);

  const [name, setName] = useState('');
  const [species, setSpecies] = useState('');
  const [clientId, setClientId] = useState('');

  useEffect(() => {
    if (editingAnimal) {
      setName(editingAnimal.name);
      setSpecies(editingAnimal.species);
      setClientId(editingAnimal.clientId);
    } else if (clients.length > 0) {
      setClientId(clients[0].id);
    }
  }, [editingAnimal, clients]);

  const handleSubmit = e => {
    e.preventDefault();
    if (!name.trim() || !species.trim() || !clientId) {
      alert('Completa todos los campos');
      return;
    }
    if (editingAnimal) {
      onSave({ id: editingAnimal.id, name, species, clientId });
    } else {
      onSave({ id: Date.now().toString(), name, species, clientId });
    }
    navigate('/animals');
  };

  return (
    <Box sx={{ maxWidth: 400, mx: 'auto', mt: 4 }}>
      <Typography variant="h5" mb={2}>
        {editingAnimal ? 'Editar Animal' : 'Agregar Animal'}
      </Typography>
      <form onSubmit={handleSubmit}>
        <Stack spacing={2}>
          <TextField
            label="Nombre"
            value={name}
            onChange={e => setName(e.target.value)}
            fullWidth
            required
          />
          <TextField
            label="Especie"
            value={species}
            onChange={e => setSpecies(e.target.value)}
            fullWidth
            required
          />
          <TextField
            select
            label="Cliente"
            value={clientId}
            onChange={e => setClientId(e.target.value)}
            fullWidth
            required
          >
            {clients.map(client => (
              <MenuItem key={client.id} value={client.id}>
                {client.name}
              </MenuItem>
            ))}
          </TextField>
          <Button variant="contained" type="submit">
            {editingAnimal ? 'Actualizar' : 'Agregar'}
          </Button>
        </Stack>
      </form>
    </Box>
  );
}