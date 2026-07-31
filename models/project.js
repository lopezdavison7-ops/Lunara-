const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema({

    user:{

        type:mongoose.Schema.Types.ObjectId,

        ref:"User",

        required:true

    },

    title:{

        type:String,

        required:true,

        trim:true

    },

    template:{

        type:String,

        default:"amor"

    },

    photos:[

        {

            type:String

        }

    ],

    music:{

        type:String,

        default:""

    },

    message:{

        type:String,

        default:""

    },

    video:{

        type:String,

        default:""

    },

    thumbnail:{

        type:String,

        default:""

    },

    duration:{

        type:Number,

        default:30

    },

    status:{

        type:String,

        enum:["draft","rendering","completed","failed"],

        default:"draft"

    },

    createdAt:{

        type:Date,

        default:Date.now

    },

    updatedAt:{

        type:Date,

        default:Date.now

    }

});

ProjectSchema.pre("save", function(next){

    this.updatedAt = new Date();

    next();

});

module.exports = mongoose.model("Project", ProjectSchema);