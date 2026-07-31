const express = require("express");

const router = express.Router();

const {
    register
} = require("../controllers/authController");

/*
==================================
 LUNARA AUTH ROUTES
 Creado por Luis González
==================================
*/

// Registro
router.post("/register", register);

module.exports = router;