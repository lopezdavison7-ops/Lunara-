const ffmpeg = require("fluent-ffmpeg");
const path = require("path");
const fs = require("fs");

/*
==================================
 LUNARA VIDEO GENERATOR
 Creado por Luis González
==================================
*/

async function generateVideo(project) {

    return new Promise((resolve, reject) => {

        const uploadsDir = path.join(__dirname, "../uploads");
        const outputDir = path.join(__dirname, "../videos");

        if (!fs.existsSync(outputDir)) {

            fs.mkdirSync(outputDir, {
                recursive: true
            });

        }

        const outputFile = path.join(

            outputDir,

            `${project._id}.mp4`

        );

        if (!project.photos || project.photos.length === 0) {

            return reject(

                new Error("El proyecto no contiene imágenes.")

            );

        }

        ffmpeg()

            .input(project.photos[0])

            .loop(5)

            .videoCodec("libx264")

            .size("1080x1920")

            .fps(30)

            .outputOptions([

                "-pix_fmt yuv420p"

            ])

            .save(outputFile)

            .on("end", () => {

                resolve(outputFile);

            })

            .on("error", (err) => {

                reject(err);

            });

    });

}

module.exports = {

    generateVideo

};