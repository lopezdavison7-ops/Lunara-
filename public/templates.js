/*
==================================
 LUNARA TEMPLATES
 Creado por Luis González
==================================
*/

const params = new URLSearchParams(window.location.search);

const template = params.get("template");

const templates = {

    amor: {

        title: "❤️ Amor",

        color: "#ff4d8d",

        background: "linear-gradient(135deg,#ff4d8d,#7c3aed)",

        music: "romantic.mp3",

        effect: "hearts"

    },

    madre: {

        title: "🌷 Día de las Madres",

        color: "#ec4899",

        background: "linear-gradient(135deg,#f472b6,#fb7185)",

        music: "mothers.mp3",

        effect: "flowers"

    },

    cumple: {

        title: "🎂 Cumpleaños",

        color: "#f59e0b",

        background: "linear-gradient(135deg,#f59e0b,#ef4444)",

        music: "birthday.mp3",

        effect: "confetti"

    },

    aniversario: {

        title: "💍 Aniversario",

        color: "#8b5cf6",

        background: "linear-gradient(135deg,#8b5cf6,#ec4899)",

        music: "love.mp3",

        effect: "hearts"

    },

    baby: {

        title: "👶 Baby Shower",

        color: "#60a5fa",

        background: "linear-gradient(135deg,#60a5fa,#a78bfa)",

        music: "baby.mp3",

        effect: "stars"

    },

    graduacion: {

        title: "🎓 Graduación",

        color: "#3b82f6",

        background: "linear-gradient(135deg,#2563eb,#7c3aed)",

        music: "graduation.mp3",

        effect: "sparkles"

    },

    navidad: {

        title: "🎄 Navidad",

        color: "#22c55e",

        background: "linear-gradient(135deg,#16a34a,#dc2626)",

        music: "christmas.mp3",

        effect: "snow"

    },

    añonuevo: {

        title: "🎆 Año Nuevo",

        color: "#facc15",

        background: "linear-gradient(135deg,#facc15,#f97316)",

        music: "newyear.mp3",

        effect: "fireworks"

    }

};

if(template && templates[template]){

    console.log(

        "Plantilla cargada:",

        templates[template]

    );

}

function openTemplate(name){

    window.location.href =

    `editor.html?template=${name}`;

}