

export const iniciarSesion = async (data) => {
    const datajson = JSON.stringify(data)
    
    const res = await fetch("http://localhost:3000/soccer/login", {
        method: "POST",
        body: datajson,
        headers: {
            "Content-Type": "application/json"
      },
    });
    return await res.json();
};