const express = require("express");

const authRoutes = require("./auth");

const router = express.Router();

/*
==================================
 LUNARA API
 Creado por Luis González
==================================
*/

// Estado de la API
router.get("/", (req, res) => {

    res.status(200).json({
        success: true,
        project: "Lunara",
        version: "1.0.0",
        status: "online",
        developer: "Luis González",
        message: "Bienvenido a la API de Lunara."
    });

});

// Autenticación
router.use("/auth", authRoutes);

// Ruta no encontrada
router.use((req, res) => {

    res.status(404).json({
        success: false,
        message: "Ruta de la API no encontrada."
    });

});

module.exports = router;