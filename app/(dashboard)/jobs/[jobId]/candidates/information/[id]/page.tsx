'use client'
import {BiLogoLinkedin} from 'react-icons/bi'
import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';

// import { getSingleApplicant } from '@/backend/actions/applications.actions';
import { RejectInterview, getSingleApplicant, scheduleInterview } from '@/backend/actions/job.actions';
import { getSingleJob } from '@/backend/actions/job.actions';
import { useState,useEffect } from 'react';
import { useRouter } from 'next/navigation';
import convertToStandardDate from '@/lib/utils';
import { UserAuth } from '@/context/MyContext';
import { sendComment } from '@/backend/actions/job.actions';
// import DayScheduleButton from '@/components/buttons/dayschedule';




import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { MobileDateTimePicker } from '@mui/x-date-pickers/MobileDateTimePicker';
import { DesktopDateTimePicker } from '@mui/x-date-pickers/DesktopDateTimePicker';
import { StaticDateTimePicker } from '@mui/x-date-pickers/StaticDateTimePicker';





import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { renderTimeViewClock } from '@mui/x-date-pickers/timeViewRenderers';
import dayjs, { Dayjs } from 'dayjs';
import { toast } from "@/components/ui/use-toast"

 
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
 
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import Navbar from '@/components/sharedComponents/Navbar';
 






const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
})



const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  
  
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}
interface ApplicantInfoProp{
  resume?:string;
  coverletter?:string;
  attachments?:string;
  NotesAndFeedback?:string;
  passport?:string;
  mobile?:string;
  linkedin?:string;
  name?:string;
  email?:string;
}





