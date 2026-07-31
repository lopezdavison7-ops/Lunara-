/*
==================================
 LUNARA EDITOR SCRIPT
 Creado por Luis González
==================================
*/

const token = localStorage.getItem("lunara_token");


// Si no hay sesión
if (!token) {

    window.location.href = "login.html";

}


// Elementos
const titleInput = document.getElementById("title");
const templateInput = document.getElementById("template");
const messageInput = document.getElementById("message");

const imageInput = document.getElementById("image");
const musicInput = document.getElementById("music");

const preview = document.getElementById("preview");

const createButton = document.getElementById("createProject");



// Vista previa en vivo
function updatePreview() {


    preview.innerHTML = `

        <div class="preview-content">

            <h2>
                ${titleInput.value || "Mi detalle especial"}
            </h2>


            <p>
                ${messageInput.value || "Escribe tu mensaje..."}
            </p>


            <small>
                Plantilla:
                ${templateInput.value}
            </small>

        </div>

    `;


}



// Eventos
titleInput.addEventListener(
    "input",
    updatePreview
);


messageInput.addEventListener(
    "input",
    updatePreview
);


templateInput.addEventListener(
    "change",
    updatePreview
);



// Crear proyecto
createButton.addEventListener(
"click",
async () => {


    const title = titleInput.value;
    const template = templateInput.value;


    if (!title) {

        alert(
            "Escribe un título para tu detalle."
        );

        return;

    }



    try {


        const response = await fetch(
            "/api/projects",
            {

                method: "POST",

                headers: {

                    "Content-Type": "application/json",

                    "Authorization":
                    `Bearer ${token}`

                },


                body: JSON.stringify({

                    title,
                    template

                })


            }
        );



        const data = await response.json();



        if (data.success) {


            alert(
                "✨ Detalle creado correctamente."
            );


            window.location.href =
            "dashboard.html";


        } else {


            alert(
                data.message
            );


        }



    } catch(error) {


        console.error(error);


        alert(
            "Error al crear el proyecto."
        );


    }


});