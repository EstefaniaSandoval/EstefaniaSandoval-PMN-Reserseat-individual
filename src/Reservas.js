import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Reservas({ reservas, setReservas, rol }) {
  const [reservaEditada, setReservaEditada] = useState(null);
  const [fechaNueva, setFechaNueva] = useState('');
  const [horaNueva, setHoraNueva] = useState('');

  const editarReserva = (id) => {
    const reserva = reservas.find(res => res.id === id);
    setReservaEditada(reserva);
    setFechaNueva(reserva.fecha);
    setHoraNueva(reserva.hora);
  };

  const confirmarEdicion = (id) => {
    const horarioOcupado = reservas.some(
      (reserva) => reserva.fecha === fechaNueva && reserva.hora === horaNueva && reserva.id !== id
    );

    if (horarioOcupado) {
      alert('Este horario ya está ocupado. Por favor, elige otro horario.');
    } else {
      const nuevasReservas = reservas.map((reserva) =>
        reserva.id === id ? { ...reserva, fecha: fechaNueva, hora: horaNueva } : reserva
      );
      setReservas(nuevasReservas);
      setReservaEditada(null);
      setFechaNueva('');
      setHoraNueva('');
    }
  };

  return (
    <div>
      <h2>Listado de Reservas</h2>
      <Link to="/cliente">Crear nueva reserva</Link>
      <ul>
        {reservas.map((res) => (
          <li key={res.id}>
            Cliente: {res.cliente} - Fecha: {res.fecha} - Hora: {res.hora}
            {rol === 'recepcionista' && (
              <button
                onClick={() => editarReserva(res.id)}
                style={{ marginLeft: '10px', color: 'blue' }}
              >
                Editar
              </button>
            )}
          </li>
        ))}
      </ul>

      {reservaEditada && rol === 'recepcionista' && (
        <div>
          <h3>Editar Reserva</h3>
          <p>
            Estás editando la reserva de <strong>{reservaEditada.cliente}</strong> que tiene la fecha{" "}
            {reservaEditada.fecha} y la hora {reservaEditada.hora}.
          </p>
          <div>
            <input
              type="date"
              value={fechaNueva}
              onChange={(e) => setFechaNueva(e.target.value)}
            />
            <input
              type="time"
              value={horaNueva}
              onChange={(e) => setHoraNueva(e.target.value)}
            />
            <button onClick={() => confirmarEdicion(reservaEditada.id)}>Confirmar Edición</button>
            <button onClick={() => setReservaEditada(null)}>Cancelar</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Reservas;
