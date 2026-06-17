import { obtenerPlatos } from "../services/menuService";

function Menu() {
  const platos = obtenerPlatos();

  return (
    <section id="menu">
      <h2>Nuestro Menú</h2>

      <div className="menu-container">
        {platos.map((plato) => (
          <div className="card" key={plato.id}>
            <img src={plato.imagen} alt={plato.nombre} />
            <h3>{plato.nombre}</h3>
            <p>{plato.precio}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Menu;