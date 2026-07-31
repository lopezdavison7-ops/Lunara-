/*
==================================
 LUNARA LOGIN SCRIPT
 Creado por Luis González
==================================
*/

const loginForm = document.getElementById("loginForm");


loginForm.addEventListener("submit", async (event) => {

    event.preventDefault();


    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;


    try {

        const response = await fetch("/api/auth/login", {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                email,
                password
            })

        });


        const data = await response.json();


        if (data.success) {

            // Guardar sesión
            localStorage.setItem(
                "lunara_token",
                data.token
            );


            alert("✅ Bienvenido a Lunara.");

            window.location.href = "dashboard.html";


        } else {

            alert("❌ " + data.message);

        }


    } catch (error) {

        console.error(error);

        alert("Error de conexión con el servidor.");

    }

});