import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/Navbar';
import Inicio from './pages/Inicio';
import Clients from './pages/Clients';
import Animals from './pages/Animals';

export default function App() {
  const [clients, setClients] = useState([
    { id: 1, name: 'Juan Pérez', phone: '555-1234', email: 'juan@example.com' },
    { id: 2, name: 'María Gómez', phone: '555-5678', email: 'maria@example.com' },
  ]);

  const [animals, setAnimals] = useState([
    { id: 1, name: 'Firulais', species: 'Perro', breed: 'Labrador', age: 5, ownerId: 1 },
    { id: 2, name: 'Michi', species: 'Gato', breed: 'Siames', age: 3, ownerId: 2 },
  ]);

  const addClient = (client) => {
    const newClient = { ...client, id: Date.now() };
    setClients((prev) => [...prev, newClient]);
  };

  const editClient = (updatedClient) => {
    setClients((prev) =>
      prev.map((c) => (c.id === updatedClient.id ? updatedClient : c))
    );
  };

  const deleteClient = (id) => {
    setClients((prev) => prev.filter((c) => c.id !== id));
    // Opcional: eliminar mascotas de ese cliente o reasignar dueño
    setAnimals((prev) => prev.filter((a) => a.ownerId !== id));
  };

  const addAnimal = (animal) => {
    const newAnimal = { ...animal, id: Date.now() };
    setAnimals((prev) => [...prev, newAnimal]);
  };

  const editAnimal = (updatedAnimal) => {
    setAnimals((prev) =>
      prev.map((a) => (a.id === updatedAnimal.id ? updatedAnimal : a))
    );
  };

  const deleteAnimal = (id) => {
    setAnimals((prev) => prev.filter((a) => a.id !== id));
  };

  return (
    <>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={<Inicio />}
        />
        <Route
          path="/clients"
          element={
            <Clients
              clients={clients}
              addClient={addClient}
              editClient={editClient}
              deleteClient={deleteClient}
            />
          }
        />
        <Route
          path="/animals"
          element={
            <Animals
              animals={animals}
              clients={clients}
              addAnimal={addAnimal}
              editAnimal={editAnimal}
              deleteAnimal={deleteAnimal}
            />
          }
        />
      </Routes>
    </>
  );
}