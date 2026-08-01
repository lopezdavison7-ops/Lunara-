const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },

    title: {
        type: String,
        default: "Nuevo proyecto"
    },

    description: {
        type: String,
        default: ""
    },

    photos: {
        type: [String],
        default: []
    },

    music: {
        type: String,
        default: ""
    },

    theme: {
        type: String,
        default: "classic"
    },

    status: {
        type: String,
        default: "draft"
    },

    video: {
        type: String,
        default: ""
    },

    createdAt: {
        type: Date,
        default: Date.now
    }

});

module.exports = mongoose.model("Project", projectSchema);