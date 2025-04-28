import React, { useState } from 'react';

function AdminDashboard({ reservas, setReservas }) {
  // Estado para los usuarios
  const [usuarios, setUsuarios] = useState([]);
  const [nuevoUsuario, setNuevoUsuario] = useState({ nombre: '', rol: '' });

  // Estado para los reportes
  const [nuevoReporte, setNuevoReporte] = useState("");

  // Función para eliminar una reserva
  const eliminarReserva = (id) => {
    const reservasFiltradas = reservas.filter(reserva => reserva.id !== id);
    setReservas(reservasFiltradas);
  };

  // Función para agregar un nuevo usuario
  const agregarUsuario = () => {
    if (nuevoUsuario.nombre && nuevoUsuario.rol) {
      setUsuarios([...usuarios, nuevoUsuario]);
      setNuevoUsuario({ nombre: '', rol: '' }); // Limpiar formulario después de agregar
    } else {
      alert('Por favor, ingrese un nombre y rol');
    }
  };

  // Generación de reporte de reservas
  const generarReporte = () => {
    setNuevoReporte(`Total de reservas: ${reservas.length}\nDetalles de las reservas: \n${reservas.map(res => `Cliente: ${res.cliente}, Fecha: ${res.fecha}, Hora: ${res.hora}`).join("\n")}`);
  };

  return (
    <div>
      <h2>Panel de Administrador: Gestión de Usuarios y Reportes</h2>

      {/* Sección de Gestión de Usuarios */}
      <div>
        <h3>Gestionar Usuarios</h3>
        <input
          type="text"
          placeholder="Nombre del Usuario"
          value={nuevoUsuario.nombre}
          onChange={(e) => setNuevoUsuario({ ...nuevoUsuario, nombre: e.target.value })}
        />
        <input
          type="text"
          placeholder="Rol (admin/recepcionista)"
          value={nuevoUsuario.rol}
          onChange={(e) => setNuevoUsuario({ ...nuevoUsuario, rol: e.target.value })}
        />
        <button onClick={agregarUsuario}>Agregar Usuario</button>

        <h4>Usuarios Registrados</h4>
        <ul>
          {usuarios.map((usuario, index) => (
            <li key={index}>
              {usuario.nombre} ({usuario.rol})
            </li>
          ))}
        </ul>
      </div>

      <hr />

      {/* Sección de Generación de Reporte */}
      <div>
        <h3>Generar Reporte de Reservas</h3>
        <button onClick={generarReporte}>Generar Reporte de Reservas</button>
        {nuevoReporte && <pre>{nuevoReporte}</pre>}
      </div>

      <hr />

      {/* Listado de Reservas */}
      <div>
        <h3>Listado de Reservas</h3>
        <ul>
          {reservas.map(reserva => (
            <li key={reserva.id}>
              Cliente: {reserva.cliente} - Fecha: {reserva.fecha} - Hora: {reserva.hora}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default AdminDashboard;
