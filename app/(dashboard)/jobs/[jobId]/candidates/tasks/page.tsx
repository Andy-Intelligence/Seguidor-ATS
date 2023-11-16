'use client'
import ApplicantCard from "@/components/cards/ApplicantCard"
import DailyTaskCard from "@/components/cards/DailyTaskCard"
import JobRoleCard from "@/components/cards/JobRoleCard"
import AllJobsLeftSideBarSearchFilter from "@/components/sharedComponents/AllJobsLeftSideBarSearchFilter"
import AllJobsNavSearchFilter from "@/components/sharedComponents/AllJobsNavSearchFilter"
import { Checkbox } from "@/components/ui/checkbox"
import Link from "next/link"



export default function Page() {
  return (
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
                <DailyTaskCard/>
              </section>
            </div>
        
    </div>
  )
}



  
















