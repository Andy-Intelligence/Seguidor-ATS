import Image from "next/image";
import computer from '../images/computer.svg'
const SectionThreeMain = () => {
    return (
        <div className="sectionOne">
          <h1 className=" font-semibold text-center">exceptional Support</h1>  
          <p>We're more than a software provider; We're your partner in HR
          <span className="block mt-1">
            success. Our dedicated support team is ready to assist you
          </span>
          <span className="block mt-1">
            every step of the way
          </span>
          </p>

          <Image src={computer} alt="Computer"  />
        </div>
    );
}

export default SectionThreeMain;
