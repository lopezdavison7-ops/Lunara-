/*
==================================
 LUNARA VIDEO SERVICE
 Creado por Luis González
==================================
*/

class VideoService {

    constructor() {

        this.supportedFormats = [
            "mp4",
            "webm"
        ];

    }

    async create(project) {

        return {
            success: true,
            message: "Generación de video iniciará próximamente.",
            project
        };

    }

    async preview(project) {

        return {
            success: true,
            message: "Vista previa disponible próximamente.",
            project
        };

    }

    async download(videoId) {

        return {
            success: true,
            message: "Descarga disponible próximamente.",
            videoId
        };

    }

    async delete(videoId) {

        return {
            success: true,
            message: "Video eliminado correctamente.",
            videoId
        };

    }

}

module.exports = new VideoService();