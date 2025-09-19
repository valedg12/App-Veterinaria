import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';

const initialAnimals = [
  { id: '1', name: 'Max', species: 'Perro', clientId: '1' },
  { id: '2', name: 'Luna', species: 'Gato', clientId: '1' },
  { id: '3', name: 'Rocky', species: 'Perro', clientId: '2' }
];

const initialClients = [
  { id: '1', name: 'María González', email: 'maria@email.com' },
  { id: '2', name: 'Carlos López', email: 'carlos@email.com' }
];

export default function Animals() {
  const [animals, setAnimals] = useState(initialAnimals);
  const [clients] = useState(initialClients);

  return <Outlet context={{ animals, setAnimals, clients }} />;
}