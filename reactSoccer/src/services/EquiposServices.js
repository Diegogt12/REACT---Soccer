
export const cargarEquipos = async () => {    
    const res = await fetch("http://localhost:3000/soccer/teams");
    return await res.json();
};

export const cargarPlantilla = async (id_equipo) =>{
    const res = await fetch('http://localhost:3000/soccer/players/'+id_equipo);
    return await res.json()
}