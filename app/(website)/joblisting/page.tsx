'use client'
import { getAllPostedJobs } from "@/backend/actions/job.actions";
// import Nav from "../comps/Nav";
import ListOfJobs from "./ListOfJobs";
import { useState,useEffect } from "react";
import {useRouter} from 'next/navigation'


const Page = () => {
    
const router = useRouter()

const [allJobs,setAllJobs]=useState<any>()

  useEffect(()=>{
    console.log("firing")
    const fetchData = async () => {
      try {
        // const jobId = params?.id;
        const res = await getAllPostedJobs();
        setAllJobs(res)
        // setApplicant(res?.applications);
        // console.log("applicant", applicant);
        return res
      } catch (error) {
        console.error("Error fetching single job:", error);
      }
    };
    
    fetchData()
  //   .then((a)=>{
  //     setApplicant(a)
  
  // });
},[])


  return (
    <div>
      {/* <Nav /> */}
      <div className="flex items-center justify-center p-3 components w-full">
        {allJobs?.map((item:any)=>{
          return (
            <ListOfJobs
            jobTitle={item?.jobTitle}
            jobDescription={item?.jobDescription}
            jobType={item?.jobType}
            teamDept={item?.teamDept}
            yrsOfExp={item?.yrsOfExp}
            location={item?.location}
            deadline={item?.deadline}
            qualifications={item?.qualifications}
            handleClick={() =>{
              router.push(`apply/${item?._id}`)
            }}
          />
          )
        })}
       
        
      </div>
    </div>
  );
};

export default Page;
