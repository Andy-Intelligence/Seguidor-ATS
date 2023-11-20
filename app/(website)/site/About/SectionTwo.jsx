import Image from "next/image";
import computer from '../images/exceptional.svg'
const SectionTwo = () => {
    return (
        <div className="sectionOne">
            <h1 className=" font-semibold text-center" >User-Centric Design</h1>
            <p>Our User-friendly interfaces and intuitive workflows that 
                <span className="block mt-1">
                    both HR professionals and employees find our solutions a
                </span>
                <span className="block mt-1">pleasure to use</span>
            </p>
            <Image src={computer} alt="working on the applicant" />
        </div>
    );
}

export default SectionTwo;
