import lomo from "../assets/Lomo-saltado-.jpg";
import ceviche from "../assets/ceviche.jpg";
import aji from "../assets/Aji-de-Gallina.jpeg";

function Menu() {
  return (
    <section id="menu">
      <h2>Nuestro Menú</h2>

      <div className="menu-container">

        <div className="card">
          <img src={lomo} alt="Lomo Saltado" />
          <h3>Lomo Saltado</h3>
          <p>S/. 25.00</p>
        </div>

        <div className="card">
          <img src={ceviche} alt="Ceviche" />
          <h3>Ceviche</h3>
          <p>S/. 30.00</p>
        </div>

        <div className="card">
          <img src={aji} alt="Ají de Gallina" />
          <h3>Ají de Gallina</h3>
          <p>S/. 22.00</p>
        </div>

      </div>
    </section>
  );
}

export default Menu;