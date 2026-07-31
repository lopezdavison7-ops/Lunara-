/*
==================================
 LUNARA PARTICLES
 Creado por Luis González
==================================
*/

const container = document.getElementById("particles");

// Crear estrellas
for (let i = 0; i < 120; i++) {

    const star = document.createElement("span");

    star.classList.add("star");

    star.style.left = Math.random() * 100 + "%";
    star.style.top = Math.random() * 100 + "%";

    star.style.animationDelay =
        Math.random() * 5 + "s";

    star.style.animationDuration =
        (2 + Math.random() * 4) + "s";

    container.appendChild(star);

}

// Luz que sigue el cursor

const light = document.createElement("div");

light.className = "cursor-light";

document.body.appendChild(light);

document.addEventListener(

    "mousemove",

    (e)=>{

        light.style.left = e.clientX + "px";

        light.style.top = e.clientY + "px";

    }

);

// Corazones

function floatingHeart(){

    const heart = document.createElement("div");

    heart.className = "floating-heart";

    heart.innerHTML = "❤";

    heart.style.left =
        Math.random()*100+"vw";

    heart.style.fontSize =
        (18+Math.random()*18)+"px";

    heart.style.animationDuration =
        (6+Math.random()*4)+"s";

    document.body.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },10000);

}

setInterval(floatingHeart,700);

// Partículas

function particle(){

    const p = document.createElement("span");

    p.className="particle";

    p.style.left=Math.random()*100+"vw";

    p.style.top=Math.random()*100+"vh";

    document.body.appendChild(p);

    setTimeout(()=>{

        p.remove();

    },5000);

}

setInterval(particle,250);