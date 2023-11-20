import Image from "next/image";
import bulb from '../images/bulb.svg';
const SectionOne = () => {
    return (
        <div className="sectionOne">
            <h1 className=" font-semibold text-center">Innovation</h1>
            <p>We're committed to staying at the forefront of HR technology
            <span className='block mt-1'>
                Our solutions are designed with cutting-edge features and
            </span>
            <span className='block mt-1'>
                constant updates to meet the evolving needs of our clients
            </span>
            </p>

            <Image 
                src={bulb}
                alt="Innovated-bulb"
            />
        </div>
    );
}

export default SectionOne;
