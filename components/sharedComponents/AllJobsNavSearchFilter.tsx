"use client"
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

interface Props{
    displaySwitch?:boolean;
}


const AllJobsNavSearchFilter = ({displaySwitch}:Props) => {
  return (
    <nav className="navbar p-4 flex justify-between w-full items-center ">
      <div className="flex items-center gap-[47px] text-[16px] font-[400]">
        <Link href="/overview">
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
                <SelectValue placeholder="Job Title" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="light">Product Manager</SelectItem>
                <SelectItem value="dark">Senior Developer</SelectItem>
                <SelectItem value="system">Accountant</SelectItem>
            </SelectContent>
        </Select>
        <Select>
            <SelectTrigger className="w-[180px] selectorBackgroundColor ">
                <SelectValue placeholder="Job type" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="nnSite">On Site</SelectItem>
                <SelectItem value="remote">remote</SelectItem>
                <SelectItem value="hybrid">hybrid</SelectItem>
            </SelectContent>
        </Select>
        <Select >
            <SelectTrigger className="w-[180px] selectorBackgroundColor">
                <SelectValue placeholder="Employment status" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="parttime">Part time</SelectItem>
                <SelectItem value="fulltime">full time</SelectItem>
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
  );
};

export default AllJobsNavSearchFilter;
