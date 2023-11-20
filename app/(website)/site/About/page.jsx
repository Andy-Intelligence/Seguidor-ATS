import Nav from "../../../../app/(website)/site/comps/Nav";
import HeaderText from './HeaderText';
import HeaderImage from './HeaderImage';
import MainArea from './MainArea';
import MainAreaTwo from './MainAreaTwo'
import Footer from "../comps/Footer/Footer";
import SectionThree from './SectionThree'
const Page = () => {
    return (
        <div>
            <Nav />
            <div className=" p-7">
            <HeaderText />
            <HeaderImage />
            <MainArea />
            <MainAreaTwo />
            <SectionThree />
            </div>
            <Footer />
        </div>
    );
}

export default Page;
