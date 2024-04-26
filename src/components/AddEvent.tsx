"use client"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import * as React from "react"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
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
import { useApiMutation } from "../../convex/useapimutation"



export function DialogDemo() {
    const [date, setDate] = React.useState<Date>()

    const {mutate:create,pending}=useApiMutation(api.event.create);
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
            launchDate:event.launchDate,
            endDate:event.endDate,
            winner:"Not Yet",
            adminname:"GeneralAdmin",
            numOfReg:0
        })
    }
  return (
    <Dialog >
      <DialogTrigger asChild>
        <Button className="text-2xl">Add Event</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px] text-white">
        <DialogHeader>
                <CardHeader className="text-white">
                <CardTitle>Add an event</CardTitle>
                <CardDescription>Enter the details about your event</CardDescription>
                </CardHeader>
        </DialogHeader>
        <CardContent>
        <form>
          <div className="grid w-full items-center gap-4 ">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name" text-white>Name of the Event</Label>
              <Input className="text-black" id="name" placeholder="Name of the Event" value={event.title} 
              onChange={(e) => setEvent({...event, title: e.target.value})}
              />
            </div>

            <div className="flex flex-col space-y-1.5">
            <Label htmlFor="name" text-white>Domain Of the Event</Label>
              <Input id="name" placeholder="Domain Name" value={event.domain} className="text-black"
              onChange={(e) => setEvent({...event, domain: e.target.value})}
              />
            </div>
            <div className="grid gap-4 ">
                <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="startdate" className="text-left">
                    Starts On
                    </Label>
                    <Input type="date" className="col-span-3 text-black" id="startdate" value={event.launchDate}
                    onChange={(e) => setEvent({...event, launchDate: e.target.value}) }
                    name="start" defaultValue="YYYY-MM-DD"  min="2024-01-01" max="2036-12-31" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="enddate" className="text-left">
                    Ends On 
                    </Label>
                    <Input type="date" className="col-span-3 text-black" id="enddate" value={event.endDate}
                    onChange={(e) => setEvent({...event, endDate: e.target.value}) }
                    name="end" defaultValue="YYYY-MM-DD"  min="2024-01-01" max="2036-12-31" />
                </div>
            </div>
            <Textarea value={event.desc} placeholder="Type your description" className="text-black"
            onChange={(e) => setEvent({...event, desc: e.target.value})}/>
          </div>
        </form>
        </CardContent>
        <DialogFooter>
        <CardFooter className="flex justify-between">
            <Button variant="secondary">Cancel</Button>
            <Button  disabled={pending} variant="outline"  onClick={AddEvent} >Deploy</Button>
        </CardFooter>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
