import Image from "next/image";
import firstImage from "../../../../../app/(website)/site/images/firstImage.svg";
import Frame from "../../../../../app/(website)/site/images/Frametop.svg";
const HeaderOne = () => {
  return (
    <div className=" p-5 mt-20 ">
      <div className="headerOne ml-4">
        <div className="mainDetails">
          <h2 className=" text-3xl mb-4">Real-time Collaboration</h2>
            1. Time-Saving Automation:
            <span className="block">
              Say goodbye to manual paperwork and repetitive administrative
              tasks. Our HR solution automates routines processes, from
              onboarding to performance reviews, allowing your team to focus on
              strategic initiatives.
            </span>
            <div className=" mt-6">
              2. Data-Driven-Decision-Making
              <span className="block">
                Access Insightful analytics and reporting features to make
                informed HR decisions. Measure key performance indicators, track
                trends, and gain valuable insights into your workforce.
              </span>
            </div>
          
        </div>

        <div className="imgOne">
          <Image src={firstImage} alt=" relative illustration" width={500} />
          <Image
            src={Frame}
            alt="second-image"
            className=" seconder absolute top-[54rem] right-[23rem]"
          />
        </div>
      </div>
    </div>
  );
};

export default HeaderOne;
