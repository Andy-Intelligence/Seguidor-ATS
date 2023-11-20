import React from "react";
// import ellipse from "@/app/images/Ellipse 3.svg";
import ellipse from "../../../../../app/(website)/site/images/Ellipse 3.svg";
import Image from "next/image";
import main from "../../../../../app/(website)/site/images/main.svg";
import HeaderOne from "./HeaderOne";
import Link from "next/link";
import HeaderTwo from "./HeaderTwo";
import LinkedIn from "../../../../../app/(website)/site/images/LinkedIn.svg";
import JobberMan from "../../../../../app/(website)/site/images/jobberman.svg";
import Jora from "../../../../../app/(website)/site/images/Jora.svg";
import dribble from "../../../../../app/(website)/site/images/dribble.svg";
const Body = () => {
  return (
    <main>
      <div className="body ">
        <div>
          <h2 className=" working p-7 text-3xl mt-7 ml-5 font-semibold">
            Unlock the Power of Modern HR with
            <span className="block">SEGUIDOR</span>
            <span className="block mt-4 font-normal">
              <p className="headerText">
                {" "}
                Seamless, efficient, and comprehensive HR solutions tailored{" "}
              </p>
              <p className="headerTextTwo font-normal "> to your needs</p>
            </span>
          </h2>

          <Link href="site/SignUp">
            <button className="getStarted">Get Started</button>
          </Link>
          <div className=" spooter flex mt-14 align-center describe">
            <small>Effortless Task Management</small>
            <Image src={ellipse} alt="dot" />
            <small>Real-time Collaboration</small>
            <Image src={ellipse} alt="dot"/>
            <small>Intuitive User Interface</small>
            <Image src={ellipse} alt="dot"/>
            <small>Seamless Integration</small>
          </div>
        </div>
        <Image src={main}  alt="main-image"
          className="spooterImg"
        />
      </div>
      <div className="mid-level  mb-15 p-8">
        <h2 className=" ml-4 text-2xl">Trusted By:</h2>
        <div className="trusted">
          <Image src={JobberMan} className="ml-9" alt="jobberman" />
          <Image src={LinkedIn} alt="LinkedIn" />
          <Image src={dribble} alt="dribble" />
          <Image src={Jora} alt="jora" />
        </div>
      </div>
      <div className=" p-6">
        <HeaderOne />
        <HeaderTwo />
      </div>
    </main>
  );
};

export default Body;
