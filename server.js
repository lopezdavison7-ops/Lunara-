require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

const app = express();

// ================================
// CONFIGURACIÓN
// ================================

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({
    extended: true
}));

// Archivos públicos
app.use(express.static(path.join(__dirname, "public")));

// Archivos subidos
app.use(
    "/uploads",
    express.static(path.join(__dirname, "uploads"))
);

// ================================
// CONEXIÓN MONGODB
// ================================

mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log("✅ MongoDB conectado");
})
.catch(err => {
    console.log("❌ Error MongoDB:", err);
});

// ================================
// RUTAS
// ================================

app.use(
    "/api/auth",
    require("./routes/auth")
);

app.use(
    "/api/profile",
    require("./routes/profile")
);

app.use(
    "/api/projects",
    require("./routes/projects")
);

// ✅ Corregido
app.use(
    "/api/render",
    require("./routes/video")
);

app.use(
    "/api/upload",
    require("./routes/upload")
);

app.use(
    "/api/admin",
    require("./routes/admin")
);

// Ruta principal

app.get("/", (req, res) => {

    res.sendFile(
        path.join(__dirname, "public", "index.html")
    );

});

// ================================
// SERVIDOR
// ================================

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {

    console.log(`🌙 Lunara funcionando en puerto ${PORT}`);

});