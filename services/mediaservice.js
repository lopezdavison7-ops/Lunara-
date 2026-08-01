/*
==================================
 LUNARA MEDIA SERVICE
 Creado por Luis González
==================================
*/

const path = require("path");
const fs = require("fs");

function getMedia(fileName) {
    return path.join(__dirname, "../uploads", fileName);
}

function mediaExists(fileName) {
    return fs.existsSync(getMedia(fileName));
}

module.exports = {
    getMedia,
    mediaExists
};