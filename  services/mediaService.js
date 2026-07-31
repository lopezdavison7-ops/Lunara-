/*
==================================
 LUNARA MEDIA SERVICE
 Creado por Luis González
==================================
*/

const fs = require("fs");
const path = require("path");

class MediaService {

    constructor() {

        this.uploadPath = path.join(
            __dirname,
            "..",
            "uploads"
        );

    }

    // Obtener imágenes de un proyecto
    async getImages(projectId) {

        return [];

    }

    // Obtener música
    async getMusic(projectId) {

        return null;

    }

    // Guardar música
    async saveMusic(file) {

        return {

            success: true,

            filename: file.filename,

            originalName: file.originalname,

            size: file.size

        };

    }

    // Eliminar archivo
    async deleteFile(filename) {

        try {

            const filePath = path.join(
                this.uploadPath,
                filename
            );

            if (fs.existsSync(filePath)) {

                fs.unlinkSync(filePath);

            }

            return {

                success: true

            };

        } catch (error) {

            return {

                success: false,

                error

            };

        }

    }

}

module.exports = new MediaService();