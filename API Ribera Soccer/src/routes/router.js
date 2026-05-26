const express = require("express");
const router = express.Router();

const usuarios = require("../data/usuarios.json");
const equipos = require("../data/equipos.json");
const jugadores = require("../data/jugadores.json");

// Login de usuario
router.post("/login", (req, res) => {
  try {
    const { email, password } = req.body;

    const userlogin = usuarios.find(
      (user) => user.password === password && user.email === email
    );

    if (!userlogin) {
      return res.status(404).json({
        success: false,
        message: "Usuario no encontrado",
      });
    }
    res.status(200).json(userlogin);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message || "Error interno del servidor",
    });
  }
});

// Todos equipos
router.get("/teams", (req, res) => res.send(equipos));

// Jugadores por equipo
router.get("/players/:id", (req, res) => {
  try {
    const { id } = req.params;

    const plantilla = jugadores.filter((jugador) => jugador.id_equipo === id);

    if (!plantilla) {
      return res.status(404).json({
        success: false,
        message: "Plantilla no encontrada",
      });
    }
    res.status(200).json(plantilla);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message || "Error interno del servidor",
    });
  }
});

module.exports = router;
