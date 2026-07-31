const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({

    username:{

        type:String,

        required:true,

        unique:true,

        trim:true

    },

    email:{

        type:String,

        required:true,

        unique:true,

        lowercase:true,

        trim:true

    },

    password:{

        type:String,

        required:true

    },

    avatar:{

        type:String,

        default:""

    },

    plan:{

        type:String,

        enum:["free","premium"],

        default:"free"

    },

    status:{

        type:String,

        enum:["active","suspended"],

        default:"active"

    },

    role:{

        type:String,

        enum:["user","admin"],

        default:"user"

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

UserSchema.pre("save", function(next){

    this.updatedAt = new Date();

    next();

});

module.exports = mongoose.model("User", UserSchema);