'use client'
import Link from 'next/link';
import {useEffect} from 'react'
import {FiLink2} from 'react-icons/fi'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

import ApplicantCard from "@/components/cards/ApplicantCard"
import JobRoleCard from "@/components/cards/JobRoleCard"
import AllJobsLeftSideBarSearchFilter from "@/components/sharedComponents/AllJobsLeftSideBarSearchFilter"
import AllJobsNavSearchFilter from "@/components/sharedComponents/AllJobsNavSearchFilter"
import { Checkbox } from "@/components/ui/checkbox"

// import { fetchUser } from '@/backend/actions/user.actions';

import {useRouter} from 'next/navigation'
import axios from 'axios';


export default function Home() {
  // const router = useRouter()
    const displaySwitch= false
 
  
    //  useEffect(()=> {
      // const me = async ()=> {
      //   const a = await fetchUser()
      //   router.push(`jobs/${a}`)
        
      
      // const b =  createGoogleMeetLink({code:d, title:"mee", description:"you", startTime:'2023-01-01T10:00:00Z', endTime:'2023-01-01T11:00:00Z' })
      //   console.log('Google Meet Link:', b);
      // }
      

        // me()
    // },[])






  return (
    <div className="flex flex-col">
            <nav className="navbar p-4 flex justify-between w-full items-center ">
      <div className="flex items-center gap-[47px] text-[16px] font-[400]">
        <Link href="/jobs/all">
            <div className='allJobsFilterLinksActivebackground py-1 px-2 rounded-[4px] '>
                All
            </div>
        </Link>
        <Link className='flex flex-col items-center justify-center' href="/mailbox">
          <div className='allJobsFilterLinksbackground py-1 px-2 rounded-[4px]'>
            Published
          </div>
        </Link>
        <Link href="/jobs">
         <div className='allJobsFilterLinksbackground py-1 px-2 rounded-[4px]'>
         Closed
        </div> 
            
        </Link>
      </div>
      <form className=' flex justify-center items-center  '>
        

          <div className='flex flex-row items-center gap-2 '>
        <Select>
            <SelectTrigger className="w-[180px] selectorBackgroundColor">
                <SelectValue placeholder="Theme" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="light">Product Manager</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
            </SelectContent>
        </Select>
        <Select>
            <SelectTrigger className="w-[180px] selectorBackgroundColor ">
                <SelectValue placeholder="Theme" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="light">On Site</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
            </SelectContent>
        </Select>
        <Select >
            <SelectTrigger className="w-[180px] selectorBackgroundColor">
                <SelectValue placeholder="Theme" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="light">Part time</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
            </SelectContent>
        </Select>

        </div>
      </form>
      
      <div className="flex items-center space-x-4 ">
       {displaySwitch ? (<div className="flex items-center space-x-2">
            <Label htmlFor="turn-off-all">Turn Off All</Label>
            <Switch id="turn-off-all" />
        </div>):

       (<div className="flex items-center space-x-2">
           <button className='rejectButton rounded-[4px] text-[14px] font-[500] p-2'>Reject</button>
           <button className='moveToInterviewButton rounded-[4px] text-[14px] font-[500] p-2'>Move to interview</button>
        </div>)
        }



      </div>
    </nav>

            <div className="flex flex-row gap-4 p-2">
                <section>
                <AllJobsLeftSideBarSearchFilter/>
                </section>
                
            </div>
        
    </div>
  )
}



  
















