"use client"
import { ClerkProvider,useAuth } from "@clerk/nextjs";
import {ConvexProviderWithClerk} from "convex/react-clerk"
import{
    AuthLoading,
    Authenticated,
    ConvexReactClient,
} from "convex/react"

interface ConvexClientProviderProps{
    children:React.ReactNode;
};

const convexUrl=process.env.NEXT_PUBLIC_CONVEX_URL!;
const convex =new ConvexReactClient(convexUrl);

export const ConvexClientProvider=({
    children,
}:ConvexClientProviderProps)=>{
    return(
        <ClerkProvider appearance={{
            layout: {
              socialButtonsVariant: "iconButton",
              logoImageUrl: "/icons/yoom-logo.svg",
            },
            variables: {
              colorText: "#fff",
              colorPrimary: "#0E78F9",
              colorBackground: "#1C1F2E",
              colorInputBackground: "#252A41",
              colorInputText: "#fff",
            },
          }}>
            <ConvexProviderWithClerk useAuth={useAuth} client={convex}>
                {children}
            </ConvexProviderWithClerk>
        </ClerkProvider>
    )
}