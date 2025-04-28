import React, { useState } from 'react';

function RecepcionistaPanel({ reservas, setReservas }) {
  // Función para confirmar una reserva
  const confirmarReserva = (id) => {
    const nuevasReservas = reservas.map((reserva) =>
      reserva.id === id ? { ...reserva, estado: 'Confirmada' } : reserva
    );
    setReservas(nuevasReservas);
  };

  // Función para cancelar una reserva
  const cancelarReserva = (id) => {
    const nuevasReservas = reservas.map((reserva) =>
      reserva.id === id ? { ...reserva, estado: 'Cancelada' } : reserva
    );
    setReservas(nuevasReservas);
  };

  return (
    <div>
      <h2>Panel del Recepcionista: Confirmación y Gestión de Reservas</h2>
      <ul>
        {reservas.map((reserva) => (
          <li key={reserva.id}>
            Cliente: {reserva.cliente} - Fecha: {reserva.fecha} - Hora: {reserva.hora} - Estado: {reserva.estado || 'Pendiente'}
            <button
              onClick={() => confirmarReserva(reserva.id)}
              style={{ marginLeft: '10px', color: 'green' }}
              disabled={reserva.estado === 'Confirmada' || reserva.estado === 'Cancelada'}
            >
              Confirmar
            </button>
            <button
              onClick={() => cancelarReserva(reserva.id)}
              style={{ marginLeft: '10px', color: 'red' }}
              disabled={reserva.estado === 'Cancelada'}
            >
              Cancelar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RecepcionistaPanel;
