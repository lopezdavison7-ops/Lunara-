/*
==================================
 LUNARA DASHBOARD SCRIPT
 Creado por Luis González
==================================
*/

const token = localStorage.getItem("lunara_token");


// Verificar sesión
if (!token) {

    window.location.href = "login.html";

}


// Cargar información del usuario
async function loadProfile() {

    try {

        const response = await fetch("/api/auth/profile", {

            method: "GET",

            headers: {
                "Authorization": `Bearer ${token}`
            }

        });


        const data = await response.json();


        if (data.success) {

            document.getElementById("welcome").textContent =
                `Hola, ${data.user.username} 👋`;

        }


    } catch (error) {

        console.error(error);

    }

}



// Cargar proyectos
async function loadProjects() {

    const projectsContainer =
        document.getElementById("projects");


    try {

        const response = await fetch("/api/projects", {

            method: "GET",

            headers: {
                "Authorization": `Bearer ${token}`
            }

        });


        const data = await response.json();


        if (data.success && data.projects.length > 0) {


            projectsContainer.innerHTML = "";


            data.projects.forEach(project => {


                const card = document.createElement("div");


                card.className = "project-item";


                card.innerHTML = `

                    <h3>
                        ${project.title}
                    </h3>

                    <p>
                        Plantilla: ${project.template}
                    </p>

                `;


                projectsContainer.appendChild(card);


            });


        } else {


            projectsContainer.innerHTML = `

                <p>
                    Todavía no tienes proyectos creados.
                </p>

            `;


        }


    } catch (error) {

        console.error(error);

    }

}



// Cerrar sesión
document
.getElementById("logout")
.addEventListener("click", () => {


    localStorage.removeItem(
        "lunara_token"
    );


    window.location.href = "login.html";


});



// Ejecutar
loadProfile();

loadProjects();