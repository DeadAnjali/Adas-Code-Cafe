import { query } from "./_generated/server";

export const get=query({
    handler:async(ctx)=>{
        const events=await ctx.db
        .query("scholarship")
        .withIndex("by_creation_time")
        .order("desc")
        .collect();
        return events;
    },
})