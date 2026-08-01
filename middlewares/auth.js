const jwt = require("jsonwebtoken");

const User = require("../models/User");


/*
==================================
 LUNARA AUTH MIDDLEWARE
 Creado por Luis González
==================================
*/


module.exports = async function(req,res,next){

    try{


        const header = req.headers.authorization;


        if(!header){

            return res.status(401).json({

                message:"No hay token de acceso"

            });

        }


        const token = header.split(" ")[1];


        if(!token){

            return res.status(401).json({

                message:"Token inválido"

            });

        }


        const decoded = jwt.verify(

            token,

            process.env.JWT_SECRET

        );


        const user = await User.findById(

            decoded.id

        );


        if(!user){

            return res.status(401).json({

                message:"Usuario no encontrado"

            });

        }


        req.user = {

            id:user._id,

            username:user.username,

            role:user.role,

            plan:user.plan

        };


        next();


    }catch(error){


        return res.status(401).json({

            message:"Sesión expirada o token incorrecto"

        });


    }

};