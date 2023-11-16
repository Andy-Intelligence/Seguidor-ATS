"use client"
import * as React from 'react';
import Box from '@mui/material/Box';
import MUIButton from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm,useWatch } from "react-hook-form"
import * as z from "zod"
import { Badge } from "@/components/ui/badge"
import { Label } from "@/components/ui/label"
import { CalendarIcon } from "lucide-react"
import { addDays, format } from 'date-fns';
import { DateRange, DayPicker } from 'react-day-picker';
import { Calendar } from "@/components/ui/calendar"
import { Switch } from "@/components/ui/switch"
import { toast } from "@/components/ui/use-toast"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { cn, coverletterToBase64, formatDate, passportToBase64 } from "@/lib/utils"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

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
import { Textarea } from "@/components/ui/textarea"
import { useState,useEffect } from "react"
import { createJob, getSingleJob, jobApplication, linkedInCreateJob,  } from '@/backend/actions/job.actions';
import { linkedInSignInUser,  } from '@/backend/actions/user.actions';
import { useContext } from 'react';
import {UserAuth} from '@/context/MyContext'
import { fileToBase64 } from "@/lib/utils";

const FormSchema = z.object({
  name: z.string().min(2, {
    message: "name must be at least 2 characters.",
  }),
  email: z.string().min(2, {
    message: "email must be at least 2 characters.",
  }),
  mobile: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  linkedin: z.string().min(2, {
    message: "linkedin must be at least 2 characters.",
  }),
  yearsofexperience: z.string({
    required_error: "Please select your years of experience.",
  }),
  portfolioworksample: z.string().min(2, {
    message: "portfolio or worksample link must be at least 2 characters.",
  }),
  coverletter: z.array(
    z.object({
      name: z.string(),
      type: z.string().refine((value) => /\.(doc|docx|pdf)$/i.test(value), {
        message: "File must be a document or PDF",
      }),
    })
  ),
  passport: z.array(
    z.object({
      name: z.string(),
      type: z.string().refine((value) => /\.(doc|docx|pdf|png|jpg|jpeg|gif)$/i.test(value), {
        message: "File must be a document, PDF, or image",
      }),
    })
  ),  
  resume: z.array(
    z.object({
      name: z.string(),
      type: z.string().refine((value) => /\.(doc|docx|pdf)$/i.test(value), {
        message: "File must be a document or PDF",
      }),
    })
  ),
})



