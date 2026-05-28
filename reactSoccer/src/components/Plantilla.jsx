import "./Plantilla.css";
import { useContext } from "react";
import { EquiposContext } from "../context/equiposContext";
import { usePlantillaHooks } from "../hooks/PlantillaHook";
const Plantilla = () => {
const { plantilla } = usePlantillaHooks();    


  if (!plantilla || plantilla.length === 0) {
    return <p>No hay datos</p>;
  }
    return (
        <div className="plantilla">
            {plantilla.map((plant, index) => (
                <a
                    href={plant.enlace}
                    className="jugador__link"
                    key={index}
                    target="_blank"
                >
                    <article className="jugador">
                        <div className="jugador__pos">
                            <span>{plant.posicion}</span>
                            <span className="jugador__numero">
                                {plant.numero === "Número no encontrado" ? 0 : plant.numero}
                            </span>
                        </div>

                        <img
                            src={plant.imagen}
                            alt={`Foto de ${plant.nombre}`}
                            className="jugador__img"
                        />

                        <h3 className="jugador__nombre">{plant.nombre}</h3>
                    </article>
                </a>
            ))}
        </div>
    );
};

export default Plantilla;