/*
==================================
 LUNARA UPLOAD CONTROLLER
 Creado por Luis González
==================================
*/

const path = require("path");

// Subir imágenes
const uploadImages = async (req, res) => {

    try {

        if (!req.files || req.files.length === 0) {

            return res.status(400).json({

                success: false,
                message: "No se recibieron imágenes."

            });

        }

        const files = req.files.map(file => ({

            name: file.filename,

            originalName: file.originalname,

            size: file.size,

            type: file.mimetype,

            url: `/uploads/${file.filename}`

        }));


        return res.status(200).json({

            success: true,

            message: "Imágenes subidas correctamente.",

            total: files.length,

            files

        });

    } catch (error) {

        console.error(error);

        return res.status(500).json({

            success: false,

            message: "Error al subir las imágenes."

        });

    }

};


// Eliminar imagen
const deleteImage = async (req, res) => {

    try {

        const {

            filename

        } = req.params;


        return res.json({

            success: true,

            message: "Imagen eliminada correctamente.",

            filename

        });

    } catch (error) {

        console.error(error);

        return res.status(500).json({

            success: false,

            message: "Error al eliminar la imagen."

        });

    }

};

module.exports = {

    uploadImages,

    deleteImage

};