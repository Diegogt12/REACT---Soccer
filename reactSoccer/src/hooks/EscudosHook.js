import { useContext, useEffect } from "react"
import { EquiposContext } from "../context/equiposContext"

// Hook para cargar y exponer los equipos (incluye escudos)
export const EscudosHooks = () => {
    const { equipos, setEquipos, cargarEquiposHook } = useContext(EquiposContext);

    useEffect(() => {
        const load = async () => {
            try {
                await cargarEquiposHook();

            } catch (err) {
                console.error('Error cargando equipos', err);
            }
        };
        load();
    }, [cargarEquiposHook]);

    return { equipos };
}

