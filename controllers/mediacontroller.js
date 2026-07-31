/*
==================================
 LUNARA MEDIA CONTROLLER
 Creado por Luis González
==================================
*/

const mediaService = require("../services/mediaService");

// Subir música
const uploadMusic = async (req, res) => {

    try {

        if (!req.file) {

            return res.status(400).json({

                success: false,

                message: "No se recibió ningún archivo."

            });

        }

        const result = await mediaService.saveMusic(req.file);

        return res.status(200).json({

            success: true,

            message: "Música subida correctamente.",

            music: result

        });

    } catch (error) {

        console.error(error);

        return res.status(500).json({

            success: false,

            message: "Error al subir la música."

        });

    }

};


// Obtener música
const getMusic = async (req, res) => {

    try {

        const music = await mediaService.getMusic(

            req.params.projectId

        );

        return res.json({

            success: true,

            music

        });

    } catch (error) {

        console.error(error);

        return res.status(500).json({

            success: false,

            message: "No se pudo obtener la música."

        });

    }

};


// Eliminar música
const deleteMusic = async (req, res) => {

    try {

        await mediaService.deleteFile(

            req.params.filename

        );

        return res.json({

            success: true,

            message: "Archivo eliminado correctamente."

        });

    } catch (error) {

        console.error(error);

        return res.status(500).json({

            success: false,

            message: "No se pudo eliminar el archivo."

        });

    }

};

module.exports = {

    uploadMusic,

    getMusic,

    deleteMusic

};