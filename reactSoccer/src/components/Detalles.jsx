import { useContext } from "react";
import { EquiposContext } from "../context/equiposContext";
import "./Detalles.css"

const Detalles = () => {
    const{equipo} = useContext(EquiposContext);
  return (
    <section className="equipo">
      <div className="equipodetail">
            <h2>{equipo.nombre || equipo.name}</h2>
        
        <hr className="separador" />

        <img 
          src={equipo.escudo} 
          alt="Foto del equipo" 
          className="equipodetail__img" 
        />

        <div className="equipo__links">
          <a href="#" className="equipo__link">as</a>
          <a href="#" className="equipo__link">marca</a>
          <a href="#" className="equipo__link">plantilla</a>
        </div>
      </div>
    </section>
  );
};

export default Detalles;


