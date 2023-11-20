"use client";

import React from 'react';

import Image from "next/image";
import { UserAuth } from "../context/AuthContext";
import { useState, useEffect } from "react";
// import rightArrow from "../images/arrowright2.svg";
import userEdit from "../images/useredit.svg";
import profiler from "../images/profile.png";
import editor from "../images/Frame 1518.svg";
import Link from "next/link";
const ProfilePart = () => {
  const { user } = UserAuth();
  const [loading, setLoading] = useState(true);

  const fileInputRef = React.useRef();

  const handleImageClick =() => {

    fileInputRef.current.click()
  };

  const handleFileSelect = (event) => {
    const selectedFile = event.target.files[0]

    if (selectedFile) {
        console.log('Selected file:', selectedFile)
    }
  }

  useEffect(() => {
    const checkAuthentication = async () => {
      await new Promise((resolve) => setTimeout(resolve, 1));
      setLoading(false);
    };

    checkAuthentication();
  }, [user]);


 
  return (
    <>
      {loading ? null : !user ? (
        <div>
          <Link href="/SignUp">
            <Image
              src={profiler}
              alt="no-user"
              quality={100}
              className="cursor-pointer mover"
            />
          </Link>
          <p>Click the icon to add image</p>
        </div>
      ) : (
        <div className="p-8 ">
          <h1 className="text-center text-3xl">Settings</h1>
          <div className="preview">
            <Image
              src={user.photoURL}
              alt="User-signed-in"
              width={60}
              height={20}
              quality={100}
              className=" profile-mover"
            />
            <h1 className="text-center">{user.displayName}</h1>
          </div>

          <div className="vertical-rule"></div>

          <div className="setting-form">
            <form className="form">
              <label htmlFor="full-name">Full Name:</label>
              <input
                type="text"
                value={localStorage.getItem("Cname")}
                id="user-company-name"
              />

              <label htmlFor="email">Email</label>
              <input
                type="email"
                value={localStorage.getItem("Cmail")}
                id="email"
              />

              <label>Mobile:</label>
              <input
                type="tel"
                name="tel"
                value={localStorage.getItem("Ctelephone")}
                id="user-company-telephone"
              />

              <input type="file" accept="image/*" ref={fileInputRef} style={{display: 'none'}} onChange={handleFileSelect} />

              <label>Address</label>
              <input
                type="text"
                name="address"
                value={localStorage.getItem("Caddress")}
                id="user-company address"
              />

              <input
                type="submit"
                value="Done"
                className="text-white bg-green-800"
              />
            </form>
          </div>
          {/* <div className="paragraph">
            <p>{user.displayName}</p>
            <p className="text-xs">{user.email}</p>
          </div> */}
           <Image
            src={editor}
            alt="change-profile"
            className=" cursor-pointer  setting-camera"
            onClick={handleImageClick}
          />

          {/*<div className="profile-setting">
            <Image
              src={userEdit}
              alt="Edit user details"
              width={25}
              className=" cursor-pointer  userEdit"
            />
            <p className="profile-setting-p">Profile settings</p>
          </div>
          <Image
            src={rightArrow}
            alt="right-arrow"
            width={25}
            className=" cursor-pointer  right-arrow"
          /> */}
        </div>
      )}
    </>
  );
};

export default ProfilePart;
