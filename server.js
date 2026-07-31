require("dotenv").config();

const express = require("express");
const path = require("path");
const cors = require("cors");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");

const routes = require("./routes");

const app = express();

const PORT = process.env.PORT || 3000;

/* ==========================
   Seguridad
========================== */

app.use(helmet());

app.use(cors());

app.use(
    rateLimit({
        windowMs: 15 * 60 * 1000,
        max: 300,
        standardHeaders: true,
        legacyHeaders: false
    })
);

/* ==========================
   Middlewares
========================== */

app.use(express.json());

app.use(express.urlencoded({
    extended: true
}));

/* ==========================
   Archivos públicos
========================== */

app.use(express.static(path.join(__dirname, "public")));

/* ==========================
   Rutas
========================== */

// Página principal
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

// API
app.use("/api", routes);

/* ==========================
   Error 404
========================== */

app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: "Página no encontrada."
    });
});

/* ==========================
   Iniciar servidor
========================== */

app.listen(PORT, () => {

    console.clear();

    console.log(`
╔══════════════════════════════════════╗
║              LUNARA                  ║
╠══════════════════════════════════════╣
║ Estado      : Online                 ║
║ Puerto      : ${PORT}
║ Desarrollador: Luis González         ║
║ Versión     : 1.0.0                  ║
╚══════════════════════════════════════╝
`);

});