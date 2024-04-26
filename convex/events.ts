import { v } from "convex/values";
import { query } from "./_generated/server";

export const get=query({
    handler: async(ctx)=>{
        const identity=await ctx.auth.getUserIdentity();
        //if(!identity){
        //    throw new Error("Unauthoriased");
        //}
        const events=await ctx.db
        .query("events")
        .withIndex("by_creation_time")
        .order("desc")
        .collect();
        return events;
    }
})