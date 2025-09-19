import React from 'react';
import { BrowserRouter as Router, Routes, Route, useOutletContext, useNavigate, useParams } from 'react-router-dom';

import NavBar from './components/Navbar';
import Inicio from './pages/Inicio';
import Clients from './pages/Clients';
import Animals from './pages/Animals';

import ClientsList from './components/ClientsList';
import ClientForm from './components/ClientForm';

import AnimalsList from './components/AnimalsList';
import AnimalForm from './components/AnimalForm';

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/clients" element={<Clients />}>
          <Route index element={<ClientsListWrapper />} />
          <Route path="new" element={<ClientFormWrapper />} />
          <Route path="edit/:id" element={<ClientFormWrapper />} />
        </Route>

        <Route path="/animals" element={<Animals />}>
          <Route index element={<AnimalsListWrapper />} />
          <Route path="new" element={<AnimalFormWrapper />} />
          <Route path="edit/:id" element={<AnimalFormWrapper />} />
        </Route>

        <Route path="*" element={<h2 style={{ padding: 20 }}>Página no encontrada</h2>} />
      </Routes>
    </Router>
  );
}


function ClientsListWrapper() {
  const { clients, setClients } = useOutletContext();

  const deleteClient = (id) => {
    if (window.confirm('¿Eliminar cliente? Se eliminarán sus animales también.')) {
      setClients(prev => prev.filter(c => c.id !== id));
    }
  };

  return <ClientsList clients={clients} onDelete={deleteClient} />;
}

function ClientFormWrapper() {
  const { clients, setClients } = useOutletContext();
  const navigate = useNavigate();
  const { id } = useParams();

  const addOrUpdateClient = (client) => {
    setClients(prev => {
      const exists = prev.find(c => c.id === client.id);
      if (exists) {
        return prev.map(c => c.id === client.id ? client : c);
      }
      return [...prev, client];
    });
    navigate('/clients');
  };

  return <ClientForm clients={clients} onSave={addOrUpdateClient} />;
}

function AnimalsListWrapper() {
  const { animals, setAnimals, clients } = useOutletContext();

  const deleteAnimal = (id) => {
    if (window.confirm('¿Eliminar animal?')) {
      setAnimals(prev => prev.filter(a => a.id !== id));
    }
  };

  return <AnimalsList animals={animals} clients={clients} onDelete={deleteAnimal} />;
}

function AnimalFormWrapper() {
  const { animals, setAnimals, clients } = useOutletContext();
  const navigate = useNavigate();
  const { id } = useParams();

  const addOrUpdateAnimal = (animal) => {
    setAnimals(prev => {
      const exists = prev.find(a => a.id === animal.id);
      if (exists) {
        return prev.map(a => a.id === animal.id ? animal : a);
      }
      return [...prev, animal];
    });
    navigate('/animals');
  };

  return <AnimalForm animals={animals} clients={clients} onSave={addOrUpdateAnimal} />;
}