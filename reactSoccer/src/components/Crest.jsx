import { useContext } from "react";
import { EquiposContext } from "../context/equiposContext";
import "./Crest.css"
import { useNavigate } from "react-router-dom";

const Crest = () =>{
    const { equipos, setEquipo } = useContext(EquiposContext);
    const navigate= useNavigate();


    const handleSelectEquipo = (equipo) => {
        setEquipo(equipo); 
        navigate(`/home/${equipo.id_equipo}`); 
    };

    return (
        <div className="crest" >
            {equipos && equipos.map(equipo => (
                <img className="crest__img" key={equipo.id_equipo} src={equipo.escudo} onClick={() => handleSelectEquipo(equipo)} />
            ))}
        </div>
    )
}

export default Crest