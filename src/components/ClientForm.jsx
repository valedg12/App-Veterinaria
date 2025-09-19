import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Box, Stack } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';

export default function ClientForm({ clients, onSave }) {
  const navigate = useNavigate();
  const { id } = useParams();

  const editingClient = clients.find(c => c.id === id);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (editingClient) {
      setName(editingClient.name);
      setEmail(editingClient.email);
    }
  }, [editingClient]);

  const handleSubmit = e => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) {
      alert('Completa todos los campos');
      return;
    }
    if (editingClient) {
      onSave({ id: editingClient.id, name, email });
    } else {
      onSave({ id: Date.now().toString(), name, email });
    }
    navigate('/clients');
  };

  return (
    <Box sx={{ maxWidth: 400, mx: 'auto', mt: 4 }}>
      <Typography variant="h5" mb={2}>
        {editingClient ? 'Editar Cliente' : 'Agregar Cliente'}
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
            label="Email"
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            fullWidth
            required
          />
          <Button variant="contained" type="submit">
            {editingClient ? 'Actualizar' : 'Agregar'}
          </Button>
        </Stack>
      </form>
    </Box>
  );
}