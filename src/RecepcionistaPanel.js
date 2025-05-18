import React from 'react';

function RecepcionistaPanel({ reservas, setReservas }) {
  const confirmarReserva = (id) => {
    const actualizadas = reservas.map((r) =>
      r.id === id
        ? { ...r, estado: 'Confirmada', mensaje: 'Tu reserva ha sido confirmada por el recepcionista.' }
        : r
    );
    setReservas(actualizadas);
  };

  const cancelarReserva = (id) => {
    const actualizadas = reservas.map((r) =>
      r.id === id
        ? { ...r, estado: 'Cancelada', mensaje: 'Tu reserva ha sido cancelada por el recepcionista.' }
        : r
    );
    setReservas(actualizadas);
  };

  return (
    <div>
      <h2>Panel del Recepcionista</h2>
      {reservas.length === 0 ? (
        <p>No hay reservas registradas.</p>
      ) : (
        <ul>
          {reservas.map((res) => (
            <li key={res.id} style={{ marginBottom: '10px' }}>
              <strong>{res.cliente}</strong> — {res.fecha} a las {res.hora}  
              <br />
              Estado: <strong>{res.estado}</strong>
              {res.mensaje && <div><em>Mensaje: {res.mensaje}</em></div>}

              <div style={{ marginTop: '5px' }}>
                <button
                  onClick={() => confirmarReserva(res.id)}
                  disabled={res.estado !== 'Pendiente'}
                  style={{
                    marginRight: '10px',
                    backgroundColor: res.estado !== 'Pendiente' ? '#ccc' : 'green',
                    color: 'white',
                    border: 'none',
                    padding: '5px 10px',
                    borderRadius: '5px',
                    cursor: res.estado !== 'Pendiente' ? 'not-allowed' : 'pointer'
                  }}
                >
                  Confirmar
                </button>
                <button
                  onClick={() => cancelarReserva(res.id)}
                  disabled={res.estado === 'Cancelada'}
                  style={{
                    backgroundColor: res.estado === 'Cancelada' ? '#ccc' : 'red',
                    color: 'white',
                    border: 'none',
                    padding: '5px 10px',
                    borderRadius: '5px',
                    cursor: res.estado === 'Cancelada' ? 'not-allowed' : 'pointer'
                  }}
                >
                  Cancelar
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default RecepcionistaPanel;
