import React from 'react';
import { List, ListItem, ListItemText, IconButton, Typography, Button, Stack } from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';

export default function AnimalsList({ animals, clients, onDelete }) {
  return (
    <div style={{ padding: 20 }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center" mb={2}>
        <Typography variant="h4">Animales</Typography>
        <Button variant="contained" component={RouterLink} to="/animals/new">Agregar Animal</Button>
      </Stack>
      <List>
        {animals.map(animal => {
          const client = clients.find(c => c.id === animal.clientId);
          return (
            <ListItem
              key={animal.id}
              secondaryAction={
                <>
                  <IconButton edge="end" aria-label="edit" component={RouterLink} to={`/animals/edit/${animal.id}`}>
                    <Edit />
                  </IconButton>
                  <IconButton edge="end" aria-label="delete" onClick={() => onDelete(animal.id)}>
                    <Delete />
                  </IconButton>
                </>
              }
            >
              <ListItemText
                primary={`${animal.name} (${animal.species})`}
                secondary={`Cliente: ${client ? client.name : 'Desconocido'}`}
              />
            </ListItem>
          );
        })}
      </List>
    </div>
  );
}