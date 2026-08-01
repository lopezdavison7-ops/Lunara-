/*
==================================
 LUNARA DASHBOARD
 Creado por Luis González
==================================
*/

const token = localStorage.getItem("token");


if(!token){

    window.location.href="login.html";

}


const username = document.getElementById("username");

const plan = document.getElementById("plan");

const projectsBox = document.getElementById("projects");


// Cargar usuario

async function loadUser(){

    try{

        const response = await fetch("/api/profile",{

            headers:{

                Authorization:`Bearer ${token}`

            }

        });


        const user = await response.json();


        if(username){

            username.textContent =
            user.username;

        }


        if(plan){

            plan.textContent =
            user.plan;

        }


    }catch(error){

        console.error(error);

    }

}


// Cargar proyectos

async function loadProjects(){

    try{


        const response = await fetch("/api/projects",{

            headers:{

                Authorization:`Bearer ${token}`

            }

        });


        const projects =
        await response.json();



        if(projectsBox){

            projectsBox.innerHTML="";


            projects.forEach(project=>{


                projectsBox.innerHTML += `

                <div class="card glass">

                    <h3>
                    ${project.title}
                    </h3>

                    <p>
                    Estado:
                    ${project.status}
                    </p>

                    <a class="btn"
                    href="editor.html?id=${project._id}">
                    Editar
                    </a>

                </div>

                `;


            });


        }


    }catch(error){

        console.error(error);

    }

}


// Cerrar sesión

function logout(){

    localStorage.removeItem("token");

    window.location.href="login.html";

}


loadUser();

loadProjects();