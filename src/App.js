import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom';
import AdminDashboard from './AdminDashboard';
import RecepcionistaPanel from './RecepcionistaPanel';
import ClientePanel from './ClientePanel';
import Reservas from './Reservas';
import Login from './Login';
import NotFound from './NotFound';

function App() {
  const [reservas, setReservas] = useState([
    { id: 1, cliente: 'Carlos', fecha: '2025-05-01', hora: '20:00' },
    { id: 2, cliente: 'Ana', fecha: '2025-05-02', hora: '21:00' },
  ]);

  const [usuario, setUsuario] = useState(null); // Estado para manejar el usuario logueado

  // Función para iniciar sesión y establecer el usuario
  const login = (rol) => {
    setUsuario(rol);
  };

  const renderNav = () => {
    // Verificar el rol y mostrar la navegación correspondiente
    if (usuario === 'admin') {
      return (
        <nav>
          <Link to="/admin">Administrador</Link> |
          <Link to="/reservas">Reservas</Link> |
          <Link to="/login" onClick={() => setUsuario(null)}>Cerrar sesión</Link>
        </nav>
      );
    } else if (usuario === 'recepcionista') {
      return (
        <nav>
          <Link to="/recepcionista">Recepcionista</Link> |
          <Link to="/reservas">Reservas</Link> |
          <Link to="/login" onClick={() => setUsuario(null)}>Cerrar sesión</Link>
        </nav>
      );
    } else if (usuario === 'cliente') {
      return (
        <nav>
          <Link to="/cliente">Cliente</Link> |
          <Link to="/reservas">Reservas</Link> |
          <Link to="/login" onClick={() => setUsuario(null)}>Cerrar sesión</Link>
        </nav>
      );
    } else {
      return (
        <nav>
          <Link to="/login">Login</Link>
        </nav>
      );
    }
  };

  return (
    <BrowserRouter>
      <header>
        <h1>Gestión de Reservas - Restaurante</h1>
        {renderNav()} {/* Mostrar la navegación según el rol */}
      </header>
      <main>
        <Routes>
          {/* Ruta principal ahora redirige directamente a Login si no hay un usuario logueado */}
          <Route path="/" element={usuario ? <Navigate to={`/${usuario}`} /> : <Navigate to="/login" />} />

          {/* Rutas para los paneles y reservas */}
          <Route path="/admin" element={<AdminDashboard reservas={reservas} setReservas={setReservas} />} />
          <Route path="/recepcionista" element={<RecepcionistaPanel reservas={reservas} setReservas={setReservas} />} />
          <Route path="/cliente" element={<ClientePanel reservas={reservas} setReservas={setReservas} />} />
          <Route path="/reservas" element={<Reservas reservas={reservas} setReservas={setReservas} />} />

          {/* Login para ingresar a la aplicación */}
          <Route path="/login" element={<Login login={login} />} />

          {/* Página no encontrada */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
