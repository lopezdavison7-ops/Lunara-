const express = require("express");
const router = express.Router();

const User = require("../models/User");
const Project = require("../models/Project");

/*
==================================
 LUNARA ADMIN ROUTES
 Creado por Luis González
==================================
*/

// Dashboard
router.get("/dashboard", async (req, res) => {

    try {

        const totalUsers = await User.countDocuments();

        const premiumUsers = await User.countDocuments({
            plan: "premium"
        });

        const totalVideos = await Project.countDocuments();

        res.json({

            totalUsers,

            premiumUsers,

            totalVideos,

            income: premiumUsers * 5

        });

    } catch (err) {

        res.status(500).json({

            message: "Error al cargar dashboard"

        });

    }

});

// Todos los usuarios
router.get("/users", async (req, res) => {

    try {

        const users = await User.find().select("-password");

        res.json(users);

    } catch (err) {

        res.status(500).json({

            message: "Error"

        });

    }

});

// Pasar a Premium
router.put("/users/:id/premium", async (req, res) => {

    await User.findByIdAndUpdate(

        req.params.id,

        {

            plan: "premium"

        }

    );

    res.json({

        message: "Usuario actualizado"

    });

});

// Suspender
router.put("/users/:id/suspend", async (req, res) => {

    await User.findByIdAndUpdate(

        req.params.id,

        {

            status: "suspended"

        }

    );

    res.json({

        message: "Usuario suspendido"

    });

});

// Eliminar
router.delete("/users/:id", async (req, res) => {

    await User.findByIdAndDelete(

        req.params.id

    );

    res.json({

        message: "Usuario eliminado"

    });

});

module.exports = router;