/*
==================================
 LUNARA RENDER SCRIPT
 Creado por Luis González
==================================
*/

const progressBar = document.getElementById("progressBar");
const progressText = document.getElementById("progressText");
const previewVideo = document.getElementById("previewVideo");
const downloadButton = document.getElementById("downloadButton");

let progress = 0;

function updateProgress() {

    progress += Math.floor(Math.random() * 8) + 3;

    if (progress > 100) {

        progress = 100;

    }

    progressBar.style.width = progress + "%";

    if (progress < 20) {

        progressText.textContent =
            "Preparando imágenes...";

    } else if (progress < 40) {

        progressText.textContent =
            "Aplicando animaciones...";

    } else if (progress < 60) {

        progressText.textContent =
            "Sincronizando música...";

    } else if (progress < 80) {

        progressText.textContent =
            "Renderizando video...";

    } else if (progress < 100) {

        progressText.textContent =
            "Finalizando...";

    } else {

        clearInterval(renderInterval);

        progressText.textContent =
            "✅ Video generado correctamente.";

        previewVideo.style.display = "block";

        previewVideo.src = "/videos/video.mp4";

        downloadButton.style.display = "inline-block";

        downloadButton.href =
            "/api/video/download/video.mp4";

    }

}

const renderInterval = setInterval(

    updateProgress,

    600

);