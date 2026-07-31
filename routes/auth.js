const express = require("express");

const {
    register,
    login,
    profile
} = require("../controllers/authController");

const router = express.Router();

/*
==================================
 LUNARA AUTH ROUTES
 Creado por Luis González
==================================
*/

// Registro
router.post("/register", register);

// Inicio de sesión
router.post("/login", login);

// Perfil del usuario
router.get("/profile", profile);

module.exports = router;