export default function Home({ params }: { params: { id: string } }) {



  const [fileNames, setFileNames] = useState<string[]>([]);
  const [job, setJob] = useState<any>();
  const [file, setFile] = useState<any>();
  const [coverletter, setCoverletter] = useState<any>();
  const [passport, setPassport] = useState<any>();
  const [selectedFile, setSelectedFile] = useState<string[]>([]);


  useEffect(()=>{ 
      console.log(params.id)
      
    const fetchData = async () =>{
      const jobId = params.id
      const res = await getSingleJob({jobId:params?.id})
      setJob(res) 
      console.log(job)
     
}  
fetchData()
},[params?.id])



 
  const handleImage = (e:any, fieldChange:(value:string)=> void)=>{
    e.preventDefault();
  
  
    const fileReader = new FileReader();
  
    if(e.target.files && e.target.files.length > 0){
      const file = e.target.files[0];
  
  
      setFileNames(Array.from(e.target.files))
  
      if(!file.type.includes('image')) return;
  
      fileReader.onload = async (event) => {
        const imageDataUrl = event.target?.result?.toString()
   || '';

   console.log(imageDataUrl)
  
   fieldChange(imageDataUrl)
  
  }
  
  
  fileReader.readAsDataURL(file);
  
    }
  
  
  }



const handleCoverletterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  const fileReader = new FileReader();
  if (event?.target?.files) {
    const file = event?.target?.files[0];
    setCoverletter(file)
    const names = Array.from(event?.target?.files).map((file) => file?.name);
    setFileNames(names);

    fileReader.onload = async (event) => {
      const imageDataUrl = event.target?.result?.toString() || '';
      const base64String = await fileToBase64(file);
      // Now you can use the base64String as needed
    };

    fileReader.readAsDataURL(file);
  }
};
const handlePassportChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  const fileReader = new FileReader();
  if (event?.target?.files) {
    const file = event?.target?.files[0];
    setPassport(file)
    const names = Array.from(event?.target?.files).map((file) => file?.name);
    setFileNames(names);

    fileReader.onload = async (event) => {
      const imageDataUrl = event.target?.result?.toString() || '';
      const base64String = await fileToBase64(file);
      // Now you can use the base64String as needed
    };

    fileReader.readAsDataURL(file);
  }
};
const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  const fileReader = new FileReader();
  if (event?.target?.files) {
    const file = event?.target?.files[0];
    setFile(file)
    const names = Array.from(event?.target?.files).map((file) => file?.name);
    setFileNames(names);

    fileReader.onload = async (event) => {
      const imageDataUrl = event.target?.result?.toString() || '';
      const base64String = await fileToBase64(file);
      // Now you can use the base64String as needed
    };

    fileReader.readAsDataURL(file);
  }
};






  const handleRemoveFile = (index: number) => {
    const updatedFileNames = fileNames.filter((_, i) => i !== index);
    setFileNames(updatedFileNames);
  };


  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      linkedin: "",
      email: "",
      mobile: "",
      portfolioworksample:"",
      resume: [],
      coverletter: [],
      passport: [],
      yearsofexperience:""
    },
  })


  const uploadFile = async () => {
    if (!selectedFile) {
      console.error('No file selected');
      return;
    }
  }
 
  // function onSubmit(data: z.infer<typeof FormSchema>) {
  //   toast({
  //     title: "You submitted the following values:",
  //     description: (
  //       <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
  //         <code className="text-white">{JSON.stringify(data, null, 2)}</code>
  //       </pre>
  //     ),
  //   })
  // }


  const onSubmit = async (values: z.infer<typeof FormSchema>) => {
    try {
      console.log("rf",coverletter)
      if (true) { //later set a condition here
        const [base64Resume,base64Passport,base64Coverletter] = await Promise.all([
          fileToBase64(file),
          passportToBase64(passport),
          coverletterToBase64(coverletter)
        ])

        console.log(base64Coverletter);
  
        console.log("b",base64Coverletter)
        // Now you can use the base64 string in your jobApplication function
        await jobApplication({
          name: values?.name,
          email: values?.email,
          mobile: values?.mobile,
          linkedin: values?.linkedin,
          resume: base64Resume,
          coverletter: base64Coverletter,
          passport: base64Passport,
          yearsofexperience:values?.yearsofexperience,
          portfolioworksample: values?.portfolioworksample,
        });
      } else {
        // Handle the case when there is no resume file
        console.log('No resume file provided');
      }
    } catch (error) {
      // Handle any errors that may occur during form submission
      console.error('Error submitting form:', error);
    }
  };
  


  const handleClick = async (event: React.MouseEvent<HTMLButtonElement>) => {
    try {
      // Get the form values using form.getValues()
      const formValues = form.getValues();
  
      // Call the function that handles the form values
      await onSubmit(formValues);
  
      // Additional logic or handling after form submission if needed
      console.log("Form submitted successfully!");
      
    } catch (error) {
      // Handle any errors that may occur during form submission
      console.error("Error submitting form:", error);
    }
  };






    return (
      <main>
        <div className="bgColorFF flex flex-col gap-2 w-full p-2">
          <div className="flex flex-col gap-1">
            <h1 className="text-[21px] font-[500] whitespace-normal break-words">{job?.jobTitle}</h1>
            <p className="text-[14px] font-[400] whitespace-normal break-words">{job?.jobDescription}</p>
            <div className="flex flex-row items-center justify-left gap-8">
              <div className="flex items-center gap-1  text-[13px] font-[500]"><div className="rounded-full bg-black w-[5px] h-[5px]"></div>JobType: {job?.jobType}</div> 
              <div className="flex items-center gap-1 text-[13px] font-[500]"><div className="rounded-full bg-black w-[5px] h-[5px]"></div>Team/Department: {job?.teamDept}</div>
              <div className="flex items-center gap-1 text-[13px] font-[500]"><div className="rounded-full bg-black w-[5px] h-[5px]"></div>Experience Needed: {job?.yrsOfExp} years</div>
              <div className="flex items-center gap-1 text-[13px] font-[500]"><div className="rounded-full bg-black w-[5px] h-[5px]"></div>location: {job?.location}</div>
            </div>
            <span className="text-[13px] font-[500] reject">Deadline: {formatDate(job?.deadline)}</span>
          </div>
          <div className="flex flex-col gap-1">
            <h1 className="text-[16px] font-[500]">Company Overview</h1>
            <p className="text-[14px] font-[400] whitespace-normal break-words">{job?.companyOverview}</p>
          </div>
            <div className="flex flex-col gap-2">
            <h1 className="text-[16px] font-[500]">Qualifications</h1>
            <div className="flex items-center  gap-4">
            <Badge className="flex items-center justify-center" variant="secondary">{job?.qualifications}</Badge>
            {/* <Badge className='flex items-center justify-center' variant="secondary">Secondary</Badge><Badge className="flex items-center justify-center" variant="secondary">Secondary</Badge> */}
            </div>

          </div>


            <h1 className="color98 text-[16px] font-[400]">Candidate Form</h1>

          <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className=" grid grid-cols-2 gap-4  ">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="name" {...field} value={field?.value} className='bgColorF8'/>
              </FormControl>
              <FormDescription>
                Type in your Name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="linkedin"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Linkedin Profile</FormLabel>
              <FormControl>
                <Input placeholder="linkedin profile" {...field} value={field?.value} className='bgColorF8'/>
              </FormControl>
              <FormDescription>
                Type in the link to your linkedin profile.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="yearsofexperience"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Years Of Experience</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value} >
                <FormControl>
                  <SelectTrigger className="bgColorF8">
                    <SelectValue placeholder="Select your years of experience" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="1">1</SelectItem>
                  <SelectItem value="2">2</SelectItem>
                  <SelectItem value="3">3</SelectItem>
                  <SelectItem value="4">4</SelectItem>
                  <SelectItem value="5">5</SelectItem>
                  <SelectItem value="6">6</SelectItem>
                  <SelectItem value="7">7</SelectItem>
                  <SelectItem value="8">8</SelectItem>
                  <SelectItem value="9">9</SelectItem>
                  <SelectItem value="10">10</SelectItem>
                  <SelectItem value="11">11</SelectItem>
                  <SelectItem value="12">12</SelectItem>
                  <SelectItem value="13">13</SelectItem>
                  <SelectItem value="14">14</SelectItem>
                  <SelectItem value="15">15</SelectItem>
                  <SelectItem value="16">16</SelectItem>
                  <SelectItem value="17">17</SelectItem>
                  <SelectItem value="18">18</SelectItem>
                </SelectContent>
              </Select>
              {/* <FormDescription>
                You can manage email addresses in your{" "}
                <Link href="/examples/forms">email settings</Link>.
              </FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="email"   {...field} value={field?.value}  className='bgColorF8' />
              </FormControl>
              <FormDescription>
                Type in your Email.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="mobile"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Mobile</FormLabel>
              <FormControl>
                <Input placeholder="mobile"   {...field} value={field?.value}  className='bgColorF8' />
              </FormControl>
              <FormDescription>
                Type in your mobile no.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="portfolioworksample"
          render={({ field }) => (
            <FormItem>
              <FormLabel>portfolio/worksample</FormLabel>
              <FormControl>
                <Input placeholder="portfolio or worksample"   {...field} value={field?.value}  className='bgColorF8' />
              </FormControl>
              <FormDescription>
                Type in a link to your portfolio or worksample.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

{/* <FormField
  control={form.control}
  name="resume"
  render={({ field }) => (
    <FormItem>
      <FormLabel>Resume (PDF)</FormLabel>
      <FormControl>
        <Input
          type="file"
          accept=".pdf"
          className="bgColorF8"
          onChange={(e) => {
            const file = e.target.files?.[0];
            field.onChange(file);
          }}
        />
      </FormControl>
      <FormDescription>
        Upload your resume in PDF format.
      </FormDescription>
      <FormMessage />
    </FormItem>
  )}
/> */}


