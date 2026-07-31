const bcrypt = require("bcrypt");
const db = require("../database/database");

/*
==================================
 LUNARA AUTH CONTROLLER
 Creado por Luis González
==================================
*/

// Registro
const register = async (req, res) => {

    const { username, email, password } = req.body;

    if (!username || !email || !password) {
        return res.status(400).json({
            success: false,
            message: "Completa todos los campos."
        });
    }

    try {

        const hash = await bcrypt.hash(password, 10);

        db.run(
            `
            INSERT INTO users
            (username, email, password)
            VALUES (?, ?, ?)
            `,
            [username, email, hash],
            function (error) {

                if (error) {
                    return res.status(400).json({
                        success: false,
                        message: "El usuario o correo ya existe."
                    });
                }

                return res.json({
                    success: true,
                    message: "Cuenta creada correctamente."
                });

            }
        );

    } catch {

        res.status(500).json({
            success: false,
            message: "Error interno del servidor."
        });

    }

};

module.exports = {
    register
};