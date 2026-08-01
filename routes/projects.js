const express = require("express");
const router = express.Router();

const Project = require("../models/Project");
const auth = require("../middlewares/auth");

/*
==================================
 LUNARA PROJECT ROUTES
 Creado por Luis González
==================================
*/

// Obtener todos los proyectos del usuario
router.get("/", auth, async (req, res) => {

    try {

        const projects = await Project
            .find({ user: req.user.id })
            .sort({ createdAt: -1 });

        res.json(projects);

    } catch (error) {

        res.status(500).json({
            message: "Error al obtener los proyectos."
        });

    }

});

// Obtener un proyecto
router.get("/:id", auth, async (req, res) => {

    try {

        const project = await Project.findOne({

            _id: req.params.id,

            user: req.user.id

        });

        if (!project) {

            return res.status(404).json({

                message: "Proyecto no encontrado."

            });

        }

        res.json(project);

    } catch (error) {

        res.status(500).json({

            message: "Error al obtener el proyecto."

        });

    }

});

// Crear proyecto
router.post("/", auth, async (req, res) => {

    try {

        const project = await Project.create({

            user: req.user.id,

            title: req.body.title,

            template: req.body.template,

            photos: req.body.photos || [],

            music: req.body.music || "",

            message: req.body.message || ""

        });

        res.status(201).json(project);

    } catch (error) {

        res.status(500).json({

            message: "No se pudo crear el proyecto."

        });

    }

});

// Actualizar proyecto
router.put("/:id", auth, async (req, res) => {

    try {

        const project = await Project.findOneAndUpdate(

            {

                _id: req.params.id,

                user: req.user.id

            },

            req.body,

            {

                new: true

            }

        );

        res.json(project);

    } catch (error) {

        res.status(500).json({

            message: "No se pudo actualizar."

        });

    }

});

// Eliminar proyecto
router.delete("/:id", auth, async (req, res) => {

    try {

        await Project.findOneAndDelete({

            _id: req.params.id,

            user: req.user.id

        });

        res.json({

            message: "Proyecto eliminado."

        });

    } catch (error) {

        res.status(500).json({

            message: "No se pudo eliminar."

        });

    }

});

module.exports = router;