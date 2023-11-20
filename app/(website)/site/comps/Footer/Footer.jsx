import Image from 'next/image'
import Logo from './logo';
import Subscribe from './Subscribe'
import FooterNav from './FooterNav'
import SocialPlatform from './SocialPlatform'
const Footer = () => {
    return (
        <footer>
            <Subscribe />
            <Logo />
            <FooterNav />
            <SocialPlatform />
        </footer>
    );
}

export default Footer;
