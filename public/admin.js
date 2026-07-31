/*
==================================
 LUNARA ADMIN PANEL
 Creado por Luis González
==================================
*/

const token = localStorage.getItem("token");

if (!token) {

    location.href = "login.html";

}

const tbody = document.querySelector("#usersTable tbody");

async function loadDashboard() {

    try {

        const response = await fetch("/api/admin/dashboard", {

            headers: {

                Authorization: `Bearer ${token}`

            }

        });

        const data = await response.json();

        document.getElementById("totalUsers").textContent =
            data.totalUsers || 0;

        document.getElementById("totalVideos").textContent =
            data.totalVideos || 0;

        document.getElementById("premiumUsers").textContent =
            data.premiumUsers || 0;

        document.getElementById("income").textContent =
            "$" + (data.income || 0);

    } catch (err) {

        console.error(err);

    }

}

async function loadUsers() {

    try {

        const response = await fetch("/api/admin/users", {

            headers: {

                Authorization: `Bearer ${token}`

            }

        });

        const users = await response.json();

        tbody.innerHTML = "";

        users.forEach(user => {

            tbody.innerHTML += `

            <tr>

                <td>${user.username}</td>

                <td>${user.email}</td>

                <td>${user.plan}</td>

                <td>${user.status}</td>

                <td>

                    <button onclick="changePlan('${user._id}')">

                        Premium

                    </button>

                    <button onclick="suspendUser('${user._id}')">

                        Suspender

                    </button>

                    <button onclick="deleteUser('${user._id}')">

                        Eliminar

                    </button>

                </td>

            </tr>

            `;

        });

    } catch (err) {

        console.error(err);

    }

}

async function changePlan(id) {

    await fetch(`/api/admin/users/${id}/premium`, {

        method: "PUT",

        headers: {

            Authorization: `Bearer ${token}`

        }

    });

    loadUsers();

}

async function suspendUser(id) {

    await fetch(`/api/admin/users/${id}/suspend`, {

        method: "PUT",

        headers: {

            Authorization: `Bearer ${token}`

        }

    });

    loadUsers();

}

async function deleteUser(id) {

    if (!confirm("¿Eliminar este usuario?")) return;

    await fetch(`/api/admin/users/${id}`, {

        method: "DELETE",

        headers: {

            Authorization: `Bearer ${token}`

        }

    });

    loadUsers();

}

loadDashboard();
loadUsers();