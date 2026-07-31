const express = require("express");

const authMiddleware = require("../middlewares/authMiddleware");

const {
    generateVideo,
    downloadVideo
} = require("../controllers/videoController");

const router = express.Router();

/*
==================================
 LUNARA VIDEO ROUTES
 Creado por Luis González
==================================
*/

// Generar video
router.post(
    "/generate",
    authMiddleware,
    generateVideo
);

// Descargar video
router.get(
    "/download/:filename",
    authMiddleware,
    downloadVideo
);

module.exports = router;