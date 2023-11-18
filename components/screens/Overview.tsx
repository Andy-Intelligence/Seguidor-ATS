"use client"
import React, {useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import {PiCaretLeftBold} from 'react-icons/pi'
import {PiCaretRightBold} from 'react-icons/pi'
import { register } from 'swiper/element/bundle';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { Check, ChevronsUpDown } from "lucide-react"
 
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

import Summary from '../cards/Summary'
import JobRoleCard from '../cards/JobRoleCard';
import DailyTaskCard from '../cards/DailyTaskCard';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { linkedInSignInUser } from '@/backend/actions/user.actions';
import { getAllApplicant, getAllApplicantComment, getAllPostedJobs, getAllScheduledInterviews } from '@/backend/actions/job.actions';

register()
const Overview =  () => {
  const router = useRouter()





  const [prevEl, setPrevEl] = useState<HTMLElement | null>(null)
  const [nextEl, setNextEl] = useState<HTMLElement | null>(null)

  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")
  const [allJobs, setAllJobs] =  React.useState<any>([])





  const [allApplicant,setAllApplicant] = useState<any>()
  const [totalComment,setTotalComment] = useState<any>()
  const [tasks,setTasks] = useState<any>()
  const [job,setJob] = useState<any>()
  // console.log("me",params?.jobId)

  useEffect(()=>{
// console.log("firing")
const fetchData = async () => {
  try {
    // const jobId = params?.id;
    const res = await getAllApplicantComment();
    
    // const res2 = await getSingleJob({ jobId:params?.jobId });
    // setJob(res2)
    setAllApplicant(allApplicant);
    // console.log("applicant", applicant);
    return res
  } catch (error) {
    console.error("Error fetching all applicant:", error);
  }
};

fetchData().then((a)=>{
    setAllApplicant(a)
    
    
  });
  },[])



  useEffect(()=>{
    const me = async ()=>{

      const scheduledInterviews = await getAllScheduledInterviews()
      setTasks(scheduledInterviews)
     console.log(scheduledInterviews)
    }
    me()


      },[])







  useEffect(()=>{
    const me = async ()=>{

      const allJobs = await getAllPostedJobs()
      setAllJobs(allJobs)
     console.log(allJobs)
    }
    me()

    let totalNoteAndFeedBack = allJobs.reduce((acc:any, job:any) => {
      return acc + job.applications.reduce((accApp:any, application:any) => {
        return accApp + application.noteAndFeedBack.length;
      }, 0);
    }, 0);

    setTotalComment(totalNoteAndFeedBack)

      },[])



  const handleSeeAllClick = ()=>{
    router.push('/jobs/all')
  }
  const handleRouteToTask = ()=>{
    router.push('/tasks')
  }

  // const frameworks = [
  //    //note that the value should start with small letter while the label should start with big letter
  //    allJobs.map((item:any)=>{
  //     return (
  //       {
  //         value: item?.jobTitle,
  //         label: item?.jobTitle
  //       }
  //     )
  //    })
  // ]

  // const frameworks = allJobs.map((item: any) => {
  //   return {
  //     value: item?.jobTitle,
  //     label: item?.jobTitle,
  //   };
  // });

  const frameworks = allJobs.map((item: any) => {
    return {
      value: item?.jobTitle.toLowerCase(),
      label: item?.jobTitle.charAt(0).toUpperCase() + item?.jobTitle.slice(1),
    };
  });
  

  return (
    <main className='flex flex-col items-center space-y-4'>
        <div className=' flex items-center justify-between w-full '>
          <div className = " text-white flex items-center justify-center" ref={(node) => setPrevEl(node)}><PiCaretLeftBold size={45} className= "summaryNavButton"/></div>
                <Swiper
            // onSwiper={setSwiperRef}
            slidesPerView={3}
            // centeredSlides={true}
            // spaceBetween={0}
            // pagination={{
            // type: 'fraction',
            // }}
            // navigation={true}
            navigation={{ prevEl, nextEl }}
            modules={[Pagination, Navigation]}
            className='mySwiper summaryMainContainer w-[75vw] flex flex-row items-center justify-center gap-[41px]  '
            >
            
            <SwiperSlide><div><Summary  summaryHeader='Posted Jobs' summaryTotal={allJobs?.length}/></div></SwiperSlide>
            <SwiperSlide><div><Summary  summaryHeader='Applicants' summaryTotal={allApplicant?.length} /></div></SwiperSlide>
            <SwiperSlide><div><Summary summaryHeader='Team' summaryTotal={10} /></div></SwiperSlide>
            <SwiperSlide><div><Summary summaryHeader='Employed' summaryTotal={23} /></div></SwiperSlide>
            </Swiper>

            <div className = " text-white flex items-center justify-center" ref={(node) => setNextEl(node)}><PiCaretRightBold size={45} className= "summaryNavButton"/></div>       
        </div>
        <div className='flex flex-row gap-2 justify-evenly w-full '>
            <section className='w-[424px]'>
                  <header className='activeJobsHeader flex flex-row items-center justify-between w-full rounded-[4px] '>
                    <div className='flex flex-row items-center justify-between w-full pl-2'>
                      <div>
                        <h1 className='text-black font-[400] text-[20px]'>Active Jobs({`${90}`})</h1>
                      </div>
                      <div>
                      <Popover open={open} onOpenChange={setOpen}>
                          <PopoverTrigger asChild>
                            <Button
                              variant="outline"
                              role="combobox"
                              aria-expanded={open}
                              className="w-[200px] flex items-center justify-between activeJobsButton font-[400] text-[20px]"
                            >
                              {value
                                ? frameworks?.find((framework:any) => framework?.value === value)?.label
                                : "Select Job Role"}
                              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-[200px] p-0">
                            <Command>
                              <CommandInput placeholder="Search Job Role..." />
                              <CommandEmpty>No Job Role found.</CommandEmpty>
                              <CommandGroup>
                                {frameworks.map((framework:any) => (
                                  <CommandItem
                                    key={framework.value}
                                    value={framework?.value}
                                    onSelect={(currentValue) => {
                                      setValue(currentValue === value ? "" : currentValue)
                                      setOpen(false)
                                    }}
                                  >
                                    <Check
                                      className={cn(
                                        "mr-2 h-4 w-4",
                                        value === framework.value ? "opacity-100" : "opacity-0"
                                      )}
                                    />
                                    {framework.label}
                                  </CommandItem>
                                ))}
                              </CommandGroup>
                            </Command>
                          </PopoverContent>
                        </Popover>
                        </div>
                    </div>
                  </header>
                  <div onClick={handleSeeAllClick} className='jobRoleBackground flex flex-col gap-4 p-2'>
                    {allJobs?.map((item:any)=>{
                      return (
                        <JobRoleCard 
                        key = {item?._id}
                        jobtitle ={item?.jobTitle}
                        jobtype ={item?.jobType}
                        employmentstatus ={item?.employmentStatus}
                        jobdescription ={item?.jobDescription}/>
                      )
                    })}
                    <div className='w-full flex justify-end items-end '>
                        <button onClick={handleSeeAllClick} className='seeAllBtnColor flex items-end  text-[16px] font-[400]'>See All</button>
                        <span>
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M8.91 19.92L15.43 13.4C16.2 12.63 16.2 11.37 15.43 10.6L8.91 4.08002" stroke="#3637EE" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </span>
                    </div>
                  </div>
            </section>

            <div className='flex flex-col w-full space-y-8'>
           
              <section onClick={handleRouteToTask} className='w-full dailyTaskBackgroundColor p-2 flex flex-col gap-2'>
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
                {tasks?.reverse().slice().map((task:any)=>{
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
       

              <section className='bg-white p-2 flex flex-col space-y-5 '>
                <div className='flex items-center space-x-1'>
                    <svg width="5" height="25" viewBox="0 0 5 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="5" height="25" rx="2.5" fill="#69A959"/>
                    </svg>
                    <div className='flex items-center justify-center text-[22px] font-[400]'>
                    Comments

                    </div>
                    <div className='dailyTaskTagBackgroundColor flex items-center justify-center text-white h-[19px] w-[22px] rounded-[2px] text-[14px] font-[400]'>
                    {/* {totalComment} */}4
                    </div>

                    


                    

                  </div> 

                  <div className='gap-2'> 
                    {/* {allApplicant?.slice().reverse().map((item:any)=>{
                      return (
                    <div className='flex items-start justify-start gap-[6px]'>
                        <div>
                          <img className='h-[30px] w-[30px] rounded-full' alt='profile-img' src='https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600'/>
                        </div>
                        <div className='flex flex-col w-full'>
                          <div className='text-[14px] text-left font-[400]'>{item?.sender?.name}</div>
                          <div className='text-[12px] font-[400] text-left'>{item?.sender?.email}usoroandidiong@gmail.com</div>
                          <div className='messageBackground p-1 text-[14px] font-[400] my-2'>{item?.content}</div>
                          <Link href={`candidates/information/655139e4fb0268f5fb1a9105`}><span className='text-blue'>@andy{item?.receiver.name}</span></Link>

                          <form>
                            <input type='text' placeholder='write here...' className='messageBackground rounded-[4px] h-[40px] w-full'/>
                          </form>
                            <div className='w-full flex justify-end items-end '>
                                <div className='sendButton flex items-end  text-[14px] font-[400]'>Send</div>
                            </div>
                        </div>
                        </div>
                      )
                    })} */}

{
allJobs?.slice().reverse().map((job:any) => {
  return (
    job?.applications?.slice().reverse().map((applications:any) => {
      return (
        applications?.noteAndFeedBack?.slice().reverse().map((noteAndFeedBack:any) => {
          return (
            <div className='flex items-start justify-start gap-[6px] my-2'>
              <div>
                <img className='h-[30px] w-[30px] rounded-full' alt='profile-img' src='https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600'/>
              </div>
              <div className='flex flex-col w-full'>
                <div className='text-[14px] text-left font-[400]'>{noteAndFeedBack?.sender?.name}</div>
                <div className='text-[12px] font-[400] text-left'>{noteAndFeedBack?.sender?.email}usoroandidiong@gmail.com</div>
                <div className='messageBackground p-1 text-[14px] font-[400] my-2'>{noteAndFeedBack?.content}</div>
                <div className=''>
                <Link href={`jobs/${job._id}/candidates/information/655139e4fb0268f5fb1a9105`}><span className='text-blue-800'>@{noteAndFeedBack?.receiver.name}</span></Link>
                </div>
                {/* <form>
                  <input type='text' placeholder='write here...' className='messageBackground rounded-[4px] h-[40px] w-full'/>
                </form>
                <div className='w-full flex justify-end items-end '>
                  <div className='sendButton flex items-end text-[14px] font-[400]'>Send</div>
                </div> */}
              </div>
            </div>
          )
        })
      )
    })
  )
})
}




                          
                  </div>
              </section>

            </div>
        </div>
    </main>
  )
}

export default Overview



{/* <Swiper
onSwiper={setSwiperRef}
slidesPerView={3}
centeredSlides={true}
spaceBetween={30}
pagination={{
  type: 'fraction',
}}
navigation={true}
modules={[Pagination, Navigation]}
className='mySwiper summaryMainContainer flex flex-row gap-[41px] '
>
<SwiperSlide> <div><Summary/></div></SwiperSlide>
<SwiperSlide> <div><Summary/></div></SwiperSlide>
<SwiperSlide> <div><Summary/></div></SwiperSlide>
<SwiperSlide> <div><Summary/></div></SwiperSlide>
</Swiper> */}