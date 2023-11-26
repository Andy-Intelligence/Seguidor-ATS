'use client'
import { getAllApplicant, getAllPostedJobs, getSingleJob } from "@/backend/actions/job.actions"
import ApplicantCard from "@/components/cards/ApplicantCard"
import JobRoleCard from "@/components/cards/JobRoleCard"
import AllJobsLeftSideBarSearchFilter from "@/components/sharedComponents/AllJobsLeftSideBarSearchFilter"
import AllJobsNavSearchFilter from "@/components/sharedComponents/AllJobsNavSearchFilter"
import { Checkbox } from "@/components/ui/checkbox"
import Link from "next/link"
import { useEffect,useState } from "react"
import { useRouter } from 'next/navigation';
import Navbar from "@/components/sharedComponents/Navbar"






export default function Home() {
    const router = useRouter()

    const [allApplicant, setAllApplicant] = useState<any>()
    const [applicants, setApplicants] = useState<any>()
    const [loading, setLoading] = useState<any>(true)

    



    useEffect(() => {
        const fetchData = async () => {
          try {
   
            // const res = await getAllApplicant();
            const res = await getAllPostedJobs();
            // setApplicant(res?.applications);
            // console.log("applicant", applicant);
            console.log(res)

            return res
          } catch (error) {
            console.error("Error fetching all Applicant:", error);
          }
        };
    
        const a = fetchData().then((a)=>{
            setAllApplicant(a)

        });
        
    }, []);


    useEffect(()=>{ 
      
        
        const me = async () =>{
            {const a = allApplicant &&
                allApplicant?.slice().reverse().map((job:any) => {
                  return (
                    job?.applications?.slice().reverse().map((applicant:any) =>{
                      return (
                        <div onClick={(e)=>handleClick(e,job?._id,applicant?._id)}>
                        <ApplicantCard 
                        key={applicant?._id}
                        name={applicant?.name} email={applicant?.email}
                        mobile={applicant?.mobile} linkedin={applicant?.linkedin} resume={applicant?.resume}
                        passport={applicant?.passport} yearsofexperience={applicant?.yearsofexperience} 
                        portfolioworksample={applicant?.portfolioworksample}
                        coverletter={applicant?.coverletter} noteAndFeedBack={applicant?.noteAndFeedBack}/>
                        </div>
                      )
                    })
                  )
                })
                setApplicants(a)
                }
      
    }  
    me()
    },[])

    
    // console.log(applicant)
    const handleClick = (e:any,jobid:any,id:any)=>{
        e.preventDefault()
        router.push(`jobs/${jobid}/candidates/information/${id}`)
    }


    const [searchQuery, setSearchQuery] = useState<string>('');

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

//     const filteredApplicant = allApplicant.filter((applicant:any) =>
//     applicant.name.toLowerCase().includes(searchQuery.toLowerCase())
//   );



  return (
    <div>
        <div className="mb-4">
            <Navbar onSearch={handleSearch}/>  
      </div>
    
    <div className="flex flex-col">
            <AllJobsNavSearchFilter displaySwitch={false}/>

            <div className="flex flex-row gap-4 p-2">
                <section>
                <AllJobsLeftSideBarSearchFilter/>
                </section>
                <section className=" w-full flex flex-col gap-2">
                    <div className="flex flex-row items-center justify-evenly w-full">
                        <div className="candidateStatusFilter flex items-center space-x-2 p-2 rounded-[8px]">
                            <Checkbox id="terms" />
                            <label
                                htmlFor="terms"
                                className="flex items-center text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                Sourced <div className="bg-black rounded-full w-[5px] h-[5px] mx-1"></div> [200]  Cand
                            </label>
                        </div>
                        <div className="candidateStatusFilter flex items-center space-x-2 p-2 rounded-[8px]">
                            <Checkbox id="terms" />
                            <label
                                htmlFor="terms"
                                className="flex items-center text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                Applied <div className="bg-black rounded-full w-[5px] h-[5px] mx-1"></div> [200] Cand
                            </label>
                        </div>
                        <div className="candidateStatusFilter flex items-center space-x-2 p-2 rounded-[8px]">
                            <Checkbox id="terms" />
                            <label
                                htmlFor="terms"
                                className="flex items-center text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                Interview <div className="bg-black rounded-full w-[5px] h-[5px] mx-1"></div> [200] Cand
                            </label>
                        </div>
                        <div className="candidateStatusFilter flex items-center space-x-2 p-2 rounded-[8px]">
                            <Checkbox id="terms" />
                            <label
                                htmlFor="terms"
                                className="flex items-center text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                Rejected <div className="bg-black rounded-full w-[5px] h-[5px] mx-1"></div> [200] Cand
                            </label>
                        </div>
                    </div>
                    <div className="applicantCardMainContainer grid grid-cols-3 gap-4 p-2">
                        {/* <Link href={'/candidates/information'}> */}
                        {/* {filteredApplicant?.map((applicant:any)=>{

                            return (
                        <div onClick={(e)=>handleClick(e,applicant?._id)}>
                        <ApplicantCard 
                        key={applicant?._id}
                        name={applicant?.name} email={applicant?.email}
                        mobile={applicant?.mobile} linkedin={applicant?.linkedin} resume={applicant?.resume}
                        passport={applicant?.passport} yearsofexperience={applicant?.yearsofexperience} 
                        portfolioworksample={applicant?.portfolioworksample}
                        coverletter={applicant?.coverletter} noteAndFeedBack={applicant?.noteAndFeedBack}/>
                        </div>
                            )
                        })} */}
                        {applicants}

                        

                    </div>
                </section>
            </div>
        
    </div>
    </div>
  )
}



  
















