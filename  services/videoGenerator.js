/*
==================================
 LUNARA VIDEO GENERATOR
 Creado por Luis González
==================================
*/

const ffmpeg = require("fluent-ffmpeg");
const path = require("path");
const fs = require("fs");

class VideoGenerator {

    constructor() {

        this.outputFolder = path.join(
            __dirname,
            "..",
            "videos"
        );

        if (!fs.existsSync(this.outputFolder)) {

            fs.mkdirSync(
                this.outputFolder,
                {
                    recursive: true
                }
            );

        }

    }

    async generate({

        images = [],

        music = null,

        output = "video.mp4"

    }) {

        return new Promise((resolve, reject) => {

            if (images.length === 0) {

                return reject(
                    new Error(
                        "No hay imágenes para generar el video."
                    )
                );

            }

            const outputPath = path.join(
                this.outputFolder,
                output
            );

            let command = ffmpeg();

            images.forEach(image => {

                command.input(image);

            });

            if (music) {

                command.input(music);

            }

            command

            .videoCodec("libx264")

            .audioCodec("aac")

            .outputOptions([

                "-pix_fmt yuv420p",

                "-shortest"

            ])

            .save(outputPath)

            .on("end", () => {

                resolve({

                    success: true,

                    path: outputPath

                });

            })

            .on("error", (error) => {

                reject(error);

            });

        });

    }

}

module.exports = new VideoGenerator();