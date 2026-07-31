const express = require("express");

const router = express.Router();

const authRoutes = require("./auth");

/*
==================================
 LUNARA API
 Creado por Luis González
==================================
*/

// Estado de la API
router.get("/", (req, res) => {

    res.json({
        success: true,
        project: "Lunara",
        version: "1.0.0",
        status: "online"
    });

});

// Autenticación
router.use("/auth", authRoutes);

module.exports = router;