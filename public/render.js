const express = require("express");
const router = express.Router();

const auth = require("../middlewares/auth");
const Project = require("../models/Project");
const { generateVideo } = require("../services/videoGenerator");


/*
==================================
 LUNARA RENDER ROUTES
 Creado por Luis González
==================================
*/


// Generar video

router.post("/:id", auth, async (req,res)=>{

    try{

        const project = await Project.findOne({

            _id:req.params.id,

            user:req.user.id

        });


        if(!project){

            return res.status(404).json({

                message:"Proyecto no encontrado"

            });

        }


        project.status="rendering";

        await project.save();


        const videoPath = await generateVideo(project);


        project.video = videoPath;

        project.status="completed";

        await project.save();


        res.json({

            message:"Video generado correctamente",

            video:videoPath

        });


    }catch(error){


        console.error(error);


        res.status(500).json({

            message:"Error generando video"

        });


    }

});


module.exports = router;