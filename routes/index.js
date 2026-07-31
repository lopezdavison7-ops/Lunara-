const express = require("express");

const authRoutes = require("./auth");
const projectRoutes = require("./project");

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
        developer: "Luis González",
        status: "online",
        timestamp: new Date().toISOString()
    });

});

// ===============================
// Autenticación
// ===============================

router.use("/auth", authRoutes);

// ===============================
// Proyectos
// ===============================

router.use("/projects", projectRoutes);

// ===============================
// Ruta no encontrada
// ===============================

router.use((req, res) => {

    res.status(404).json({
        success: false,
        message: "Endpoint no encontrado."
    });

});

module.exports = router;