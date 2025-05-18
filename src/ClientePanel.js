import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

function ClientePanel({ reservas, setReservas }) {
  const [cliente, setCliente] = useState('');
  const [fecha, setFecha] = useState('');
  const [hora, setHora] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [mensajeTipo, setMensajeTipo] = useState('');

  const crearReserva = () => {
    if (!cliente || !fecha || !hora) {
      setMensajeTipo('error');
      setMensaje('Por favor, complete todos los campos.');
      return;
    }

    const horarioOcupado = reservas.some(
      (r) => r.fecha === fecha && r.hora === hora
    );

    if (horarioOcupado) {
      setMensajeTipo('error');
      setMensaje('Este horario ya está ocupado. Por favor elige otro.');
      return;
    }

    const nuevaReserva = {
      id: uuidv4(),
      cliente,
      fecha,
      hora,
      estado: 'Pendiente',
      mensaje: ''
    };

    setReservas([...reservas, nuevaReserva]);
    setCliente('');
    setFecha('');
    setHora('');
    setMensajeTipo('exito');
    setMensaje('Reserva creada exitosamente.');
  };

  const cancelarReserva = (id) => {
    const actualizadas = reservas.map((r) =>
      r.id === id
        ? { ...r, estado: 'Cancelada', mensaje: 'Cancelada por el cliente.' }
        : r
    );
    setReservas(actualizadas);
  };

  useEffect(() => {
    if (mensaje) {
      const timer = setTimeout(() => {
        setMensaje('');
        setMensajeTipo('');
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [mensaje]);

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
      <button onClick={crearReserva} disabled={!cliente || !fecha || !hora}>
        Crear Reserva
      </button>

      {mensaje && (
        <p style={{ color: mensajeTipo === 'error' ? 'red' : 'green', marginTop: '10px' }}>
          {mensaje}
        </p>
      )}

      <h3 style={{ marginTop: '30px' }}>Mis Reservas</h3>
      <ul>
        {reservas
          .filter((r) => r.cliente === cliente)
          .map((res) => (
            <li key={res.id} style={{ marginBottom: '15px' }}>
              <strong>{res.fecha} - {res.hora}</strong> | Estado: <strong>{res.estado}</strong>
              {res.mensaje && (
                <div style={{ fontStyle: 'italic', color: '#555' }}>
                  Mensaje: {res.mensaje}
                </div>
              )}
              {res.estado === 'Pendiente' ? (
                <button
                  onClick={() => cancelarReserva(res.id)}
                  style={{ marginTop: '5px' }}
                >
                  Cancelar Reserva
                </button>
              ) : (
                <div style={{ marginTop: '5px', fontStyle: 'italic', color: '#777' }}>
                  Para modificar esta reserva, contacte al restaurante o al recepcionista.
                </div>
              )}
            </li>
          ))}
      </ul>
    </div>
  );
}

export default ClientePanel;
