import {v} from 'convex/values'
import { defineSchema,defineTable } from 'convex/server'

export default defineSchema({
    events:defineTable({
        title:v.string(),
        domain:v.string(),
        desc:v.string(),
        launchDate:v.string(),
        endDate:v.string(),
        winner:v.string(),
        adminname:v.string(),
        numOfReg:v.number()
    }).index("by_domain",["domain"])
    .searchIndex("search_title",{
        searchField:"title",
        filterFields:["domain"],
    }),
    
    scholarship:defineTable({
        title:v.string(),
        company:v.string(),
        appliDate:v.string(),
        endDate:v.string(),
        amount:v.number()
    })
})