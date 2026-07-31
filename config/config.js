require("dotenv").config();

module.exports = {

    app: {
        name: process.env.APP_NAME || "Lunara",
        url: process.env.APP_URL || "http://localhost:3000",
        port: process.env.PORT || 3000,
        environment: process.env.NODE_ENV || "development"
    },

    jwt: {
        secret: process.env.JWT_SECRET,
        expiresIn: "7d"
    },

    upload: {
        maxFileSize: 50 * 1024 * 1024,
        imageTypes: [
            "image/jpeg",
            "image/png",
            "image/webp"
        ],
        audioTypes: [
            "audio/mpeg",
            "audio/mp3",
            "audio/wav"
        ],
        videoTypes: [
            "video/mp4",
            "video/webm"
        ]
    }

};