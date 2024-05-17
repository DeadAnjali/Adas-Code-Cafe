//api for events table communication
import { toast } from "sonner";
import { mutation } from "./_generated/server";
import {v} from 'convex/values';

export const create =mutation({
    args:{
        title:v.string(),
        domain:v.string(),
        desc:v.string(),
        launchDate:v.string(),
        endDate:v.string(),
        winner:v.string(),
        adminname:v.string(),
        numOfReg:v.number(),
    },
    handler:async(ctx, args)=> {
        const identity=await ctx.auth.getUserIdentity();
        console.log(identity);
        if(!identity){
            throw new Error("Unauthorised");
        }
        // const uniquetitle = await ctx.db.query("events").filter((q) =>q.eq("title", args.title)).unique();
        // if(uniquetitle!=undefined&& uniquetitle==null){
        //     throw new Error("Title is same");
        // }
        const event=ctx.db.insert("events",{
            title:args.title,
            domain:args.domain,
            desc:args.desc,
            launchDate:args.launchDate,
            endDate:args.endDate,
            winner:"Not Yet",
            adminname:identity.name!,
            numOfReg:0,
        });
        return event
    }

})