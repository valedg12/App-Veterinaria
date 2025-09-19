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
} from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';

export default function Clients({ clients, addClient }) {
  const [open, setOpen] = useState(false);
  const [newClient, setNewClient] = useState({ name: '', phone: '' });

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setNewClient({ name: '', phone: '' });
  };

  const handleChange = (e) => {
    setNewClient({ ...newClient, [e.target.name]: e.target.value });
  };

  const handleAddClient = () => {
    if (newClient.name.trim() === '' || newClient.phone.trim() === '') return;
    addClient(newClient);
    handleClose();
  };

  return (
    <Box sx={{ maxWidth: 600, margin: 'auto', p: 2 }}>
      <Typography variant="h4" gutterBottom>
        Lista de Clientes
      </Typography>
      <List>
        {clients.map((client) => (
          <ListItem key={client.id} divider>
            <PersonIcon sx={{ mr: 2 }} />
            <ListItemText primary={`ID: ${client.id} - ${client.name}`} secondary={`Tel: ${client.phone}`} />
          </ListItem>
        ))}
      </List>
      <Button variant="contained" onClick={handleOpen} sx={{ mt: 2 }}>
        Agregar Cliente
      </Button>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Nuevo Cliente</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Nombre"
            name="name"
            fullWidth
            variant="standard"
            value={newClient.name}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            label="Teléfono"
            name="phone"
            fullWidth
            variant="standard"
            value={newClient.phone}
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button onClick={handleAddClient} variant="contained">
            Agregar
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}