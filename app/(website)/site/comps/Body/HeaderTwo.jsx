import Image from "next/image";
import secondImage from "../../../../../app/(website)/site/images/secondImage.svg";
const HeaderTwo = () => {
  return (
    <div className="secondDetails">
      <div className="imgOne">
        <Image src={secondImage} alt="Second Image" />
      </div>

      <div>
        <h2 className=" font-bold mb-4">The Power of Effective Candidate Filtering in Modern Recruitment</h2>
        <div>
          <ol>
            <li className=" list-decimal">Streamline the Selection Process:</li>
            <ul className="pl-5">
              <li className=" list-disc ">The sheer volume of job applications can be overwhelming, Candidate filtering narrows down the list, saving valuable time and resources.</li>
              
            </ul>
            <li className="list-decimal mt-5">Qualifying Candidates:</li>
            <ul className="pl-5">
              <li className=" list-disc ">Not every applicant possesses the skills, experience, or qualifications required for the job. Filtering allows you to identify the most qualified individuals</li>
            </ul>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default HeaderTwo;
