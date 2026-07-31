/*
==================================
 LUNARA VIDEO CONTROLLER
 Creado por Luis González
==================================
*/

const videoGenerator = require("../services/videoGenerator");

const generateVideo = async (req, res) => {

    try {

        const {

            images,

            music,

            output

        } = req.body;

        const result = await videoGenerator.generate({

            images,

            music,

            output

        });

        return res.status(200).json({

            success: true,

            message: "Video generado correctamente.",

            video: result

        });

    } catch (error) {

        console.error(error);

        return res.status(500).json({

            success: false,

            message: "No se pudo generar el video.",

            error: error.message

        });

    }

};

const downloadVideo = async (req, res) => {

    try {

        const {

            filename

        } = req.params;

        return res.download(

            `videos/${filename}`

        );

    } catch (error) {

        console.error(error);

        return res.status(500).json({

            success: false,

            message: "No se pudo descargar el video."

        });

    }

};

module.exports = {

    generateVideo,

    downloadVideo

};