'use client'
import { getSingleJob } from "@/backend/actions/job.actions"
import ApplicantCard from "@/components/cards/ApplicantCard"
import JobRoleCard from "@/components/cards/JobRoleCard"
import AllJobsLeftSideBarSearchFilter from "@/components/sharedComponents/AllJobsLeftSideBarSearchFilter"
import AllJobsNavSearchFilter from "@/components/sharedComponents/AllJobsNavSearchFilter"
import { Checkbox } from "@/components/ui/checkbox"
import Link from "next/link"
import { useEffect,useState } from "react"
import { useRouter } from 'next/navigation';
import Navbar from "@/components/sharedComponents/Navbar"






export default function Home({ params }: { params: { jobId: string } }) {
    const router = useRouter()
    console.log("ji",params?.jobId)
    const [applicant, setApplicant] = useState<any>([])
    const [loading, setLoading] = useState<any>(true)

    // useEffect(()=>{ 
      
        
    //     const me = async () =>{
    //       const jobId = params?.jobId
    //       const res = await getSingleJob({jobId:params?.jobId})
    //       console.log(res?.applications)
    //       setApplicant(res) 
    //       console.log("applicant",applicant)
      
    // }  
    // me()
    // },[params?.jobId])




    useEffect(() => {
        const fetchData = async () => {
          try {
            const jobId = params?.jobId;
            const res = await getSingleJob({ jobId: params?.jobId });
            // setApplicant(res?.applications);
            // console.log("applicant", applicant);
            return res?.applications
          } catch (error) {
            console.error("Error fetching single job:", error);
          }
        };
    
        const a = fetchData().then((a)=>{
            setApplicant(a)
        });
        
    }, [params?.jobId]);
    
    // console.log(applicant)
    const handleClick = (e:any,id:any)=>{
        e.preventDefault()
        router.push(`candidates/information/${id}`)
    }
    const [searchQuery, setSearchQuery] = useState<string>('');

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };
  const filteredApplicant = applicant.filter((applicant:any) =>
    applicant.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
        <div className="">
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
                        {filteredApplicant?.map((applicant:any)=>{

                            return (
                        <div onClick={(e)=>handleClick(e,applicant?._id)}>
                        <ApplicantCard name={applicant?.name} email={applicant?.email}
                        mobile={applicant?.mobile} linkedin={applicant?.linkedin} resume={applicant?.resume}
                        passport={applicant?.passport} yearsofexperience={applicant?.yearsofexperience} 
                        portfolioworksample={applicant?.portfolioworksample}
                        coverletter={applicant?.coverletter} noteAndFeedBack={applicant?.noteAndFeedBack}/>
                        </div>
                            )
                        })}
                        
                        {/* <ApplicantCard/>
                        <ApplicantCard/>
                        <ApplicantCard/>
                        <ApplicantCard/>
                        <ApplicantCard/>
                        <ApplicantCard/>
                        <ApplicantCard/>
                        <ApplicantCard/> */}
                    </div>
                </section>
            </div>
        
    </div>
    </div>
  )
}



  
