export default function Page({ params }: { params: { id: string,jobId:string; } }) {
  // const router = useRouter()

  const { user } = UserAuth() ?? { user: null };

  const router = useRouter();

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
      
    const [comment, setComment] = useState({content:""})

    // const [startValue, setStartValue] = React.useState<Dayjs | null>();
    const [endValue, setEndValue] = React.useState<any>();
    const [startDateValue, setStartDateValue] = React.useState<any>();
    // const [startValue, setStartValue] = React.useState<Dayjs | null>(dayjs('2022-04-17T15:30'));
    // const [endValue, setEndValue] = React.useState<Dayjs | null>(dayjs('2022-04-17T15:30'));

  const [value, setValue] = useState(0);
  const [applicant,setApplicant] = useState<any>()
  const [job,setJob] = useState<any>()
  console.log("me",params?.jobId)

  useEffect(()=>{
console.log("firing")
const fetchData = async () => {
  try {
    // const jobId = params?.id;
    const res = await getSingleApplicant({ applicantId: params?.id ,jobId:params?.jobId });
    const res2 = await getSingleJob({ jobId:params?.jobId });
    setJob(res2)
    // setApplicant(res?.applications);
    // console.log("applicant", applicant);
    return res
  } catch (error) {
    console.error("Error fetching single job:", error);
  }
};

fetchData().then((a)=>{
    setApplicant(a)

});

  },[params?.id])

  const handleSubmit = async (e:any,applicantId:any)=>{
    e.preventDefault()
    
    // console.log(chapter) 

    // console.log("chapterId",chapter?._id)
   const book =  await sendComment({content:comment?.content,sender:user?.uid,receiver:applicant._id,applicantId:params?.id})
  //  "651b4d41ab245ed190e19ee0"
    
  //  console.log(book)  
  //  setSearchResult(book)
 
  setComment({ content: "" });
  }

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

 
  const formSchema = z.object({
    title: z.string().min(2, {
      message: "title must be at least 2 characters.",
    }),
    description: z.string().min(2, {
      message: "description must be at least 2 characters.",
    }),
    summary: z.string().min(2, {
      message: "summary must be at least 2 characters.",
    }),
    venue: z.string().min(2, {
      message: "venue must be at least 2 characters.",
    }),
    details: z.string().min(2, {
      message: "details must be at least 2 characters.",
    }),
    inviteLink: z.string().min(2, {
      message: "inviteLink must be at least 2 characters.",
    }),
  })
   
 // 2. Define a submit handler.
 async function onSubmit(values: z.infer<typeof formSchema>) {
  // Do something with the form values.
  // ✅ This will be type-safe and validated.

  await scheduleInterview({
interviewer:user?.uid,
applicant:applicant?._id,
job:job?._id,
scheduledDate:startDateValue.toISOString(),
interviewEndTime:endValue.toISOString(),
title:values?.title,
description:values?.description,
summary:values?.summary,
venue:values?.venue,
details:values?.details,
inviteLink:values?.inviteLink,
applicantEmail:applicant?.email,
applicantName:applicant?.name,
jobTitle:job?.jobTitle,
    
  })

  toast({
    title: "You submitted the following values:",
    description: (
      <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
        <code className="text-white">Form Submitted</code>
      </pre>
    ),
  })



  console.log(startDateValue,endValue,values)
}


  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
      summary: "",
      venue: "",
      details: "",
      inviteLink: "",
    },
  })
 


 const handleReject = async ()=>{

  await RejectInterview({
    applicant:applicant?._id,
    job:job?._id,
    applicantName:applicant?.name,
    applicantEmail:applicant?.email,
    jobTitle:job?.jobTitle,
  })

  router.back()
 } 



  return (
    <div>
      <div>
        <Navbar/>
      </div>
    <div className="applicantInfoBg w-full min-h-screen p-2 gap-2 flex flex-col">
            <div className="w-full flex items-center justify-between">
              <div className='color98 font-[400] text-[22px]'>Applicant</div>
              <div className="flex flex-row gap-1 items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13 11L21.2 2.80005" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M22 6.8V2H17.2" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M11 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H15C20 22 22 20 22 15V13" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>

                <span className='font-[400] text-[16px]'>
                  Export
                </span>
              </div>
            </div>


            <div className='w-full flex items-center justify-between'>
              <div className='flex flex-row justify-between items-center w-full'>
                  <div className='flex flex-row gap-4 items-center justify-center'>
                    <div className='flex items-start justify-start'>
                        <img className='h-[80px] w-[80px] rounded-full' alt='profile-img' src='http://res.cloudinary.com/dm7gmrkki/image/upload/v1699822046/dc4fumkfrhy2ssjzzdje.png'/>
                    </div>
                    <div className='flex flex-col items-start text-left justify-center gap-1'>
                        <div className='flex items-center gap-2'>
                          <h1 className='text-[22px] font-[400] '>{applicant?.name} </h1><span className='applicantTagColor px-2 rounded-[30px] text-[14px] font-[400] py-1'>Applied</span>
                        </div>
                        <h3 className='candidateExperienceColor text-[16px] font-[400] '>{applicant?.email}</h3>
                        <div className="flex space-x-8">
  <div className="relative cursor-pointer transition-transform transform group">
    <div className="bg-gray-300 w-12 h-12 rounded-full flex items-center justify-center"><svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.97 17.33C20.97 17.69 20.89 18.06 20.72 18.42C20.55 18.78 20.33 19.12 20.04 19.44C19.55 19.98 19.01 20.37 18.4 20.62C17.8 20.87 17.15 21 16.45 21C15.43 21 14.34 20.76 13.19 20.27C12.04 19.78 10.89 19.12 9.75 18.29C8.6 17.45 7.51 16.52 6.47 15.49C5.44 14.45 4.51 13.36 3.68 12.22C2.86 11.08 2.2 9.94 1.72 8.81C1.24 7.67 1 6.58 1 5.54C1 4.86 1.12 4.21 1.36 3.61C1.6 3 1.98 2.44 2.51 1.94C3.15 1.31 3.85 1 4.59 1C4.87 1 5.15 1.06 5.4 1.18C5.66 1.3 5.89 1.48 6.07 1.74L8.39 5.01C8.57 5.26 8.7 5.49 8.79 5.71C8.88 5.92 8.93 6.13 8.93 6.32C8.93 6.56 8.86 6.8 8.72 7.03C8.59 7.26 8.4 7.5 8.16 7.74L7.4 8.53C7.29 8.64 7.24 8.77 7.24 8.93C7.24 9.01 7.25 9.08 7.27 9.16C7.3 9.24 7.33 9.3 7.35 9.36C7.53 9.69 7.84 10.12 8.28 10.64C8.73 11.16 9.21 11.69 9.73 12.22C10.27 12.75 10.79 13.24 11.32 13.69C11.84 14.13 12.27 14.43 12.61 14.61C12.66 14.63 12.72 14.66 12.79 14.69C12.87 14.72 12.95 14.73 13.04 14.73C13.21 14.73 13.34 14.67 13.45 14.56L14.21 13.81C14.46 13.56 14.7 13.37 14.93 13.25C15.16 13.11 15.39 13.04 15.64 13.04C15.83 13.04 16.03 13.08 16.25 13.17C16.47 13.26 16.7 13.39 16.95 13.56L20.26 15.91C20.52 16.09 20.7 16.3 20.81 16.55C20.91 16.8 20.97 17.05 20.97 17.33Z" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10"/>
                </svg></div>
    <div className="absolute top-full left-1/2 transform -translate-x-1/2 p-2 bg-white shadow-md rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
    {applicant?.mobile}
    </div>
  </div>

  <div className="relative cursor-pointer transition-transform transform group">
    <div className="bg-gray-300 w-12 h-12 rounded-full flex items-center justify-center"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17 20.5H7C4 20.5 2 19 2 15.5V8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V15.5C22 19 20 20.5 17 20.5Z" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M17 9L13.87 11.5C12.84 12.32 11.15 12.32 10.12 11.5L7 9" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                </svg></div>
    <div className="absolute top-full left-1/2 transform -translate-x-1/2 p-2 bg-white shadow-md rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
    {applicant?.email}
    </div>
  </div>

  <div className="relative cursor-pointer transition-transform transform group">
    <div className="bg-gray-300 w-12 h-12 rounded-full flex items-center justify-center"><BiLogoLinkedin className='visible hover:hidden' size={25}/></div>
    <div className="absolute top-full left-1/2 transform -translate-x-1/2 p-2 bg-white shadow-md rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      {applicant?.linkedin}
    </div>
  </div>
                    </div>
                        </div>
                    {/* <div className='flex flex-col items-start text-left justify-start'>
                        <div className='flex items-center gap-2'>
                          <h1 className='text-[22px] font-[400] '>{applicant?.name} </h1><span className='applicantTagColor px-2 rounded-[30px] text-[14px] font-[400] py-1'>Applied</span>
                        </div>
                        <h3 className='candidateExperienceColor text-[16px] font-[400] '>{applicant?.email}</h3>
                        <div className='flex items-center justify-center gap-4 mt-2'>
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
                            <BiLogoLinkedin size={25}/>
                        </span>
                    </div>
                    </div> */}
                    
                    
                </div>

                <div className='flex flex-col items-center gap-2'>
                  <div className='flex flex-row items-start gap-4'>
                    <span onClick={handleReject} className='hover:cursor-pointer reject font-[400] text-[16px]'>Reject</span>
                    <div>
                    {/* <Button >Open modal</Button> */}
                    <Modal
                      open={open}
                      onClose={handleClose}
                      aria-labelledby="modal-modal-title"
                      aria-describedby="modal-modal-description"
                      className='overflow-scroll'
                    >
                      <Box sx={style}>
                      {/* <DayScheduleButton /> */}

            <div className='overflow-y-scroll h-screen mt-10 w-full'>

                      <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 h-full">




                        <h1>Interview Date</h1>
  
<LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer
        components={[
          'DateTimePicker',
          'MobileDateTimePicker',
          'DesktopDateTimePicker',
          'StaticDateTimePicker',
        ]}
      >
        <DemoItem label="">
          <StaticDateTimePicker defaultValue={dayjs('2022-04-17T15:30')} value={startDateValue}
          onChange={(newValue) => setStartDateValue(newValue)} />
        </DemoItem>
      </DemoContainer>
    </LocalizationProvider>

    <h1>Interview End Time</h1>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['TimePicker']}>
        <TimePicker
          label=""
          viewRenderers={{
            hours: renderTimeViewClock,
            minutes: renderTimeViewClock,
            seconds: renderTimeViewClock,
          }}
          value={endValue}
          onChange={(newValue) => setEndValue(newValue)}
        />
      </DemoContainer>
    </LocalizationProvider>



                          <FormField
                            control={form.control}
                            name="title"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Title</FormLabel>
                                <FormControl>
                                  <Input placeholder="title" {...field} />
                                </FormControl>
                                <FormDescription>
                                  This is your public display name.
                                </FormDescription>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="description"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Description</FormLabel>
                                <FormControl>
                                  <Input placeholder="description" {...field} />
                                </FormControl>
                                {/* <FormDescription>
                                  This is your public display name.
                                </FormDescription> */}
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="summary"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Summary</FormLabel>
                                <FormControl>
                                  <Input placeholder="summary" {...field} />
                                </FormControl>
                                {/* <FormDescription>
                                  This is your public display name.
                                </FormDescription> */}
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="venue"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Venue</FormLabel>
                                <FormControl>
                                  <Input placeholder="venue" {...field} />
                                </FormControl>
                                {/* <FormDescription>
                                  This is your public display name.
                                </FormDescription> */}
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="details"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Details</FormLabel>
                                <FormControl>
                                  <Input placeholder="details" {...field} />
                                </FormControl>
                                {/* <FormDescription>
                                  This is your public display name.
                                </FormDescription> */}
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="inviteLink"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>InviteLink</FormLabel>
                                <FormControl>
                                  <Input placeholder="inviteLink" {...field} />
                                </FormControl>
                                {/* <FormDescription>
                                  This is your public display name.
                                </FormDescription> */}
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <Button type="submit">Submit</Button>
                        </form>
                      </Form>

                        {/* <Typography id="modal-modal-title" variant="h6" component="h2">
                          Text in a modal
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                          Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                        </Typography>  */}
                        </div>
                      </Box>
                    </Modal>
                  </div>
                    <span onClick={handleOpen} className='hover:cursor-pointer scheduleInterview font-[400] text-[16px]'>Schedule Interview</span>


                  </div>
                  <div className='flex items-center justify-center gap-2'>
                    <span>
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.4475 5.07001L13.92 15.2175C13.74 15.975 13.065 16.5 12.285 16.5H2.42998C1.29748 16.5 0.487487 15.39 0.824987 14.3025L3.98248 4.16254C4.19998 3.45754 4.85249 2.96997 5.58749 2.96997H14.8125C15.525 2.96997 16.1175 3.40497 16.365 4.00497C16.5075 4.32747 16.5375 4.69501 16.4475 5.07001Z" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10"/>
                    <path d="M12 16.5H15.585C16.5525 16.5 17.31 15.6825 17.2425 14.715L16.5 4.5" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M7.26001 4.78488L8.04002 1.54492" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12.285 4.79257L12.99 1.5376" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M5.77502 9H11.775" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M5.02502 12H11.025" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>

                    </span>
                    <span className='text-[14px] font-[400]'>
                      <span className='color98'>Applied: </span>{convertToStandardDate(applicant?.createdAt)}
                    </span>
                  </div>
                </div>
              </div>


            </div>
              <div className='underline w-full mt-2'></div>
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
                    <span className='text-[13px] font-[400]'>
                        {job?.jobTitle}
                    </span>
                  </div>
                  <div className='flex items-center justify-center gap-1'>
                    <span>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 13.4299C13.7231 13.4299 15.12 12.0331 15.12 10.3099C15.12 8.58681 13.7231 7.18994 12 7.18994C10.2769 7.18994 8.88 8.58681 8.88 10.3099C8.88 12.0331 10.2769 13.4299 12 13.4299Z" stroke="#292D32" strokeWidth="1.5"/>
                    <path d="M3.62001 8.49C5.59001 -0.169998 18.42 -0.159997 20.38 8.5C21.53 13.58 18.37 17.88 15.6 20.54C13.59 22.48 10.41 22.48 8.39001 20.54C5.63001 17.88 2.47001 13.57 3.62001 8.49Z" stroke="#292D32" strokeWidth="1.5"/>
                    </svg>
                    </span>
                    <span className='text-[13px] font-[400]'>
                        {job?.jobType}
                    </span>
                  </div>
                  <div className='flex items-center justify-center gap-1'>
                    <span>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2C17.52 2 22 6.48 22 12Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M15.71 15.18L12.61 13.33C12.07 13.01 11.63 12.24 11.63 11.61V7.51001" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    </span>
                    <span className='text-[13px] font-[400] lowercase'>
                        {job?.employmentStatus}
                    </span>
                  </div>
              </div>
              <div className='underline w-full'></div>

              <div className='px-5'>
                <h1 className='color98 text-[20px] font-[400]'>About</h1>
                <p className='text-[16px] font-[400]'>{job?.jobDescription}</p>
              </div>



              <section>
                <Box sx={{ width: '100%' }}>
                  <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                      <Tab className='text-[16px] font-[400]' label="Cover Letter" {...a11yProps(0)} />
                      <Tab className='text-[16px] font-[400]' label="Resume" {...a11yProps(1)} />
                      <Tab className='text-[16px] font-[400]' label="Attachments" {...a11yProps(2)} />
                      <Tab className='text-[16px] font-[400]' label="Notes/FeedBack" {...a11yProps(3)} />
                    </Tabs>
                  </Box>
                  <CustomTabPanel value={value} index={0}>  
                  <object
                    data={applicant?.coverletter}
                    type="application/pdf"
                    width="100%"
                    height="600px"
                  ></object>
                  </CustomTabPanel>
                  <CustomTabPanel value={value} index={1}>
                  <object
                    data={applicant?.resume}
                    type="application/pdf"
                    width="100%"
                    height="600px"
                  ></object>
                  </CustomTabPanel>
                  <CustomTabPanel value={value} index={2}>
                    <div className='flex items-center justify-start'>
                    <a href='https://www.google.com' className='linkBlue text-[16px] font-[400]' target='_blank' rel='noopener noreferrer'>
                      {applicant?.portfolioworksample}
                    </a>
                      <span>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17 13.4V16.4C17 20.4 15.4 22 11.4 22H7.6C3.6 22 2 20.4 2 16.4V12.6C2 8.6 3.6 7 7.6 7H10.6" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M17.0001 13.4H13.8001C11.4001 13.4 10.6001 12.6 10.6001 10.2V7L17.0001 13.4Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M11.6001 2H15.6001" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M7 5C7 3.34 8.34 2 10 2H12.62" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M21.9999 8V14.19C21.9999 15.74 20.7399 17 19.1899 17" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M22 8H19C16.75 8 16 7.25 16 5V2L22 8Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      </span>
                    </div>
                  </CustomTabPanel>
                  <CustomTabPanel value={value} index={3}>
                    <div className='w-full '>
                      <form className='flex flex-col items-end gap-2'>
                        <textarea  value={comment?.content} onChange={(e)=> setComment({...comment,content:e.target.value})} className='bgColorF8 w-full h-[5rem] p-1' rows={4} cols={50} placeholder="Write a note or feedback here..."></textarea>
                        <button onClick={(e)=>handleSubmit(e,applicant?._id)} type='submit' className='px-2 py-1 rounded-[4px] bgColorF8 flex '>Send</button>
                      </form>


                     { applicant?.noteAndFeedBack?.slice().reverse().map((item: any) => {
                     return( <div className='flex flex-row gap-2 items-start justify-start w-full'>
                        <div className='flex items-start justify-start'>
                            <img className='h-[42px] w-[42px] rounded-full' alt='profile-img' src='https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425_640.png'/>
                        </div>
                        <div className='flex flex-col items-start text-left justify-start'>
                            <div className='flex items-center gap-2'>
                              <h1 className='text-[16px] font-[400] '>{item?.sender?.name} </h1>
                            </div>
                            <p className=' text-[14px] font-[400] '>{item?.content}</p>
                        </div>
                    </div>)
                      })}
                      
                    </div>
                  </CustomTabPanel>
                </Box>
              </section>
    </div>
    </div>
  )
}



  
















