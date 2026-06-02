function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-Primary">
      <div className="container">
        <a className="navbar-brand" href="#inicio">
          🍽️ SABOR GOURMET LA CASA DE ARONI
        </a>

        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <a className="nav-link" href="#inicio">INICIO</a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#menu">MENÚ</a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#reservas">RESERVAS</a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#contacto">CONTACTO</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;