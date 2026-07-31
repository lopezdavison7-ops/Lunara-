/*
==================================
 LUNARA
 Creado por Luis González
==================================
*/

"use strict";

// Esperar a que cargue la página
document.addEventListener("DOMContentLoaded", () => {
    initializeApp();
});

function initializeApp() {
    console.log("✨ Lunara iniciada correctamente.");

    animateHero();
}

// Animación inicial
function animateHero() {

    const hero = document.querySelector(".hero");

    hero.animate(
        [
            {
                opacity: 0,
                transform: "translateY(40px)"
            },
            {
                opacity: 1,
                transform: "translateY(0)"
            }
        ],
        {
            duration: 1200,
            easing: "ease",
            fill: "forwards"
        }
    );

}