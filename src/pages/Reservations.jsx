import { useState } from "react";

function Reservations() {
  const [nombre, setNombre] = useState("");
  const [fecha, setFecha] = useState("");
  const [personas, setPersonas] = useState("");

  const reservar = (e) => {
    e.preventDefault();

    if (!nombre || !fecha || !personas) {
      alert("Por favor complete todos los campos");
      return;
    }

    alert(`Reserva realizada para ${nombre}`);
    
    setNombre("");
    setFecha("");
    setPersonas("");
  };

  return (
    <section id="reservas">
      <h2>Reserva tu Mesa</h2>

      <form onSubmit={reservar}>
        <input
          type="text"
          placeholder="Nombre Completo"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />

        <input
          type="date"
          value={fecha}
          onChange={(e) => setFecha(e.target.value)}
        />

        <input
          type="number"
          placeholder="Número de Personas"
          value={personas}
          onChange={(e) => setPersonas(e.target.value)}
        />

        <button type="submit">
          Reservar
        </button>
      </form>
    </section>
  );
}

export default Reservations;