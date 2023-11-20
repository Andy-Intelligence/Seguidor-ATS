'use client'
import { getAllScheduledInterviews } from "@/backend/actions/job.actions"
import ApplicantCard from "@/components/cards/ApplicantCard"
import DailyTaskCard from "@/components/cards/DailyTaskCard"
import JobRoleCard from "@/components/cards/JobRoleCard"
import AllJobsLeftSideBarSearchFilter from "@/components/sharedComponents/AllJobsLeftSideBarSearchFilter"
import AllJobsNavSearchFilter from "@/components/sharedComponents/AllJobsNavSearchFilter"
import Navbar from "@/components/sharedComponents/Navbar"
import { Checkbox } from "@/components/ui/checkbox"
import Link from "next/link"
import { useEffect, useState } from "react"



export default function Page() {


  const [tasks,setTasks] = useState<any>()



  useEffect(()=>{
    const me = async ()=>{

      const scheduledInterviews = await getAllScheduledInterviews()
      setTasks(scheduledInterviews)
     console.log(scheduledInterviews)
    }
    me()


      },[])


      const [searchQuery, setSearchQuery] = useState<string>('');

      const handleSearch = (query: string) => {
        setSearchQuery(query);
      };
      const filteredTask = tasks?.filter((task:any) =>
        task?.applicant?.name?.toLowerCase().includes(searchQuery?.toLowerCase())
      );
    


  return (
    <div>
      <div>
        <Navbar onSearch={handleSearch}/>
      </div>
    <div className="flex flex-col">
            <AllJobsNavSearchFilter displaySwitch={false}/>

            <div className="flex flex-row gap-4 p-2 w-full">
                <section>
                <AllJobsLeftSideBarSearchFilter/>
                </section>
                <section className='dailyTaskBackgroundColor p-2 flex flex-col w-full'>
                <div className='flex items-center space-x-1'>
                  <svg width="5" height="25" viewBox="0 0 5 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="5" height="25" rx="2.5" fill="#69A959"/>
                  </svg>
                  <div className='flex items-center justify-center text-[22px] font-[400]'>
                  Daily Tasks

                  </div>
                  <div className='dailyTaskTagBackgroundColor flex items-center justify-center text-white h-[19px] w-[22px] rounded-[2px] text-[14px] font-[400]'>
                    3
                  </div>

                </div> 
                {filteredTask?.reverse().slice().map((task:any)=>{
                  return (
                    <DailyTaskCard 
                    applicantImg={task?.applicant?.passport}
                    taskStartTime = {task?.scheduledDate}
                    taskEndTime = {task?.interviewEndTime}
                    applicantName = {task?.applicant?.name}
                    applicantJob = {task?.job?.jobTitle}
                    jobTitle = {task?.job?.jobTitle}
                    jobType = {task?.job?.jobType}
                    employmentStatus = {task?.job?.employmentStatus}
                    inviteLink = {task?.inviteLink}
                    interviewer = {task?.interviewer?.name}
                    />
                  )
                })}
              </section>
            </div>
        
    </div>
    </div>
  )
}



  
















