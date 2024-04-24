import { v } from "convex/values";
import { query } from "./_generated/server";

export const get=query({
    args:{
        domain:v.string(),
    },
    handler: async(ctx,args)=>{
        const identity=await ctx.auth.getUserIdentity();
        //if(!identity){
        //    throw new Error("Unauthoriased");
        //}
        const events=await ctx.db.query("events")
        .withIndex("by_domain",(q)=>q.eq("domain",args.domain))
        .collect();
    }
})