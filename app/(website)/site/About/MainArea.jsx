import Image from "next/image";
import imageNine from "../images/imageNine.svg"
const MainArea = () => {
  return (
    <div className=" mainArea ">
      <div className="detailsTwo">
      <h2 className=" font-bold text-2xl">Our Story</h2>
      <p>(Your company name) was founded with a simple yet powerful goal: to simplify and improve HR<span className="block mt-1">
        Processes for organization of all sizes. Our journey began when a group of HR professionals and tech
      </span><span className=" block mt-1">enthusiasts  came together to create a solution that would make HR management more efficient</span>
      <span className="block mt-1">effective, and user friendly.</span></p>
      </div>


    <Image src={imageNine} alt="Image nine" />

    </div>
  );
};

export default MainArea;