{/* <input type="file" onChange={handleFileChange} /> */}


        <FormField
              name="coverletter"
              render={({ field }) => {
                return (
                  <FormItem className="flex flex-col items-center justify-center space-y-4 col-span-2">
                    <FormLabel>Cover Letter</FormLabel>
                    <FormControl>
                      <Input
                        className="inputGreen border border-transparent disabled:opacity-50 disabled:cursor-not-allowed file:bg-transparent file:text-neutral-200 file:border-none file:outline-none file:text-xs placeholder:text-neutral-400 focus:outline-none hover:cursor-pointer text-xs font-light"
                        type="file"
                        accept="application/msword,text/plain,application/pdf"
                        multiple
                        {...field}
                        value={field?.value ?? ''}
                        onChange={(event) => {
                          handleCoverletterChange(event);
                          field?.onChange(event);
                        }}
                        // onChange={(e)=> handleImage(e, field.onChange)}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />
        <FormField
            name="passport"
            render={({ field }) => (
              <FormItem className="flex flex-col items-center justify-center space-y-4 col-span-2">
                <FormLabel>Passport</FormLabel>
                <FormControl>
                  <Input
                    className="inputGreen border border-transparent disabled:opacity-50 disabled:cursor-not-allowed file:bg-transparent file:text-neutral-200 file:border-none file:outline-none file:text-xs placeholder:text-neutral-400 focus:outline-none hover:cursor-pointer text-xs font-light"
                    type="file"
                    accept="image/png,image/jpeg,image/jpg,image/gif"
                    multiple
                    {...field}
                    value={field?.value ?? ''}
                    onChange={(event) => {
                      handlePassportChange(event);
                      field?.onChange(event);
                    }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

        <FormField
              name="resume"
              render={({ field }) => {
                return (
                  <FormItem className="flex flex-col items-center justify-center space-y-4 col-span-2">
                    <FormLabel>Resume</FormLabel>
                    <FormControl>
                      <Input
                        className="inputGreen border border-transparent disabled:opacity-50 disabled:cursor-not-allowed file:bg-transparent file:text-neutral-200 file:border-none file:outline-none file:text-xs placeholder:text-neutral-400 focus:outline-none hover:cursor-pointer text-xs font-light"
                        type="file"
                        accept="application/msword,text/plain,application/pdf"
                        multiple
                        {...field}
                        value={field?.value ?? ''}
                        onChange={(event) => {
                          handleFileChange(event);
                          field?.onChange(event);
                        }}
                        // onChange={(e)=> handleImage(e, field.onChange)}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />


        <Button onClick={handleClick} type="submit">Submit</Button>
      </form>
    </Form>   
  
    </div>
      </main>
    )
  }
  

  
  
  
  
  
  
  
  
  
  
  
  