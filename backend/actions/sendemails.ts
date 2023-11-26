
// import { revalidatePath } from "next/cache";
// import User from "../models/userModels/user.model";
// import { connectToDB } from "../mongoDb/connect"
// // import Job from "../models/jobModel/job.model";
// // import mongoose from "mongoose";
// // import Application from "../models/applicationsModel/applications.model";
// // const cloudinary = require('cloudinary').v2;

// // import { uploadToCloudinary } from "@/lib/cloudinaryUtil";
//  import {Resend} from "resend"
//  import Welcome from "../../app/emails/Welcome"
// //  import Reject from "../../app/emails/Rejected"
// // import Comment from "../models/commentModel/comment";
// import Interview from "../models/interviewModel/interview";
// // import RejectedInterview from "../models/interviewModel/rejectInterview"
// import { formatEmailDate, formatEmailEndTime, formatEmailStartTime } from "@/lib/utils";
// import { NextResponse } from 'next/server';
// export const runtime = 'edge';
// export const dynamic = 'force-dynamic';



// interface InterviewProps {
//     interviewer?:string | undefined | null;
//     applicant?:string;
//     job?:string;
//     scheduledDate?:string;
//     interviewEndTime?:string;
//     title?:string;
//     description?:string;
//     summary?:string;
//     venue?:string;
//     details?:string;
//     inviteLink?:string;
//     applicantEmail:string;
//     applicantName?:string;
//     jobTitle?:string;
//   }
  
//   export async function scheduleInterview({
//     interviewer,
//     applicant,
//     job,
//     scheduledDate,
//     interviewEndTime,
//     title,
//     description,
//     summary,
//     venue,
//     details,
//     inviteLink,
//     applicantEmail,
//     applicantName,
//     jobTitle
//   }:InterviewProps){
    
  
  
//       const resend = new Resend(process.env.resendapikey);
//       try {
  
    
//         const user = await User.findOne({ id: interviewer });
//         // const userr = JSON.parse(JSON.stringify(res))
    
//         const scheduledInterview = await Interview.create({
//     interviewer:user?._id,
//     applicant:applicant,
//     job:job,
//     scheduledDate:scheduledDate,
//     interviewEndTime:interviewEndTime,
//     title:title,
//     description:description,
//     summary:summary,
//     venue:venue,
//     details:details,
//     inviteLink:inviteLink
//         });
    
//         if (scheduledInterview) {
  
//           await scheduledInterview.save();
          
//             if(scheduledInterview){
//               // ##############
  
  
//               const res = await fetch('https://api.resend.com/emails', {
//                 method: 'POST',
//                 headers: {
//                   'Content-Type': 'application/json',
//                   'Authorization': `Bearer ${process.env.resendapikey}`,
//                 },
//                 body: JSON.stringify({
//                   from: 'Acme <onboarding@resend.dev>',
//                   to:String(applicantEmail),
//                   subject: 'Thank You for Applying!',
//                   react:Welcome({name:applicantName, 
//                     interviewer:user?.name,
//                     job:jobTitle,
//                     scheduledDate:formatEmailDate(scheduledDate),
//                     interviewStartTime:formatEmailStartTime(scheduledDate),
//                     interviewEndTime:formatEmailEndTime(interviewEndTime),
//                     title,
//                     description,
//                     summary,
//                     venue,
//                     details,
//                     inviteLink})
//                 }),
//               });
  
//               if (res.ok) {
//                 const data = await res.json();
//                 return NextResponse.json(data);
//               }
  
//               // ###################
//           }
//         }
    
//         // Additional logic after application creation if needed
    
//       } catch (error: any) {
//         throw new Error(`Failed to create Interview: ${error.message}`);
//       }
  
  
//   }
  
  