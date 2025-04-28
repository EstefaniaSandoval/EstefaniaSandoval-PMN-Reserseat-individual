import React, { useState } from 'react';
import './Login.css';  // Asegúrate de que tengas el archivo CSS con los estilos

function Login({ login }) {
  const [usuario, setUsuario] = useState('');
  const [mensaje, setMensaje] = useState('');

  const ingresar = () => {
    const rol = usuario.toLowerCase();
    if (rol === 'admin') {
      setMensaje('Bienvenido Administrador');
      login('admin');
    } else if (rol === 'recepcionista') {
      setMensaje('Bienvenido Recepcionista');
      login('recepcionista');
    } else if (rol === 'cliente') {
      setMensaje('Bienvenido Cliente');
      login('cliente');
    } else {
      setMensaje('Usuario no reconocido');
    }
  };

  return (
    <div className="login-wrapper"> {/* Contenedor principal que rodea todo el formulario */}
      <div className="login-container"> {/* Este es el contenedor del formulario de login */}
        <div className="login-card">
          <h2>Bienvenido a la Gestión de Reservas</h2>
          <div className="login-form">
            <input
              className="input"
              placeholder="Introduce tu rol (admin, recepcionista, cliente)"
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
            />
            <button className="login-button" onClick={ingresar}>
              Ingresar
            </button>
          </div>
          {mensaje && <p className="message">{mensaje}</p>}
        </div>
      </div>
    </div>
  );
}

export default Login;
