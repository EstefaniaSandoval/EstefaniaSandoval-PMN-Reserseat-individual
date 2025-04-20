import React, { useState } from 'react';
function Login() {
  const [usuario, setUsuario] = useState('');
  const [mensaje, setMensaje] = useState('');
  const ingresar = () => {
    const rol = usuario.toLowerCase();
    if (rol === 'admin') setMensaje('Bienvenido Administrador');
    else if (rol === 'recepcionista') setMensaje('Bienvenido Recepcionista');
    else if (rol === 'cliente') setMensaje('Bienvenido Cliente');
    else setMensaje('Usuario no reconocido');
  };
  return (
    <div>
      <h2>Login</h2>
      <input placeholder="Usuario" value={usuario} onChange={e => setUsuario(e.target.value)} />
      <button onClick={ingresar}>Ingresar</button>
      <p>{mensaje}</p>
    </div>
  );
}
export default Login;
