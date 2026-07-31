/*
==================================
 LUNARA PROFILE SCRIPT
 Creado por Luis González
==================================
*/

const token = localStorage.getItem("lunara_token");

// Verificar sesión
if (!token) {
    window.location.href = "login.html";
}

// Cargar perfil
async function loadProfile() {

    try {

        const response = await fetch("/api/auth/profile", {

            method: "GET",

            headers: {
                "Authorization": `Bearer ${token}`
            }

        });

        const data = await response.json();

        if (!data.success) {

            localStorage.removeItem("lunara_token");

            return window.location.href = "login.html";

        }

        document.getElementById("username").textContent =
            data.user.username;

        document.getElementById("email").textContent =
            data.user.email;

        document.getElementById("plan").textContent =
            data.user.plan || "Free";

        document.getElementById("created").textContent =
            data.user.created_at || "--";

    } catch (error) {

        console.error(error);

        alert("No se pudo cargar el perfil.");

    }

}

// Cerrar sesión
document
.getElementById("logout")
.addEventListener("click", () => {

    localStorage.removeItem("lunara_token");

    window.location.href = "login.html";

});

// Ejecutar
loadProfile();