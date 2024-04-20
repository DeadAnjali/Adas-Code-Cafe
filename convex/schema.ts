import {v} from 'convex/values'
import { defineSchema,defineTable } from 'convex/server'

export default defineSchema({
    events:defineTable({
        title:v.string(),
        domain:v.string(),
        desc:v.string(),
        launchDate:v.string(),
        endDate:v.string(),
        Winner:v.string(),
    })
    .index("by_domain",["domain"])
    .searchIndex("search_title",{
        searchField:"title",
        filterFields:["domain"]
    })
})
