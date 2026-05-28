import { useContext, useEffect } from "react";
import { EquiposContext } from "../context/equiposContext";

export const useEscudosHooks = () => {
    const { equipos, setEquipos, cargarEquiposHook } = useContext(EquiposContext);

    useEffect(() => {
        cargarEquiposHook();
    }, []);

    return { equipos };
};