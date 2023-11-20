import rightArrow from '../images/arrowright2.svg';
import Image from 'next/image';
const Faqs = ({params}) => {
    return (
        <div>
            <span className='faqSpan mb-3'>
                <p className='contact-p'>{params}</p>
                <Image src={rightArrow} alt='Right Arrow' />
            </span>
        </div>
    );
}

export default Faqs;
