const express = require("express");
const router = express.Router();

const auth = require("../middlewares/auth");
const Project = require("../models/projects");


// Obtener todos los proyectos del usuario
router.get("/", auth, async (req, res) => {

    try {

        const projects = await Project.find({
            user: req.user.id
        }).sort({
            createdAt: -1
        });

        res.json(projects);

    } catch (error) {

        console.error(error);

        res.status(500).json({
            message: "Error obteniendo proyectos"
        });

    }

});


// Crear proyecto
router.post("/", auth, async (req, res) => {

    try {

        const project = await Project.create({

            user: req.user.id,

            title: req.body.title || "Nuevo proyecto",

            description: req.body.description || ""

        });

        res.json(project);

    } catch (error) {

        console.error(error);

        res.status(500).json({
            message: "Error creando proyecto"
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
                message: "Proyecto no encontrado"
            });

        }

        res.json(project);

    } catch (error) {

        console.error(error);

        res.status(500).json({
            message: "Error"
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

        console.error(error);

        res.status(500).json({
            message: "Error actualizando proyecto"
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

            message: "Proyecto eliminado"

        });

    } catch (error) {

        console.error(error);

        res.status(500).json({

            message: "Error eliminando proyecto"

        });

    }

});

module.exports = router;