const express = require("express");

const router = express.Router();

/*
==================================
 LUNARA API
 Creado por Luis González
==================================
*/

// Página principal de la API
router.get("/", (req, res) => {
    res.json({
        success: true,
        project: "Lunara",
        version: "1.0.0",
        status: "online",
        developer: "Luis González"
    });
});

module.exports = router;