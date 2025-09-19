import React, { useState, useEffect } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Box,
} from '@mui/material';

const ClientForm = ({ open, handleClose, client, onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    id: '',
  });

  useEffect(() => {
    if (client) {
      setFormData(client);
    } else {
      setFormData({ name: '', email: '', id: '' });
    }
  }, [client, open]);

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
        {client ? 'Editar Cliente' : 'Agregar Nuevo Cliente'}
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
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            margin="normal"
            required
          />
          <TextField
            fullWidth
            label="ID"
            name="id"
            value={formData.id}
            onChange={handleChange}
            margin="normal"
            required
          />
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancelar</Button>
        <Button onClick={handleSubmit} variant="contained">
          {client ? 'Actualizar' : 'Agregar'}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ClientForm;