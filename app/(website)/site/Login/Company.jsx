"use client";
import React, { useState } from "react";

import Link from "next/link";
/**
 * Renders a form for the user to enter their information.
 * @returns {JSX.Element} The rendered form component.
 */
const Company = () => {
  const [inputs, setInputs] = useState({
    fName: "",
    CName: "",
    CMail: "",
    password: "",
    CTelephone: "",
    cMotto: "",
    cAddress  : "",
  });

  const [routing, setRouting] = useState("/Login");

  /**
   * Handles form submission.
   */
  const handleSubmit = () => {
    if (
      inputs.fName === "" ||
      inputs.CName === "" ||
      inputs.CMail === "" ||
      inputs.password === "" ||
      inputs.CTelephone === "" ||
      inputs.cMotto === "",
      inputs.cAddress === "" 
    ) {
      alert("Please fill in all fields");
    } else {
      setRouting("/");
    }
  };

  /**
   * Handles input changes.
   * @param {React.ChangeEvent<HTMLInputElement>} event - The input change event.
   */
  const handleChange = (event) => {
    const { id, value } = event.target;
    setInputs((prevInputs) => ({ ...prevInputs, [id]: value }));
    localStorage.setItem("fname", inputs.fName);
    localStorage.setItem("Cname", inputs.CName);
    localStorage.setItem("Cmail", inputs.CMail);
    localStorage.setItem("password", inputs.password);
    localStorage.setItem("Ctelephone", inputs.CTelephone);
    localStorage.setItem("Cmotto", inputs.cMotto);
    localStorage.setItem("Caddress", inputs.cAddress);
  };

  return (
    <form id="contact-form">
      <input
        type="text"
        onChange={handleChange}
        placeholder="Full Name"
        required
        id="fName"
      />
      <input
        type="text"
        onChange={handleChange}
        placeholder="Company Name"
        required
        id="CName"
      />
      <input
        type="email"
        onChange={handleChange}
        id="CMail"
        required
        placeholder="Company Email"
      />
      <input
        type="password"
        onChange={handleChange}
        id="password"
        required
        placeholder="Password"
      />

      <input
        type="tel"
        id="CTelephone"
        placeholder="Company's telephone"
        onChange={handleChange}
      />
      <input
        type="text"
        name="motto"
        id="cMotto"
        placeholder="Company's motto"
        onChange={handleChange}
      />

      <input
        type="text"
        id="cAddress"
        name="address"
        placeholder="Company Address"
        onChange={handleChange}
      />

      <Link href={routing} onClick={handleSubmit}>
        <input
          type="submit"
          value="Continue"
          id="submit"
          className="text-white bold"
        />
      </Link>
    </form>
  );
};

export default Company;
