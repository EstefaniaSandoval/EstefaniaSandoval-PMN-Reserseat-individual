import React from 'react';
import { Link } from 'react-router-dom';

function Reservas() {
  const lista = [
    { id: 1, cliente: 'Carlos', hora: '20:00' },
    { id: 2, cliente: 'Ana', hora: '21:00' }
  ];
  return (
    <div>
      <h2>Listado de reservas</h2>
      <Link to="/cliente">Crear nueva reserva</Link>
      <ul>
        {lista.map(res => (
          <li key={res.id}>
            Cliente: {res.cliente} - Hora: {res.hora}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Reservas;
