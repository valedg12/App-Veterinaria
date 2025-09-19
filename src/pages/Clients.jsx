import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';

const initialClients = [
  { id: '1', name: 'María González', email: 'maria@email.com' },
  { id: '2', name: 'Carlos López', email: 'carlos@email.com' }
];

export default function Clients() {
  const [clients, setClients] = useState(initialClients);

  return <Outlet context={{ clients, setClients }} />;
}