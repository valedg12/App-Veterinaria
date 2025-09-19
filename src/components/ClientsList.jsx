import React from 'react';
import { List, ListItem, ListItemText, IconButton, Typography, Button, Stack } from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';

export default function ClientsList({ clients, onDelete }) {
  return (
    <div style={{ padding: 20 }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center" mb={2}>
        <Typography variant="h4">Clientes</Typography>
        <Button variant="contained" component={RouterLink} to="/clients/new">Agregar Cliente</Button>
      </Stack>
      <List>
        {clients.map(client => (
          <ListItem
            key={client.id}
            secondaryAction={
              <>
                <IconButton edge="end" aria-label="edit" component={RouterLink} to={`/clients/edit/${client.id}`}>
                  <Edit />
                </IconButton>
                <IconButton edge="end" aria-label="delete" onClick={() => onDelete(client.id)}>
                  <Delete />
                </IconButton>
              </>
            }
          >
            <ListItemText primary={client.name} secondary={client.email} />
          </ListItem>
        ))}
      </List>
    </div>
  );
}