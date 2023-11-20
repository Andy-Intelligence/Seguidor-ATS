import Footer from "../comps/Footer/Footer";
import Nav from "../comps/Nav";
import ContactHeader from "./ContactHeader";
import ContactForm from "./ContactForm";
import Faqs from "./Faqs";
const Page = () => {
  return (
    <div className="wholeContact">
      <Nav />
      <ContactHeader />
      <div className="gathering mt-28">
        <div className=" p-7 faqs">
          <h2 className=" font-bold mb-8 ">FAQs</h2>
          <Faqs params="How do i create an account on Seguidor?" />
          <Faqs params="How can i update my profile information?" />

          <Faqs params="What should i do if i forgot my password?" />
          <Faqs params="How to onboard a recruiter" />
          <Faqs params="How do i  create and post jobs?" />
        </div>
        <ContactForm />
      </div>
      <Footer />
    </div>
  );
};

export default Page;
