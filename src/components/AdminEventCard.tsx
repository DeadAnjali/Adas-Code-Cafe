"use client"
import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "./ui/textarea"
import { Calendar } from "@/components/ui/calendar"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
 
import { cn } from "@/lib/utils"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

import { useMutation } from "convex/react"
import { api } from "../../convex/_generated/api"


export function AdminEvent() {
    const [date, setDate] = React.useState<Date>()

    const create=useMutation(api.event.create);
    const [event, setEvent] = React.useState({
        title:"",
        domain:"",
        desc:"",
        launchDate:"",
        endDate:"",  
        numOfReg:0,     
    })
    const AddEvent=()=>{
        create({
            title:event.title,
            domain:event.domain,
            desc:event.desc,
            launchDate:"",
            endDate:event.endDate,
            winner:"Not Yet",
            adminname:"",
            numOfReg:0
        })
    }
  return (
    <Card className="w-[350px]  bg-orange-1 outline-0">
      <CardHeader className="text-white">
        <CardTitle>Add an event</CardTitle>
        <CardDescription>Enter the details about your event</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4 ">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name" text-white>Name of the Event</Label>
              <Input id="name" placeholder="Name of the Event" value={event.title} 
              onChange={(e) => setEvent({...event, title: e.target.value})}
              />
            </div>

            <div className="flex flex-col space-y-1.5">
            <Label htmlFor="name" text-white>Domain Of the Event</Label>
              <Input id="name" placeholder="Domain Name" value={event.domain} 
              onChange={(e) => setEvent({...event, domain: e.target.value})}
              />
            </div>
            <Textarea value={event.desc} placeholder="Type your description"
            onChange={(e) => setEvent({...event, desc: e.target.value})}/>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button onClick={AddEvent}>Deploy</Button>
      </CardFooter>
    </Card>
  )
}
/*
<Label htmlFor="framework">Domain</Label>
              <Select onValueChange={} defaultValue={event.domain}>
                <SelectTrigger id="framework">
                  <SelectValue placeholder="Select"/>
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="next">Next.js</SelectItem>
                  <SelectItem value="sveltekit">SvelteKit</SelectItem>
                  <SelectItem value="astro">Astro</SelectItem>
                  <SelectItem value="nuxt">Nuxt.js</SelectItem>
                </SelectContent>
              </Select> 
              */
