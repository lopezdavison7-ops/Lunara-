require("dotenv").config();

const express = require("express");
const path = require("path");
const cors = require("cors");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");

const app = express();

const PORT = process.env.PORT || 3000;

// Seguridad
app.use(helmet());

// CORS
app.use(cors());

// Límite de peticiones
app.use(
  rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 300
  })
);

// Leer JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Archivos públicos
app.use(express.static(path.join(__dirname, "public")));

// Ruta principal
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Ruta de prueba
app.get("/api/status", (req, res) => {
  res.json({
    success: true,
    project: "Lunara",
    version: "1.0.0",
    developer: "Luis González",
    status: "online"
  });
});

// Error 404
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Página no encontrada."
  });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`
╔══════════════════════════════╗
║         LUNARA              ║
╠══════════════════════════════╣
║ Estado : Online             ║
║ Puerto : ${PORT}
║ Autor  : Luis González      ║
╚══════════════════════════════╝
`);
});