const express = require("express");
const multer = require("multer");
const path = require("path");

const authMiddleware = require("../middlewares/authMiddleware");
const mediaService = require("../services/mediaService");

const router = express.Router();

/*
==================================
 LUNARA MEDIA ROUTES
 Creado por Luis González
==================================
*/

const storage = multer.diskStorage({

    destination(req, file, callback) {

        callback(null, "uploads/music");

    },

    filename(req, file, callback) {

        const filename =
            Date.now() +
            "-" +
            Math.round(Math.random() * 1E9) +
            path.extname(file.originalname);

        callback(null, filename);

    }

});

const upload = multer({

    storage,

    limits: {

        fileSize: 20 * 1024 * 1024

    },

    fileFilter(req, file, callback) {

        if (

            file.mimetype.startsWith("audio/")

        ) {

            callback(null, true);

        } else {

            callback(
                new Error(
                    "Solo se permiten archivos de audio."
                )
            );

        }

    }

});

// Subir música
router.post(

    "/music",

    authMiddleware,

    upload.single("music"),

    async (req, res) => {

        const result =
            await mediaService.saveMusic(
                req.file
            );

        res.json(result);

    }

);

// Obtener música
router.get(

    "/music/:projectId",

    authMiddleware,

    async (req, res) => {

        const music =
            await mediaService.getMusic(
                req.params.projectId
            );

        res.json({

            success: true,

            music

        });

    }

);

module.exports = router;