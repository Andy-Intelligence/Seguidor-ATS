'use client'
import Link from 'next/link';
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

import JobRoleCard from "@/components/cards/JobRoleCard"
import AllJobsNavSearchFilter from "@/components/sharedComponents/AllJobsNavSearchFilter"
import { getAllPostedJobs } from '@/backend/actions/job.actions';
import { useEffect,useState } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/sharedComponents/Navbar';


export default function Home() {
  const router = useRouter()
  const displaySwitch= false
  const [allJobs, setAllJobs] =  useState<any>([])


  useEffect(()=>{
    const me = async ()=>{
    
      const allJobs = await getAllPostedJobs()
      setAllJobs(allJobs)
    
    //  const a = await linkedInSignInUser()
    //  console.log(allJobs)
    }
    me()
      },[])

      const handleClick = (e:any,id:any)=>{
          e.preventDefault()
          router.push(`${id}/candidates`)
      }


      const [searchQuery, setSearchQuery] = useState<string>('');

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };
  const filteredjobs = allJobs.filter((job:any) =>
    job.jobTitle.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <div className="flex flex-col gap-2">
      <div className="">
      <Navbar onSearch={handleSearch}/>  
      </div>
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
        <main className="grid grid-cols-2 gap-4">
        {filteredjobs?.map((item:any)=>{
                      return (
                        <div onClick={(e)=>handleClick(e,item?._id)}>
                        <JobRoleCard
                        key={item?._id} 
                        jobtitle ={item?.jobTitle}
                        jobtype ={item?.jobType}
                        employmentstatus ={item?.employmentStatus}
                        jobdescription ={item?.jobDescription}/>
                        </div>
                      )
                    })}
        </main>
    </div>
  )
}



  
















