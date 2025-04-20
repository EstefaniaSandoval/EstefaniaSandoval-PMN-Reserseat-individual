import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import AdminDashboard from './AdminDashboard';
import RecepcionistaPanel from './RecepcionistaPanel';
import ClientePanel from './ClientePanel';
import Reservas from './Reservas';
import Login from './Login';
import NotFound from './NotFound';

function App() {
  return (
    <BrowserRouter>
      <header>
        <h1>Gestión de Reservas - Restaurante</h1>
        <nav>
          <Link to="/">Inicio</Link> | 
          <Link to="/admin">Administrador</Link> | 
          <Link to="/recepcionista">Recepcionista</Link> | 
          <Link to="/cliente">Cliente</Link> | 
          <Link to="/reservas">Reservas</Link> | 
          <Link to="/login">Login</Link>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/recepcionista" element={<RecepcionistaPanel />} />
          <Route path="/cliente" element={<ClientePanel />} />
          <Route path="/reservas" element={<Reservas />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
