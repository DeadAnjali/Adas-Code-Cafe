import { verify } from "crypto";
import mongoose from mongoose;
import bcrypt from bcrypt;

const userSchema=new mongoose.Schema({
    name:{
        required:[true,"First name is required"],
        type:String,
    },
    profilePhoto:{
        type:String,
        default:"",
    },
    email:{
        type:String,
        required:[true,"email is required"],
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
//it has two arguments
userSchema.pre("save",async function(next){
    const salt=await bcrypt.genSalt(10);
    this.password=await bcrypt.hash(this.password,salt);
    next();
})

userSchema.methods.isPasswordMatched= async function (enterpass){
    return this.password===enterpass;
};
//we make model of a schema through
const User=mongoose.model("User",userSchema);


module.exports=User;//gotta export stuff for it to work