import React, { useState } from 'react';

function ClientePanel({ reservas, setReservas }) {
  const [cliente, setCliente] = useState('');
  const [fecha, setFecha] = useState('');
  const [hora, setHora] = useState('');
  const [mensaje, setMensaje] = useState('');

  const crearReserva = () => {
    if (cliente && fecha && hora) {
      const nuevaReserva = {
        id: reservas.length + 1, // Asigna un ID único
        cliente,
        fecha,
        hora
      };
      setReservas([...reservas, nuevaReserva]);
      setCliente('');
      setFecha('');
      setHora('');
      setMensaje('Reserva creada exitosamente');
    } else {
      setMensaje('Por favor, complete todos los campos.');
    }
  };

  return (
    <div>
      <h2>Crear Reserva</h2>
      <input
        type="text"
        placeholder="Nombre del Cliente"
        value={cliente}
        onChange={(e) => setCliente(e.target.value)}
      />
      <input
        type="date"
        value={fecha}
        onChange={(e) => setFecha(e.target.value)}
      />
      <input
        type="time"
        value={hora}
        onChange={(e) => setHora(e.target.value)}
      />
      <button onClick={crearReserva}>Crear Reserva</button>
      {mensaje && <p>{mensaje}</p>}
    </div>
  );
}

export default ClientePanel;
