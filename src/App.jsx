import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Navbar';
import Home from './pages/Home';
import Clients from './pages/Clients';
import Animals from './pages/Animals';

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/clients/*" element={<Clients />} />
        <Route path="/animals/*" element={<Animals />} />
        <Route path="*" element={<h2 style={{ padding: 20 }}>Página no encontrada</h2>} />
      </Routes>
    </>
  );
}