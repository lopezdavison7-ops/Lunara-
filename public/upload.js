/*
==================================
 LUNARA UPLOAD SCRIPT
 Creado por Luis González
==================================
*/

const uploadForm = document.getElementById("uploadForm");
const imageInput = document.getElementById("images");
const gallery = document.getElementById("gallery");

let selectedImages = [];

// Mostrar vista previa
imageInput.addEventListener("change", () => {

    gallery.innerHTML = "";

    selectedImages = Array.from(imageInput.files);

    if (selectedImages.length === 0) {

        gallery.innerHTML = `
            <p>No has seleccionado imágenes.</p>
        `;

        return;

    }

    selectedImages.forEach((file, index) => {

        const reader = new FileReader();

        reader.onload = (event) => {

            const card = document.createElement("div");

            card.className = "gallery-item";

            card.innerHTML = `

                <img
                    src="${event.target.result}"
                    alt="Imagen ${index + 1}"
                >

                <p>${file.name}</p>

            `;

            gallery.appendChild(card);

        };

        reader.readAsDataURL(file);

    });

});

// Enviar imágenes
uploadForm.addEventListener("submit", async (event) => {

    event.preventDefault();

    if (selectedImages.length === 0) {

        return alert("Selecciona al menos una imagen.");

    }

    const token = localStorage.getItem("lunara_token");

    const formData = new FormData();

    selectedImages.forEach((image) => {

        formData.append(
            "images",
            image
        );

    });

    try {

        const response = await fetch(

            "/api/upload",

            {

                method: "POST",

                headers: {

                    Authorization: `Bearer ${token}`

                },

                body: formData

            }

        );

        const data = await response.json();

        if (data.success) {

            alert("✅ Imágenes subidas correctamente.");

        } else {

            alert(data.message);

        }

    } catch (error) {

        console.error(error);

        alert("Error al subir las imágenes.");

    }

});