import React, {useState} from 'react';
import AnimalsList from '../components/AnimalsList';
import AnimalForm from '../components/AnimalForm';

import { Routes, Route } from 'react-router-dom';

const initialAnimals = [
    { id: '1', name: 'Max', species: 'Perro', clientId: '1'},
    { id: '2', name: 'Kira', species: 'Gato', clientId: '1'}, 
    { id: '3', name: 'Calo', species: 'Perro', clientId: '2'}
];

const initialClients = [
  { id: '1', name: 'María González', email: 'maria@email.com' },
  { id: '2', name: 'Carlos López', email: 'carlos@email.com' }
];

export default function Animals() {
  const [Animals, setAnimals] = useState(initialAnimals);
  const [clients] = useState(initialClients);
  const addOrUpdatePet = (Animal) => {
    setAnimals(prev => {
      const exists = prev.find( a => a.id === Animal.id);
      if (exists) {
        return prev.map(a => a.id === Animal.id ? Animal : a);
      }
      return [...prev, Animal];
    });
  };
  const deleteAnimal = (id) => {
    if (window.confirm('¿Eliminar mascota?')) {
      setAnimals(prev => prev.filter(a => a.id !== id));
    }
  };
  return (
    <Routes>
      <Route path="/" element={<AnimalsList animals={animals} clients={clients} onDelete={deleteAnimal} />} />
      <Route path="new" element={<AnimalForm animals={animals} clients={clients} onSave={addOrUpdateAnimal} />} />
      <Route path="edit/:id" element={<PetForm pets={pets} clients={clients} onSave={addOrUpdateAnimal} />} />
    </Routes>
  );
}