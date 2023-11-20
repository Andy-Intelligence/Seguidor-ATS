"use client";
import ProfilePart from "./profilePart";
<<<<<<< HEAD
import ProfileDetails from "./profileDetails.jsx";
=======
import ProfileDetails from "./ProfileDetails.jsx";
>>>>>>> bffc7191ef00d5992df496da7940cff4f640a380
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
