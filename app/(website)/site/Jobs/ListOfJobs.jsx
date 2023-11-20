import Link from "next/link";
const ListOfJobs = ({ jobber, jobberTitle, deadline, handleClick }) => {
  return (
    <div className=" border-b-2 jobDiv">
      <h2 className=" text-2xl mb-2">{jobberTitle}</h2>
      <p className=" font-normal text-slate-600">{jobber}</p>
      <ul className="mt-5 flex mb-3  gap-3">
        <li className="mr-5">Remote</li>
        <li className="list-disc mr-5">Design Team</li>
        <li className="list-disc mr-5">2 years </li>
        <li className="list-disc">Nigeria</li>
      </ul>
      <p className="text-slate-600">Deadline: {deadline}</p>
      <div className=" flex">
        <p className="text-slate-600 mt-5">Qualifications:</p>
        <div className="degree">Bachelors degree</div>
      </div>
      <Link href='/Jobs/Applicant-form'>
      <button onClick={handleClick} className="ApplyButton">Apply</button>
      </Link>
    </div>
  );
};

export default ListOfJobs;
