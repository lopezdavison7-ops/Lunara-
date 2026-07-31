/*
==================================
 LUNARA PROFILE
 Creado por Luis González
==================================
*/

const avatar = document.getElementById("avatar");
const avatarInput = document.getElementById("avatarInput");

const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");

const saveButton = document.getElementById("saveProfile");

// Cargar usuario
async function loadProfile(){

    try{

        const token = localStorage.getItem("token");

        if(!token){

            location.href="login.html";

            return;

        }

        const response = await fetch("/api/profile",{

            headers:{

                Authorization:`Bearer ${token}`

            }

        });

        const data = await response.json();

        username.value = data.username || "";

        email.value = data.email || "";

        if(data.avatar){

            avatar.src=data.avatar;

        }

    }catch(error){

        console.error(error);

    }

}

loadProfile();

// Cambiar avatar

avatarInput.addEventListener("change",(e)=>{

    const file=e.target.files[0];

    if(!file) return;

    avatar.src=URL.createObjectURL(file);

});

// Guardar perfil

saveButton.addEventListener("click",async()=>{

    try{

        const token=localStorage.getItem("token");

        const response=await fetch("/api/profile",{

            method:"PUT",

            headers:{

                "Content-Type":"application/json",

                Authorization:`Bearer ${token}`

            },

            body:JSON.stringify({

                username:username.value,

                email:email.value,

                password:password.value

            })

        });

        const result=await response.json();

        alert(result.message);

    }catch(error){

        console.error(error);

        alert("No se pudo guardar el perfil.");

    }

});