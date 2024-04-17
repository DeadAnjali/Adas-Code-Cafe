import { verify } from "crypto";
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const userSchema=new mongoose.Schema({
    name:{
        required:[true,"First name is required"],
        type:String,
    },
    regno:{
        type:String,
        required:[true,"Registration No. is required"],
    },
    profilePhoto:{
        type:String,
        default:"",
    },
    email:{
        type:String,
        required:[true,"email is required"],
    },
    username:{
        type:String
    },
    bio:{
        type:String,
    },
    password:{
        type:String,
        required:[true,"Password is required"],
    },
    postCount:{
        type:Number,
        default:0,
    },
    isBlocked:{
        type:Boolean,
        default:false,
    },
    isAdmin:{
        type:Boolean,
        default:false,
    },
    role:{
        type:String,
        enum:["Admin","Guest","Blogger"],
    },
    isFollowing:{
        type:Boolean,
        default:false,
    },
    isUnFollowing:{
        type:Boolean,
        default:false,
    },
    isAccountVerified:{
        type:Boolean,
        default:false,
    },
    accountVerificationToken: String,
    accountVerificationTokenExpires: Date,
    verifyToken:String,
    viewedBy:{
        type:[
            {
                type:mongoose.Schema.Types.ObjectId,
                ref:"User",
                //provide reference to User type of model
            }
        ]
    },
    followers:{
        type:[
            {
                type:mongoose.Schema.Types.ObjectId,
                ref:"User",
                //provide reference to User type of model
            }
        ]
    },
    following:{
        type:[
            {
                type:mongoose.Schema.Types.ObjectId,
                ref:"User",
                //provide reference to User type of model
            }
        ]
    },
    passwordChangeAt: Date,
    forgotpasswordToken:String,
    forgotpasswordTokenExpiry:Date,
    active:{
        type:Boolean,
        default:false,
    },
} ,{
    toJSON:{
        virtuals:true,
    },
    toObject:{
        virtuals:true,
    },
    timestamps:true,
})

export default  mongoose.models.User || mongoose.model("User", userSchema);