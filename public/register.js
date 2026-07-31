/*
==================================
 LUNARA REGISTER SCRIPT
 Creado por Luis González
==================================
*/

const registerForm = document.getElementById("registerForm");


registerForm.addEventListener("submit", async (event) => {

    event.preventDefault();


    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;


    try {

        const response = await fetch("/api/auth/register", {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                username,
                email,
                password
            })

        });


        const data = await response.json();


        if (data.success) {

            alert("✅ Cuenta creada correctamente.");

            window.location.href = "login.html";

        } else {

            alert("❌ " + data.message);

        }


    } catch (error) {

        console.error(error);

        alert("Error de conexión con el servidor.");

    }

});