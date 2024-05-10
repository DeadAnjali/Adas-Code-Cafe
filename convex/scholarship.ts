import { v } from "convex/values";
import { mutation } from "./_generated/server";

export const create=mutation({
    args:{
        title:v.string(),
        company:v.string(),
        appliDate:v.string(),
        endDate:v.string(),
        amount:v.string()
    },
    handler:async(ctx, args)=>{
        const identity=await ctx.auth.getUserIdentity();
        console.log(identity);
        if(!identity){
            throw new Error("Unauthorised");
        }
        const scholarship=ctx.db.insert("scholarship",{
            title:args.title,
            company:args.company,
            appliDate:args.appliDate,
            endDate:args.endDate,
            amount:parseInt (args.amount)
        })
    },
})