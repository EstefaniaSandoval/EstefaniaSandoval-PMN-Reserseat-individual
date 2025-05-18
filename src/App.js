import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom';
import AdminDashboard from './AdminDashboard';
import RecepcionistaPanel from './RecepcionistaPanel';
import ClientePanel from './ClientePanel';
import Reservas from './Reservas';
import Login from './Login';
import NotFound from './NotFound';

function App() {
  // === RESERVAS: persistencia con localStorage ===
  const [reservas, setReservas] = useState(() => {
    const saved = localStorage.getItem('reservas');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('reservas', JSON.stringify(reservas));
  }, [reservas]);

  // === USUARIO (rol): persistencia con localStorage ===
  const [usuario, setUsuario] = useState(() => localStorage.getItem('usuario') || '');

  useEffect(() => {
    if (usuario) {
      localStorage.setItem('usuario', usuario);
    } else {
      localStorage.removeItem('usuario');
    }
  }, [usuario]);

  const login = (rol) => {
    setUsuario(rol);
  };

  const logout = () => {
    setUsuario('');
  };

  // === NAV ===
  const renderNav = () => {
    if (!usuario) {
      return <nav><Link to="/login">Login</Link></nav>;
    }

    const navItems = {
      admin: <Link to="/admin">Administrador</Link>,
      recepcionista: <Link to="/recepcionista">Recepcionista</Link>,
      cliente: <Link to="/cliente">Cliente</Link>,
    };

    return (
      <nav>
        {navItems[usuario]} | 
        <Link to="/reservas">Reservas</Link> | 
        <Link to="/login" onClick={logout}>Cerrar sesión</Link>
      </nav>
    );
  };

  // === RENDER ===
  return (
    <BrowserRouter>
      <header>
        <h1>Gestión de Reservas - Restaurante</h1>
        {renderNav()}
      </header>
      <main>
        <Routes>
          <Route path="/" element={usuario ? <Navigate to={`/${usuario}`} /> : <Navigate to="/login" />} />
          <Route path="/admin" element={<AdminDashboard reservas={reservas} setReservas={setReservas} />} />
          <Route path="/recepcionista" element={<RecepcionistaPanel reservas={reservas} setReservas={setReservas} />} />
          <Route path="/cliente" element={<ClientePanel reservas={reservas} setReservas={setReservas} />} />
          <Route path="/reservas" element={<Reservas reservas={reservas} setReservas={setReservas} rol={usuario} />} />
          <Route path="/login" element={<Login login={login} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
