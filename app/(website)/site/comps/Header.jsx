"use client";
import List from "./List";
import { useState, useEffect } from "react";
import Image from "next/image";
import Search from "./Search";
// import { UserAuth } from "../context/AuthContext";
import Link from "next/link";
import mainLogo from "../images/Logo.png";
import profile from "../images/profile.png";
import { useRouter } from "next/navigation";
const Header = () => {
  const router = useRouter()
  // const { user } = UserAuth();
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const checkAuthentication = async () => {
  //     await new Promise((resolve) => setTimeout(resolve, 1));
  //     setLoading(false);
  //   };

  //   checkAuthentication();
  // }, [user]);

  return (
    // <header className="header bg-red-500">
    <header className="text-black p-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/">
          <div className="text-white text-5xl">
            {/* <Image src={mainLogo} alt="Main-logo" className="semiLogo" width={50} height={50} /> */}
            <span className="text-3xl font-[700]">Seguidor</span>
          </div>
        </Link>
        <nav className="flex items-center justify-center ml-6 space-x-4">
          <span onClick={() => router.replace('/site')} className="text-black cursor-pointer">
            Home
          </span>
          <div className="flex items-center space-x-4">
            <span onClick={() => router.replace('/site/About')} className="text-black cursor-pointer">
              About
            </span>
            <span onClick={() => router.replace('/site/joblisting')} className="text-black cursor-pointer">
              Jobs
            </span>
            <span onClick={() => router.replace('/site/contact')} className="text-black cursor-pointer">
              Contact Us
            </span>
          </div>
        </nav>
        <Search />
        <Link href="/Candidate">
          <div className="flex items-center text-black cursor-pointer">
            <img
              src="https://th.bing.com/th/id/OIP.rmim2jYzNpSCslo60INohQHaF9?rs=1&pid=ImgDetMain"
              alt="Profile Photo"
              width={25}
              height={20}
              quality={100}
              className="rounded-full"
            />
            <div className="ml-2">
              <p className="text-sm font-semibold">Temp Dummy Name</p>
              <p className="text-xs">dummyemail@gmail.com</p>
            </div>
          </div>
        </Link>
      </div>
    </header>
  );
};

export default Header;
