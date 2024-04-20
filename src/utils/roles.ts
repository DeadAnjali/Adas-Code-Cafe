import { Roles } from "@/types/globals"
import { auth } from "@clerk/nextjs/server"
import { getAuth, clerkClient } from "@clerk/nextjs/server";
import type { NextApiRequest, NextApiResponse } from "next";
import { NextRequest } from "next/server";
 
export const checkRole = (role: Roles) => {
  const { sessionClaims } = auth() 
 
  return sessionClaims?.metadata.role === role;
}


export const checkRoleAdmin = (req: NextRequest) => {
  const { sessionClaims } = getAuth(req);
 
  return sessionClaims?.metadata.role === "admin";
}