import SectionOne from "./SectionOne";
import SectionTwo from "./SectionTwo";
import SectionThreeMain from "./SectionThreeMain";
const SectionThree = () => {
  return (
    <div className="sectionPart">
      <h2 className="font-bold text-2xl text-center">What Sets Us Apart:</h2>
      <div className="section">
        <SectionOne />
        <SectionTwo />
        <SectionThreeMain />
      </div>
    </div>
  );
};

export default SectionThree;
