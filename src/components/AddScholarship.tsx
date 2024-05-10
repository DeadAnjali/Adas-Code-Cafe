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



function AddScholarship() {

    const {mutate:create,pending}=useApiMutation(api.scholarship.create);
    const [scholarship, setscholarship] = React.useState({
        title:"",
        company:"",
        appliDate:"",
        endDate:"",
        amount:""
    })
    const AddEvent=()=>{
        create({
        title:scholarship.title,
        company:scholarship.company,
        appliDate:scholarship.appliDate,
        endDate:scholarship.endDate,
        amount:scholarship.amount
        })
    }
  return (
    <Dialog >
      <DialogTrigger asChild>
        <Button className="text-2xl">Add Scholarship</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px] text-white">
        <DialogHeader>
                <CardHeader className="text-white">
                <CardTitle>Scholarships</CardTitle>
                <CardDescription>Women In Tech Scholarships</CardDescription>
                </CardHeader>
        </DialogHeader>
        <CardContent>
        <form>
          <div className="grid w-full items-center gap-4 ">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name" text-white>Name of scholorship</Label>
              <Input className="text-black" id="name" placeholder="Name of the Event" value={scholarship.title} 
              onChange={(e) => setscholarship({...scholarship, title: e.target.value})}
              />
            </div>

            <div className="flex flex-col space-y-1.5">
            <Label htmlFor="name" text-white>Organisation</Label>
              <Input id="name" placeholder="Domain Name" value={scholarship.company} className="text-black"
              onChange={(e) => setscholarship({...scholarship, company: e.target.value})}
              />
            </div>
            <div className="grid gap-4 ">
                <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="startdate" className="text-left">
                    Starts On
                    </Label>
                    <Input type="date" className="col-span-3 text-black" id="startdate" value={scholarship.appliDate}
                    onChange={(e) => setscholarship({...scholarship, appliDate: e.target.value}) }
                    name="start" defaultValue="YYYY-MM-DD"  min="2024-01-01" max="2036-12-31" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="enddate" className="text-left">
                    Ends On 
                    </Label>
                    <Input type="date" className="col-span-3 text-black" id="enddate" value={scholarship.endDate}
                    onChange={(e) => setscholarship({...scholarship, endDate: e.target.value}) }
                    name="end" defaultValue="YYYY-MM-DD"  min="2024-01-01" max="2036-12-31" />
                </div>
            </div>
            <div className="flex flex-col space-y-1.5">
            <Label htmlFor="amount" text-white>Amount</Label>
              <Input id="amount" placeholder="Amount" value={scholarship.amount} className="text-black"
              onChange={(e) => setscholarship({...scholarship, amount: e.target.value})}
              />
            </div>
          </div>
        </form>
        </CardContent>
        <DialogFooter>
        <CardFooter className="flex justify-between">
            <Button variant="secondary">Cancel</Button>
            <Button  disabled={pending} variant="outline"  onClick={AddEvent} >Add</Button>
        </CardFooter>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}


export default AddScholarship
