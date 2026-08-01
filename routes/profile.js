const express = require("express");
const router = express.Router();

const bcrypt = require("bcryptjs");

const auth = require("../middlewares/auth");
const User = require("../models/User");


/*
==================================
 LUNARA PROFILE ROUTES
 Creado por Luis González
==================================
*/


// Obtener perfil

router.get("/", auth, async(req,res)=>{

    try{

        const user = await User.findById(

            req.user.id

        ).select("-password");


        res.json(user);


    }catch(error){

        res.status(500).json({

            message:"Error cargando perfil"

        });

    }

});


// Actualizar perfil

router.put("/", auth, async(req,res)=>{

    try{


        const {

            username,

            email,

            password,

            avatar

        } = req.body;



        const updateData = {

            username,

            email,

            avatar

        };



        if(password && password.trim() !== ""){


            updateData.password = await bcrypt.hash(

                password,

                10

            );


        }



        const user = await User.findByIdAndUpdate(

            req.user.id,

            updateData,

            {

                new:true

            }

        ).select("-password");



        res.json({

            message:"Perfil actualizado",

            user

        });



    }catch(error){


        res.status(500).json({

            message:"No se pudo actualizar el perfil"

        });


    }

});


module.exports = router;