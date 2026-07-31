/*
==================================
 LUNARA EDITOR
 Creado por Luis González
==================================
*/

const canvas = document.querySelector(".canvas");

const imageInput = document.getElementById("imageInput");

const musicInput = document.getElementById("musicInput");

const textInput = document.getElementById("textInput");

const previewImage = document.getElementById("previewImage");

const previewText = document.getElementById("previewText");

const previewMusic = document.getElementById("previewMusic");

// Subir imagen
imageInput.addEventListener("change", (event) => {

    const file = event.target.files[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onload = function(e){

        previewImage.src = e.target.result;

    }

    reader.readAsDataURL(file);

});

// Cambiar texto
textInput.addEventListener("input", () => {

    previewText.textContent =

        textInput.value || "Escribe un mensaje";

});

// Vista previa de música
musicInput.addEventListener("change",(event)=>{

    const file = event.target.files[0];

    if(!file) return;

    previewMusic.src = URL.createObjectURL(file);

});

// Descargar proyecto (temporal)
function saveProject(){

    alert("Proyecto guardado correctamente.");

}

// Generar video
async function generateVideo(){

    alert("Generando video...");

    // Aquí después conectaremos
    // con la API

}