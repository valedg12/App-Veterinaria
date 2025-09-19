import React, { useState } from 'react';
import ClientsList from '../components/ClientesList';
import ClientForm from '../components/ClientForm';

import { Routes, Route } from 'react-router-dom';

const initialClients = [
    { id: '1', name: 'Agos Ortega', email: 'AgosOrtega@gmail.com' },
    { id: '2', name: 'Juan Lopez', email: 'Juan@gmail.com'},
];

export default function Clients() {
    const [clients, setClients] = useState(initialClients);

    const addOrUpdateClient = (client) => {
        setClients(prev => { 
            const exists = prev.find(c => c.id === client.id);
            if (exists) {
                return prev.map(c => c.id === client.id ? client : c);
            }
            return[...prev,client]
        });
    };
    const deleteClient = (id) => {
        if (window.confirm('Eliminar cliente? Se eliminaran sus mascotas tambien')) {
            setClients(prev => prev.filter(c => c.id !== id));
        }
    };

    return (
        <Route>
            <Route path="/" element={<ClientsList clients={clients} onDelete={deleteClient} />} />
            <Route path="new" element={<ClientForm clients={clients} onSave={addOrUpdateClient} />} />
            <Route path="edit/:id" element={<ClientForm clients={clients} onSave={addOrUpdateClient} />} />
        </Route>
    );
}