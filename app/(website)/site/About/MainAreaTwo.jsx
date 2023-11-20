import Image from "next/image";
import sectionImage from '../images/Section.svg'
const MainAreaTwo = () => {
  return (
    <div className="mainAreaTwo">
    <Image src={sectionImage} alt="Section-Image" />
      <div className="detailsTwo">
        <h2 className=" font-bold text-2xl">Our Philosophy:</h2>
        <p>
          (Your company name) was founded with a simple yet powerful goal: to
          simplify and improve HR
          <span className="block mt-1">
            Processes for organization of all sizes. Our journey began when a
            group of HR professionals and tech
          </span>
          <span className=" block mt-1">
            enthusiasts came together to create a solution that would make HR
            management more efficient
          </span>
          <span className="block mt-1">effective, and user friendly.</span>
        </p>
      </div>

      
    </div>
  );
};

export default MainAreaTwo;
