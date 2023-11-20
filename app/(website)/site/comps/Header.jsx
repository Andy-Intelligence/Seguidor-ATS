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
    <header className="header ">
      <div className="flex align-center">
        <Link href="/">
          <h1 className="font-normal text-5xl">
            <Image src={mainLogo} alt="Main-logo" className="semiLogo" />
          </h1>
        </Link>
        <nav>
          <ul className="items-center mt-5 ml-10 display-inline">
            <span onClick={()=>router.replace('/site')} className="home">
              Home
              {/* <Link href="/">
                <List list="Home" />
              </Link> */}
            </span>
            <div  className="absolute lister">
              {/* <Link href="/site/About">
                <List list="About US" />
              </Link> */}

              <span onClick={()=>router.replace('/site/About')}>
                About
              </span>

              <span onClick={()=>router.replace('/site/joblisting')}>
                  Jobs
              </span>
              <span onClick={()=>router.replace('/site/contact')}>
                  Contact Us
              </span>
              {/* <Link href="/joblisting">
                <List list="Jobs" />
              </Link>
              <Link href="/contact">
                <List list="Contact Us" />
              </Link> */}
            </div>
          </ul>
        </nav>
        <Search />
      </div>
      {/* {loading ? null : !user ? ( */}
        <Link href="/SignUp">
          <button className="login">Login</button>
          <button className="register">Sign Up</button>
        </Link>
       {/* ) : ( */}
        <Link href="/Candidate">
          <div className="user-details cursor-pointer">
            <img
              // src={user.photoURL}
              src="https://th.bing.com/th/id/OIP.rmim2jYzNpSCslo60INohQHaF9?rs=1&pid=ImgDetMain"
              alt="Profile Photo"
              width={25}
              height={20}
              quality={100}
              className="profiler"
            />
            <div className="titles">
              {/* <p className="userName">{user.displayName}</p> */}
              <p className="userName">Temp Dummy Name</p>
              {/* <p className="userEmail">{user.email}</p> */}
              <p className="userEmail">"dummyemail@gmail.com"</p>
            </div>
          </div>
        </Link>
      {/* )} */}
    </header>
  );
};

export default Header;
