import Image from "next/image";
import Company from './Company';
import illustration from "../images/Rectangle 7.svg";
const page = () => {
  return (
    <>
      <div>
        <Image src={illustration} alt="logo" quality={100} className="img" />
        <div className="absolute bottom-1 left-0  floater ">
          <p className="text-white  font-semibold text-2xl text-center">
            Streamline Your Recruitment Effort with{" "}
            <span className="block text-white">
              our Advanced Application Tracking System{" "}
            </span>
          </p>
        </div>
      </div>
      <div className="company">
        <h1 className="font-bold text-4xl text-center">Logo</h1>
        <h2 className="text-center">Kudos You Are Almost Done!</h2>
      </div>
      <Company />
    </>
  );
};

export default page;
