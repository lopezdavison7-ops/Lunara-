const express = require("express");

const authMiddleware = require("../middlewares/authMiddleware");

const {
    createProject,
    getProjects
} = require("../controllers/projectController");

const router = express.Router();

/*
==================================
 LUNARA PROJECT ROUTES
 Creado por Luis González
==================================
*/

// Obtener todos los proyectos
router.get(
    "/",
    authMiddleware,
    getProjects
);

// Crear un proyecto
router.post(
    "/",
    authMiddleware,
    createProject
);

module.exports = router;