import { v } from "convex/values";
import { query } from "./_generated/server";

export const get=query({
    args:{
        id:v.string()
    },
    handler: async(ctx,args)=>{
        const identity=await ctx.auth.getUserIdentity();
        //if(!identity){
        //    throw new Error("Unauthoriased");
        //}
        const eventfromid = await ctx.db
        .query("events")
        .filter((q) => q.eq(q.field("_id"), args.id))
        .collect();
        return eventfromid[0];
    }
})