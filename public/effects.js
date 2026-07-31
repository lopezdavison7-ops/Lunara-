/*
==================================
 LUNARA PREMIUM EFFECTS
 Creado por Luis González
==================================
*/

// Corazones flotando

function createHeart() {

    const heart = document.createElement("div");

    heart.className = "floating-heart";

    heart.innerHTML = "❤";

    heart.style.left =
        Math.random() * 100 + "vw";

    heart.style.animationDuration =
        (Math.random() * 4 + 5) + "s";

    heart.style.fontSize =
        (Math.random() * 20 + 20) + "px";

    document.body.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 9000);

}

setInterval(createHeart, 500);


// Partículas brillantes

function createParticle() {

    const particle = document.createElement("span");

    particle.className = "particle";

    particle.style.left =
        Math.random() * 100 + "vw";

    particle.style.top =
        Math.random() * 100 + "vh";

    particle.style.animationDuration =
        (Math.random() * 3 + 2) + "s";

    document.body.appendChild(particle);

    setTimeout(() => {

        particle.remove();

    }, 5000);

}

setInterval(createParticle, 300);


// Aparición suave

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});