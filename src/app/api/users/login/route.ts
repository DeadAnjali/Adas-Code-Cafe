import { connect } from "@/dbconfig/dbconfig";
import { NextRequest, NextResponse } from "next/server";
import  User from '@/model/userModel'
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken';

export async function POST(request:NextRequest) {
    try {
        await connect();
        const reqBody=await request.json();
        const {email, password}=reqBody;
        console.log(reqBody);

        //check if user exists
        const user=await User.findOne({email});
        if(!user){
            return NextResponse.json({error: "User does not exist" },{status:500})
        }
        //check if password is correct
        const validPassword=await bcrypt.compare(password,user.password);
        if(!validPassword){
            return NextResponse.json({error: "Password is not correct" },{status:500})
        }

        //create token data which you will send as payload
        const tokenData={
            id:user._id,
            regno:user.regno,
            name:user.name,
        }

        //create a token for user identification
        const token=await jwt.sign(tokenData,process.env.JWT_SECRET!,{expiresIn:'1d'});
        // send a response to cookies
        const response=await NextResponse.json({
            message:"Login Successful",
            success:"true",
        })
        response.cookies.set("token",token,{
            httpOnly:true,
        })
        return response;


    } catch (error:any) {
        return NextResponse.json({error: error.message },{status:500})
    }
}