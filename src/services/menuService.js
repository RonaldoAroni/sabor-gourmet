import lomo from "../assets/Lomo-saltado-.jpg";
import ceviche from "../assets/ceviche.jpg";
import aji from "../assets/Aji-de-Gallina.jpeg";

export const obtenerPlatos = () => {
  return [
    {
      id: 1,
      nombre: "Lomo Saltado",
      precio: "S/. 25.00",
      imagen: lomo,
    },
    {
      id: 2,
      nombre: "Ceviche",
      precio: "S/. 30.00",
      imagen: ceviche,
    },
    {
      id: 3,
      nombre: "Ají de Gallina",
      precio: "S/. 22.00",
      imagen: aji,
    },
  ];
};