const db = require("../database/database");

/*
==================================
 LUNARA PROJECT CONTROLLER
 Creado por Luis González
==================================
*/

// Crear proyecto
const createProject = (req, res) => {

    const {
        title,
        template
    } = req.body;

    const userId = req.user.id;

    if (!title || !template) {

        return res.status(400).json({
            success: false,
            message: "Completa todos los campos."
        });

    }

    db.run(

        `
        INSERT INTO projects
        (user_id, title, template)
        VALUES (?, ?, ?)
        `,

        [
            userId,
            title,
            template
        ],

        function (error) {

            if (error) {

                return res.status(500).json({
                    success: false,
                    message: "No se pudo crear el proyecto."
                });

            }

            res.status(201).json({
                success: true,
                message: "Proyecto creado correctamente.",
                projectId: this.lastID
            });

        }

    );

};

// Listar proyectos
const getProjects = (req, res) => {

    db.all(

        `
        SELECT *
        FROM projects
        WHERE user_id = ?
        ORDER BY id DESC
        `,

        [
            req.user.id
        ],

        (error, rows) => {

            if (error) {

                return res.status(500).json({
                    success: false,
                    message: "Error al obtener proyectos."
                });

            }

            res.json({
                success: true,
                projects: rows
            });

        }

    );

};

module.exports = {
    createProject,
    getProjects
};