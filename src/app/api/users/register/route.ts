import { connect } from "@/dbconfig/dbconfig";
import User from '@/model/userModel'
import { NextRequest,NextResponse } from "next/server";
import bcrypt from "bcryptjs";


connect();
export async function POST(request:NextRequest) {
    try {
        const reqbody=await request.json()
        const{name,regno,email,password,username}=reqbody;
        console.log(reqbody);
        //check if user already exist

        const user=await User.findOne({regno});
        if(user){
            return NextResponse.json({error:"User already exists"},{status:400})
        }

        //hash password
        const salt=await bcrypt.genSalt(10);
        const hashedPassword=await bcrypt.hash(password,salt);

        const newUser=new User({
            name,
            regno,
            email,
            password:hashedPassword,
            username
        })
        const saveduser=await newUser.save();
        console.log(saveduser);
        return NextResponse.json({
            message:"User created Successfully",
            success:true,
            saveduser
        })

    } catch (error:any) {
        return NextResponse.json({
            error:error.message
        },{status:500})
    }
}
