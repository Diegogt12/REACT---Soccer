import { useContext, useEffect } from "react";
import { EquiposContext } from "../context/equiposContext";
import { useParams } from "react-router-dom";

export const usePlantillaHooks = () => {
    const { plantilla, cargarPlantillaHook, cambioplant } = useContext(EquiposContext);
    const { id_plantilla } = useParams();
    
    
    useEffect(() => {
        cargarPlantillaHook(id_plantilla);
    }, [cambioplant, cargarPlantillaHook]);

    return { plantilla };
};