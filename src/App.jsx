import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/Navbar';
import Inicio from './pages/Inicio';
import Clients from './pages/Clients';
import Animals from './pages/Animals';

export default function App() {
  const [clients, setClients] = useState([
    { id: 1, name: 'Juan Pérez', phone: '555-1234' },
    { id: 2, name: 'María Gómez', phone: '555-5678' },
  ]);

  const [animals, setAnimals] = useState([
    { id: 1, name: 'Firulais', species: 'Perro', ownerId: 1 },
    { id: 2, name: 'Michi', species: 'Gato', ownerId: 2 },
  ]);

  const addClient = (client) => {
    const newClient = { ...client, id: Date.now() };
    setClients((prev) => [...prev, newClient]);
  };

  const addAnimal = (animal) => {
    const newAnimal = { ...animal, id: Date.now() };
    setAnimals((prev) => [...prev, newAnimal]);
  };

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route
          path="/clients"
          element={<Clients clients={clients} addClient={addClient} />}
        />
        <Route
          path="/animals"
          element={<Animals animals={animals} clients={clients} addAnimal={addAnimal} />}
        />
      </Routes>
    </>
  );
}