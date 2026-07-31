const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const db = require("../database/database");

/*
==================================
 LUNARA AUTH CONTROLLER
 Creado por Luis González
==================================
*/

// ================================
// REGISTRO
// ================================

const register = async (req, res) => {

    const { username, email, password } = req.body;

    if (!username || !email || !password) {
        return res.status(400).json({
            success: false,
            message: "Completa todos los campos."
        });
    }

    try {

        const passwordHash = await bcrypt.hash(password, 10);

        db.run(
            `
            INSERT INTO users
            (username, email, password)
            VALUES (?, ?, ?)
            `,
            [username, email, passwordHash],
            function (error) {

                if (error) {
                    return res.status(400).json({
                        success: false,
                        message: "El usuario o correo ya existe."
                    });
                }

                res.status(201).json({
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

// ================================
// LOGIN
// ================================

const login = (req, res) => {

    const { email, password } = req.body;

    if (!email || !password) {

        return res.status(400).json({
            success: false,
            message: "Completa todos los campos."
        });

    }

    db.get(

        `
        SELECT *
        FROM users
        WHERE email = ?
        `,

        [email],

        async (error, user) => {

            if (error) {

                return res.status(500).json({
                    success: false,
                    message: "Error interno."
                });

            }

            if (!user) {

                return res.status(401).json({
                    success: false,
                    message: "Correo o contraseña incorrectos."
                });

            }

            const validPassword = await bcrypt.compare(password, user.password);

            if (!validPassword) {

                return res.status(401).json({
                    success: false,
                    message: "Correo o contraseña incorrectos."
                });

            }

            const token = jwt.sign(

                {
                    id: user.id,
                    username: user.username,
                    email: user.email
                },

                process.env.JWT_SECRET,

                {
                    expiresIn: "7d"
                }

            );

            res.json({
                success: true,
                message: "Inicio de sesión correcto.",
                token
            });

        }

    );

};

// ================================
// PERFIL
// ================================

const profile = (req, res) => {

    res.json({
        success: true,
        message: "Próximamente."
    });

};

module.exports = {
    register,
    login,
    profile
};