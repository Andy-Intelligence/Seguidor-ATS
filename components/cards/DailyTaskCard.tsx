import { extractTimeWithMeridian } from '@/lib/utils';
import React from 'react'

interface TaskProp {
  applicantImg:string;
  taskStartTime:string;
  taskEndTime:string;
  applicantName:string;
  applicantJob:string;
  jobTitle:string;
  jobType:string;
  employmentStatus:string;
  inviteLink:string;
  interviewer:string;

}


const DailyTaskCard = ({
  applicantImg,
  taskStartTime,
  taskEndTime,
  applicantName,
  applicantJob,
  jobTitle,
  jobType,
  employmentStatus,
  inviteLink,
  interviewer,}:TaskProp) => {
  return (
    <main className='flex items-start w-full '>
        <div className='dailyTaskTimeColor font-[700] text-[15.58px]'>{extractTimeWithMeridian(taskStartTime)}</div>
    <div className='taskBackgrorund flex items-center justify-center w-full rounded-[22.87px]'>
        <div className='flex flex-col items-center  justify-center w-1/2 border-r border-black '>
            <img className='h-[43px] w-[43px] rounded-full' alt='profile-img' src={applicantImg}/>
            <h1 className='text-[22px] font-[400] '>{applicantName}</h1>
            <h3 className='text-[14px] font-[400] '>{applicantJob}</h3>
            <div className='flex items-center justify-center gap-4 mt-3'>
                <span>
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.97 17.33C20.97 17.69 20.89 18.06 20.72 18.42C20.55 18.78 20.33 19.12 20.04 19.44C19.55 19.98 19.01 20.37 18.4 20.62C17.8 20.87 17.15 21 16.45 21C15.43 21 14.34 20.76 13.19 20.27C12.04 19.78 10.89 19.12 9.75 18.29C8.6 17.45 7.51 16.52 6.47 15.49C5.44 14.45 4.51 13.36 3.68 12.22C2.86 11.08 2.2 9.94 1.72 8.81C1.24 7.67 1 6.58 1 5.54C1 4.86 1.12 4.21 1.36 3.61C1.6 3 1.98 2.44 2.51 1.94C3.15 1.31 3.85 1 4.59 1C4.87 1 5.15 1.06 5.4 1.18C5.66 1.3 5.89 1.48 6.07 1.74L8.39 5.01C8.57 5.26 8.7 5.49 8.79 5.71C8.88 5.92 8.93 6.13 8.93 6.32C8.93 6.56 8.86 6.8 8.72 7.03C8.59 7.26 8.4 7.5 8.16 7.74L7.4 8.53C7.29 8.64 7.24 8.77 7.24 8.93C7.24 9.01 7.25 9.08 7.27 9.16C7.3 9.24 7.33 9.3 7.35 9.36C7.53 9.69 7.84 10.12 8.28 10.64C8.73 11.16 9.21 11.69 9.73 12.22C10.27 12.75 10.79 13.24 11.32 13.69C11.84 14.13 12.27 14.43 12.61 14.61C12.66 14.63 12.72 14.66 12.79 14.69C12.87 14.72 12.95 14.73 13.04 14.73C13.21 14.73 13.34 14.67 13.45 14.56L14.21 13.81C14.46 13.56 14.7 13.37 14.93 13.25C15.16 13.11 15.39 13.04 15.64 13.04C15.83 13.04 16.03 13.08 16.25 13.17C16.47 13.26 16.7 13.39 16.95 13.56L20.26 15.91C20.52 16.09 20.7 16.3 20.81 16.55C20.91 16.8 20.97 17.05 20.97 17.33Z" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10"/>
                </svg>
                </span>
                <span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17 20.5H7C4 20.5 2 19 2 15.5V8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V15.5C22 19 20 20.5 17 20.5Z" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M17 9L13.87 11.5C12.84 12.32 11.15 12.32 10.12 11.5L7 9" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                </span>
                <span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 6.25V11.35C22 12.62 21.58 13.69 20.83 14.43C20.09 15.18 19.02 15.6 17.75 15.6V17.41C17.75 18.09 16.99 18.5 16.43 18.12L15.46 17.48C15.55 17.17 15.59 16.83 15.59 16.47V12.4C15.59 10.36 14.23 9 12.19 9H5.39999C5.25999 9 5.13 9.01002 5 9.02002V6.25C5 3.7 6.7 2 9.25 2H17.75C20.3 2 22 3.7 22 6.25Z" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M15.59 12.4V16.47C15.59 16.83 15.55 17.17 15.46 17.48C15.09 18.95 13.87 19.87 12.19 19.87H9.47L6.45 21.88C6 22.19 5.39999 21.86 5.39999 21.32V19.87C4.37999 19.87 3.53 19.53 2.94 18.94C2.34 18.34 2 17.49 2 16.47V12.4C2 10.5 3.18 9.19002 5 9.02002C5.13 9.01002 5.25999 9 5.39999 9H12.19C14.23 9 15.59 10.36 15.59 12.4Z" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                </span>
            </div>
        </div>
        <div className='flex flex-col items-center justify-center gap-1 w-1/2 p-4'>
            <div className='flex text-[22px] font-[400] justify-start w-full'>
              <span>
                <svg width="37" height="38" viewBox="0 0 37 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.95325 26.0235L18.6742 34.0274L32.3952 26.0235" stroke="#181818" strokeWidth="2.28683" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M4.95325 19.163L18.6742 27.1669L32.3952 19.163" stroke="#181818" strokeWidth="2.28683" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M4.95325 12.3026L18.6742 20.3064L32.3952 12.3026L18.6742 4.29866L4.95325 12.3026Z" stroke="#181818" strokeWidth="2.28683" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            <span className='flex items-start justify-start'>{jobTitle}</span>
            </div>
            <div className='flex flex-row items-center justify-start gap-4 w-full'>
                  <div className='flex items-center justify-center gap-1'>
                    <span>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7.99999 22H16C20.02 22 20.74 20.39 20.95 18.43L21.7 10.43C21.97 7.99 21.27 6 17 6H6.99999C2.72999 6 2.02999 7.99 2.29999 10.43L3.04999 18.43C3.25999 20.39 3.97999 22 7.99999 22Z" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M8 6V5.2C8 3.43 8 2 11.2 2H12.8C16 2 16 3.43 16 5.2V6" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M14 13V14C14 14.01 14 14.01 14 14.02C14 15.11 13.99 16 12 16C10.02 16 10 15.12 10 14.03V13C10 12 10 12 11 12H13C14 12 14 12 14 13Z" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M21.65 11C19.34 12.68 16.7 13.68 14 14.02" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M2.62 11.27C4.87 12.81 7.41 13.74 10 14.03" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                    <span className='text-[12px] font-[400]'>
                       {jobTitle}
                    </span>
                  </div>
                  <div className='flex items-center justify-center gap-1'>
                    <span>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 13.4299C13.7231 13.4299 15.12 12.0331 15.12 10.3099C15.12 8.58681 13.7231 7.18994 12 7.18994C10.2769 7.18994 8.88 8.58681 8.88 10.3099C8.88 12.0331 10.2769 13.4299 12 13.4299Z" stroke="#292D32" strokeWidth="1.5"/>
                    <path d="M3.62001 8.49C5.59001 -0.169998 18.42 -0.159997 20.38 8.5C21.53 13.58 18.37 17.88 15.6 20.54C13.59 22.48 10.41 22.48 8.39001 20.54C5.63001 17.88 2.47001 13.57 3.62001 8.49Z" stroke="#292D32" strokeWidth="1.5"/>
                    </svg>
                    </span>
                    <span className='text-[12px] font-[400]'>
                        {jobType}
                    </span>
                  </div>
                  <div className='flex items-center justify-center gap-1'>
                    <span>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2C17.52 2 22 6.48 22 12Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M15.71 15.18L12.61 13.33C12.07 13.01 11.63 12.24 11.63 11.61V7.51001" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    </span>
                    <span className='text-[12px] font-[400]'>
                        {employmentStatus}
                    </span>
                  </div>
              </div>
              <div className='flex items-center justify-center gap-1'>
                <span>
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="15" height="15" viewBox="0 0 48 48">
                <rect width="16" height="16" x="12" y="16" fill="#fff" transform="rotate(-90 20 24)"></rect><polygon fill="#1e88e5" points="3,17 3,31 8,32 13,31 13,17 8,16"></polygon><path fill="#4caf50" d="M37,24v14c0,1.657-1.343,3-3,3H13l-1-5l1-5h14v-7l5-1L37,24z"></path><path fill="#fbc02d" d="M37,10v14H27v-7H13l-1-5l1-5h21C35.657,7,37,8.343,37,10z"></path><path fill="#1565c0" d="M13,31v10H6c-1.657,0-3-1.343-3-3v-7H13z"></path><polygon fill="#e53935" points="13,7 13,17 3,17"></polygon><polygon fill="#2e7d32" points="38,24 37,32.45 27,24 37,15.55"></polygon><path fill="#4caf50" d="M46,10.11v27.78c0,0.84-0.98,1.31-1.63,0.78L37,32.45v-16.9l7.37-6.22C45.02,8.8,46,9.27,46,10.11z"></path>
                </svg>
                </span>
                <div >
                    <a className='linkBlue text-[12px] font-[400]' href={`https://${inviteLink}`}>
                        {inviteLink}
                    </a>
                </div>
              </div>
            <div className='text-[12px] font-[500]'>{extractTimeWithMeridian(taskStartTime)} - {extractTimeWithMeridian(taskEndTime)}</div>
            <div className='flex items-center justify-center gap-1 text-[12px] font-[500]'>
                <div className='flex items-center justify-center'>
                    Assigned to:
                 </div>
                <div className='flex items-center justify-center gap-1'>
                    <img className='h-[15px] w-[15px] rounded-full' alt='profile-img' src='https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600'/>
                    <span>{interviewer}</span>
                    <span>
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.94501 2.69992L3.78751 9.21742C3.55501 9.46492 3.33001 9.95242 3.28501 10.2899L3.00751 12.7199C2.91001 13.5974 3.54001 14.1974 4.41001 14.0474L6.82501 13.6349C7.16251 13.5749 7.63501 13.3274 7.86751 13.0724L14.025 6.55492C15.09 5.42992 15.57 4.14742 13.9125 2.57992C12.2625 1.02742 11.01 1.57492 9.94501 2.69992Z" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8.91748 3.7876C9.23998 5.8576 10.92 7.4401 13.005 7.6501" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2.25 16.5H15.75" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    </span>
                </div>
            </div>
        </div>
    </div>
    </main>
  )
}

export default DailyTaskCard