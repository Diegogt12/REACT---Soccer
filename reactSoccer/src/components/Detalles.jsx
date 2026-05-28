import { useContext } from "react";
import { EquiposContext } from "../context/equiposContext";
import "./Detalles.css";
import { useNavigate } from "react-router-dom";

const Detalles = () => {
  const { equipo, cambioplant, setCambioplant } = useContext(EquiposContext);
  const navigate = useNavigate();

  const equipoId = equipo.id_equipo;
  
const handlePlantillaClick = () => {
  setCambioplant(equipoId);
  navigate(`/home/${equipoId}/plantilla/${equipoId}`);
};
  return (
    <section className="equipo">
      <div className="equipodetail">
        <h2>{equipo.nombre}</h2>

        <hr className="separador" />

        <img
          src={equipo.escudo}
          alt="Foto del equipo"
          className="equipodetail__img"
        />

        <div className="equipo__links">
          <a href={equipo.enlace1} className="equipo__link" target="_blank" rel="noreferrer">as</a>
          <a href={equipo.enlace2} className="equipo__link" target="_blank" rel="noreferrer">marca</a>
          <button onClick={handlePlantillaClick} className="equipo__link">plantilla</button>
        </div>
      </div>
    </section>
  );
};

export default Detalles;