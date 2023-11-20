"use client";
import ProfilePart from "./profilePart";
import ProfileDetails from "./profileDetails.jsx";
import CandidateHeader from "./CandidateHeader";
import Footer from '../comps/Footer/Footer'
import Nav from "../comps/Nav";
const Page = () => {
  return (
    <div>
      <Nav />
      <div className="mainProfile">
        {/* <CandidateHeader />/ */}
        <ProfilePart />
        <ProfileDetails />
      </div>
      <Footer />
    </div>
  );
};

export default Page;
