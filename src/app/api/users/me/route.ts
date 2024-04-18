import { getDataFromToken } from "@/helpers/getDataFromToken";

import { NextRequest, NextResponse } from "next/server";
import User from "@/model/userModel";
import { connect } from "@/dbconfig/dbconfig";

export async function GET(request: NextRequest) {
    try {
        // Attempt to establish a database connection
        await connect();
        console.log("Database connected successfully");

        // Extract user ID from the token
        const userId = await getDataFromToken(request);
        console.log("User ID:", userId);

        // Find user in the database based on user ID
        const user = await User.findOne({ _id: userId });
        
        if (!user) {
            // If user not found, return a 404 response
            return NextResponse.json({ error: "User not found" }, { status: 404 });
        }

        // If user found, return user data
        return NextResponse.json({
            message: "User found",
            data: user
        });
    } catch (error) {
        // Log the error for debugging purposes
        console.error("Error:", error);

        // Return a generic error response with a status code of 500
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}