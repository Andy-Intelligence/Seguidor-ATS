"use client"
import React from 'react'
import {BiLogoLinkedin} from 'react-icons/bi'
import { Checkbox } from "@/components/ui/checkbox"
import Link from 'next/link'



interface ApplicantProps {
    name?:string;
     email?:string;
    mobile?:string;
     linkedin?:string;
      resume?:string;
    passport?:string;
    yearsofexperience?:string;
    portfolioworksample?:string;
    coverletter?:string;
     noteAndFeedBack?:any;
}



const ApplicantCard = ({
    name,
    email,
    mobile,
    linkedin,
    resume,
    passport,
    yearsofexperience,
    portfolioworksample,
    coverletter,
    noteAndFeedBack,}:ApplicantProps) => {
  return (
    <div className='applicantCard flex flex-col max-w-[250px] gap-4 rounded-[4px] p-2'>
  {/* <Link href={`/candidates/information/${"htkntnngdd"}`}> */}
    <div className='flex flex-col items-center'>
      <div className='flex items-start justify-start'>
        <img
          className='h-16 w-16 rounded-full'
          alt='profile-img'
          src={passport}
          // onError={(e:any) => {
          //   e.target.onerror = null;
          //   e.target.src = '/fallback-image.png';
          // }}
        />
      </div>
      <div className='flex flex-col items-center text-left justify-center mt-2'>
        <h1 className='text-[16px] font-[400]'>{name}</h1>
        <h3 className='text-[12px] font-[500]'>{yearsofexperience} year Experience</h3>
      </div>
    </div>
  {/* </Link> */}

  <div className='flex space-x-8'>
    <div className='relative cursor-pointer transition-transform transform group'>
      <div className='bg-gray-300 w-12 h-12 rounded-full flex items-center justify-center'>
        <svg width='22' height='22' viewBox='0 0 22 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
          {/* Replace this path with your SVG path */}
          <path d='M20.97 17.33C20.97 17.69 20.89 18.06 20.72 18.42C20.55 18.78 20.33 19.12 20.04 19.44C19.55 19.98 19.01 20.37 18.4 20.62C17.8 20.87 17.15 21 16.45 21C15.43 21 14.34 20.76 13.19 20.27C12.04 19.78 10.89 19.12 9.75 18.29C8.6 17.45 7.51 16.52 6.47 15.49C5.44 14.45 4.51 13.36 3.68 12.22C2.86 11.08 2.2 9.94 1.72 8.81C1.24 7.67 1 6.58 1 5.54C1 4.86 1.12 4.21 1.36 3.61C1.6 3 1.98 2.44 2.51 1.94C3.15 1.31 3.85 1 4.59 1C4.87 1 5.15 1.06 5.4 1.18C5.66 1.3 5.89 1.48 6.07 1.74L8.39 5.01C8.57 5.26 8.7 5.49 8.79 5.71C8.88 5.92 8.93 6.13 8.93 6.32C8.93 6.56 8.86 6.8 8.72 7.03C8.59 7.26 8.4 7.5 8.16 7.74L7.4 8.53C7.29 8.64 7.24 8.77 7.24 8.93C7.24 9.01 7.25 9.08 7.27 9.16C7.3 9.24 7.33 9.3 7.35 9.36C7.53 9.69 7.84 10.12 8.28 10.64C8.73 11.16 9.21 11.69 9.73 12.22C10.27 12.75 10.79 13.24 11.32 13.69C11.84 14.13 12.27 14.43 12.61 14.61C12.66 14.63 12.72 14.66 12.79 14.69C12.87 14.72 12.95 14.73 13.04 14.73C13.21 14.73 13.34 14.67 13.45 14.56L14.21 13.81C14.46 13.56 14.7 13.37 14.93 13.25C15.16 13.11 15.39 13.04 15.64 13.04C15.83 13.04 16.03 13.08 16.25 13.17C16.47 13.26 16.7 13.39 16.95 13.56L20.26 15.91C20.52 16.09 20.7 16.3 20.81 16.55C20.91 16.8 20.97 17.05 20.97 17.33Z' stroke='#292D32' strokeWidth='1.5' strokeMiterlimit='10' />
        </svg>
      </div>
      <div className='absolute top-full left-1/2 transform -translate-x-1/2 p-2 bg-white shadow-md rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
        {mobile}
      </div>
    </div>

    <div className='relative cursor-pointer transition-transform transform group'>
      <div className='bg-gray-300 w-12 h-12 rounded-full flex items-center justify-center'>
        <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
          {/* Replace this path with your SVG path */}
          <path d='M17 20.5H7C4 20.5 2 19 2 15.5V8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V15.5C22 19 20 20.5 17 20.5Z' stroke='#292D32' strokeWidth='1.5' strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M17 9L13.87 11.5C12.84 12.32 11.15 12.32 10.12 11.5L7 9' stroke='#292D32' strokeWidth='1.5' strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
        </svg>
      </div>
      <div className='absolute top-full left-1/2 transform -translate-x-1/2 p-2 bg-white shadow-md rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
        {email}
      </div>
    </div>

    <div className='relative cursor-pointer transition-transform transform group'>
      <div className='bg-gray-300 w-12 h-12 rounded-full flex items-center justify-center'>
        <BiLogoLinkedin className='visible hover:hidden' size={25} />
      </div>
      <div className='absolute top-full left-1/2 transform -translate-x-1/2 p-2 bg-white shadow-md rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
        {linkedin}
      </div>
    </div>
  </div>

  <div className='flex flex-row items-center justify-between mx-2'>
    <div className='flex items-center space-x-2'>
      <Checkbox id='terms' />
    </div>
    <span>
      <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
        {/* Replace this path with your SVG path */}
        <path d='M5 10C3.9 10 3 10.9 3 12C3 13.1 3.9 14 5 14C6.1 14 7 13.1 7 12C7 10.9 6.1 10 5 10Z' stroke='#292D32' strokeWidth='1.5' />
        <path d='M19 10C17.9 10 17 10.9 17 12C17 13.1 17.9 14 19 14C20.1 14 21 13.1 21 12C21 10.9 20.1 10 19 10Z' stroke='#292D32' strokeWidth='1.5' />
        <path d='M12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z' stroke='#292D32' strokeWidth='1.5' />
      </svg>
    </span>
  </div>
</div>

  )
}

export default ApplicantCard