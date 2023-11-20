import Image from "next/image";
import contactImage from '../images/aboutimage.svg';
const ContactHeader = () => {
    return (
        <div className="p-7 contact">
            <h2 className=" text-center text-2xl">SEGUIDOR</h2>
            <Image src={contactImage} alt="contactImage" />
        </div>
    );
}

export default ContactHeader;
