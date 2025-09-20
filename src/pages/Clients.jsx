import React, { useState } from 'react';
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  List,
  ListItem,
  ListItemText,
  TextField,
  Typography,
} from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

export default function Clients({ clients, addClient, editClient, deleteClient }) {
  const [open, setOpen] = useState(false);
  const [editingClient, setEditingClient] = useState(null);
  const [formData, setFormData] = useState({ name: '', phone: '', email: '' });

  const handleOpenAdd = () => {
    setEditingClient(null);
    setFormData({ name: '', phone: '', email: '' });
    setOpen(true);
  };

  const handleOpenEdit = (client) => {
    setEditingClient(client);
    setFormData({ name: client.name, phone: client.phone, email: client.email || '' });
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setEditingClient(null);
    setFormData({ name: '', phone: '', email: '' });
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = () => {
    if (!formData.name.trim() || !formData.phone.trim() || !formData.email.trim()) return;

    if (editingClient) {
      editClient({ ...editingClient, ...formData });
    } else {
      addClient(formData);
    }
    handleClose();
  };

  return (
    <Box sx={{ maxWidth: 600, margin: 'auto', p: 2 }}>
      <Typography variant="h4" gutterBottom>
        Lista de Clientes
      </Typography>
      <List>
        {clients.map((client) => (
          <ListItem
            key={client.id}
            divider
            secondaryAction={
              <>
                <IconButton edge="end" aria-label="edit" onClick={() => handleOpenEdit(client)}>
                  <EditIcon />
                </IconButton>
                <IconButton edge="end" aria-label="delete" onClick={() => deleteClient(client.id)}>
                  <DeleteIcon />
                </IconButton>
              </>
            }
          >
            <PersonIcon sx={{ mr: 2 }} />
            <ListItemText
              primary={`ID: ${client.id} - ${client.name}`}
              secondary={`Tel: ${client.phone} | Email: ${client.email || 'No especificado'}`}
            />
          </ListItem>
        ))}
      </List>
      <Button variant="contained" onClick={handleOpenAdd} sx={{ mt: 2 }}>
        Agregar Cliente
      </Button>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{editingClient ? 'Editar Cliente' : 'Nuevo Cliente'}</DialogTitle>
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
            label="Teléfono"
            name="phone"
            fullWidth
            variant="standard"
            value={formData.phone}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            label="Correo"
            name="email"
            type="email"
            fullWidth
            variant="standard"
            value={formData.email}
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button onClick={handleSubmit} variant="contained">
            {editingClient ? 'Guardar' : 'Agregar'}
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}