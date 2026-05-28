import { createContext, useState } from "react";
import { cargarEquipos, cargarPlantilla } from "../services/EquiposServices";

// eslint-disable-next-line react-refresh/only-export-components
export const EquiposContext = createContext();

export const EquiposProvider = ({ children }) => {

    const [equipos, setEquipos] = useState([])
    const [plantilla, setPlantilla] = useState([])
    const [equipo, setEquipo] = useState();
    const [cambioplant, setCambioplant] = useState();

    const cargarEquiposHook = async () => {
        const res = await cargarEquipos();
        setEquipos(res);
        return res;
    }
    const cargarPlantillaHook = async (id_equipo) => {
        const res = await cargarPlantilla(id_equipo);
        setPlantilla(res);
        return res;
    }
    return (
        <EquiposContext.Provider value={{ equipos, setEquipos, plantilla, setPlantilla, equipo, setEquipo, cambioplant, setCambioplant, cargarEquiposHook, cargarPlantillaHook }}>
            {children}
        </EquiposContext.Provider>
    )
}
