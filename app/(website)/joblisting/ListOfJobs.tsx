import Link from "next/link";
import { formatDate } from "@/lib/utils";

interface JobProps{
  jobTitle:string;
jobDescription:string;
jobType:string;
teamDept:string;
yrsOfExp:string;
location:string;
deadline:string;
qualifications:string;
  handleClick?:()=>void;
}
const ListOfJobs = ({ jobTitle,
  jobDescription,
  jobType,
  teamDept,
  yrsOfExp,
  location,
  deadline,
  qualifications, handleClick }:JobProps) => {
  return (
    <div className="whiteBgFF border-b-2 jobDiv">
      <h2 className=" text-2xl mb-2">{jobTitle}</h2>
      <p className=" font-normal text-slate-600">{jobDescription}</p>
      <ul className="mt-5 flex mb-3  gap-3">
        <li className="mr-5">{jobType}</li>
        <li className="list-disc mr-5">{teamDept}</li>
        <li className="list-disc mr-5">{yrsOfExp} years </li>
        <li className="list-disc">{location}</li>
      </ul>
      <p className="text-slate-600">Deadline: {formatDate(deadline)}</p>
      <div className=" flex">
        <p className="text-slate-600 mt-5">Qualifications:</p>
        <div className="degree">{qualifications}</div>
      </div>
      {/* <Link href='/Jobs/Applicant-form'> */}
      <button onClick={handleClick} className="ApplyButton">Apply</button>
      {/* </Link> */}
    </div>
  );
};

export default ListOfJobs;
