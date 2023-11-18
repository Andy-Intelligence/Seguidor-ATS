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
import { cn } from "@/lib/utils"
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
import { useState } from "react"
import { createJob, linkedInCreateJob,  } from '@/backend/actions/job.actions';
import { linkedInSignInUser,  } from '@/backend/actions/user.actions';
import { useContext } from 'react';
import {UserAuth} from '@/context/MyContext'
import Navbar from '@/components/sharedComponents/Navbar';

const items = [
  {
    id: "linkedIn",
    name: "linkedin",
    label: "LinkedIn",
  },
  {
    id: "behance",
    name: "behance",
    label: "Behance",
  },
  {
    id: "dribble",
    name: "dribble",
    label: "Dribble",
  },
  {
    id: "jobberman",
    name: "jobberman",
    label: "Jobberman",
  },
  {
    id: "pinterest",
    name: "pinterest",
    label: "Pinterest",
  },
] as const

const formSchema = z.object({
  jobtitle: z.string().min(2,{message:"Username must be at least 2 characters"}).max(50),
  jobdescription: z
    .string()
    .min(10, {
      message: "description must be at least 10 characters.",
    })
    .max(1000, {
      message: "description must not be longer than 1000 characters.",
    }),
    teamdepartment: z
    .string({
      required_error: "Please select an email to display.",
    })
    .email(),
    deadline: z.date({
      required_error: "A start date and deadline is required.",
    }),
    location: z.string({
      required_error: "Please select a location to display.",
    }),
    // location: z.string().default(false).optional(),
    jobtype: z.string({
      required_error: "Please select an job type to display.",
    }),
    yearsofexperience: z.string({
      required_error: "Please select a year of experience to display.",
    }),
    companyoverview: z.string()
    .min(10, {
      message: "overview must be at least 10 characters.",
    })
    .max(1000, {
      message: "overview must not be longer than 1000 characters.",
    }),
    qualifications: z.string({
      required_error: "Please select an email to display.",
    })
    .email(),
    name: z.boolean().default(false).optional(),
    mobile: z.boolean().default(false).optional(),
    linkedinprofile: z.boolean().default(false).optional(),
    email: z.boolean().default(false).optional(),
    resume: z.boolean().default(false).optional(),
    portfolioworksample: z.boolean().default(false).optional(),
    linkedin: z.array(z.string()).refine((value) => value.some((item) => item), {
      message: "You have to select at least one item.",
    }),
    behance: z.array(z.string()).refine((value) => value.some((item) => item), {
      message: "You have to select at least one item.",
    }),
    dribble: z.array(z.string()).refine((value) => value.some((item) => item), {
      message: "You have to select at least one item.",
    }),
    jobberman: z.array(z.string()).refine((value) => value.some((item) => item), {
      message: "You have to select at least one item.",
    }),
    pinterest: z.array(z.string()).refine((value) => value.some((item) => item), {
      message: "You have to select at least one item.",
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



export default function Home() {
  const {user} = UserAuth()

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [isNameSwitchOn, setIsNameSwitchOn] = useState(true);
  const [isEmailSwitchOn, setIsEmailSwitchOn] = useState(true);
  const [isMobileSwitchOn, setIsMobileSwitchOn] = useState(true);
  const [isLinkedinprofileSwitchOn, setIsLinkedinprofileSwitchOn] = useState(true);
  const [isResumeSwitchOn, setIsResumeSwitchOn] = useState(true);
  const [isPortfolioworksampleSwitchOn, setIsPortfolioworksampleSwitchOn] = useState(true);

React.useEffect(()=>{
  const me = async ()=>{
    // const b = await linkedInSignInUser()
    // console.log(a)
  }
  me()
},[])

    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
        jobtitle: "",
        jobdescription: "",
        // name:false
        // marketing_emails:false,
        // items: ["linkedIn", "jobberman"],
      },
    })

 const jobtitle = useWatch({control:form.control, name:'jobtitle'})
 const jobdescription = useWatch({control:form.control, name:'jobdescription'})
 const teamdepartment = useWatch({control:form.control, name:'teamdepartment'})
 const location = useWatch({control:form.control, name:'location'})
 const jobtype = useWatch({control:form.control, name:'jobtype'})
 const yearsofexperience = useWatch({control:form.control, name:'yearsofexperience'})
 const deadline = useWatch({control:form.control, name:'deadline'})
 const companyoverview = useWatch({control:form.control, name:'companyoverview'})
 const qualifications = useWatch({control:form.control, name:'qualifications'})
 

      // 2. Define a submit handler.
  const onSubmit = async (values: z.infer<typeof formSchema>)=> {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values?.jobtitle)
    await createJob({
      // userId:"654dfef70325ab149be055ba",
      userId:user?.uid,
      jobTitle:values?.jobtitle,
      jobDescription:values?.jobdescription,
      teamDept:values?.teamdepartment,
      location:values?.location,
      jobType:values?.jobtype,
      yrsOfExp:values?.yearsofexperience,
      companyOverview:values?.companyoverview,
      qualifications:values?.qualifications,
      name:isNameSwitchOn,
      email:isEmailSwitchOn,
      mobile:isMobileSwitchOn,
      linkedin:isLinkedinprofileSwitchOn,
      portfolioworksample:isPortfolioworksampleSwitchOn,
      deadline:values?.deadline,
      // integrationContext:values?.integrationcontext,
      // companyApplyUrl:values?.companyapplyurl,
      // employmentStatus:values?.employmentstatus,
      // externalJobPostingId:values?.externaljobpostingid,
      // listedAt:values?.listedat,
      // jobPostingOperationType:values?.jobposting,
      // workplaceTypes:values?.workplacetypes,
    })
    console.log(values)
  }



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


  const pastMonth = new Date(2020, 10, 15);
  const defaultSelected: DateRange = {
    from: pastMonth,
    to: addDays(pastMonth, 4)
  };
  const [range, setRange] = useState<DateRange | undefined>(defaultSelected);

  let footer = <p>Please pick the first day.</p>;
  if (range?.from) {
    if (!range.to) {
      footer = <p>{format(range.from, 'PPP')}</p>;
    } else if (range.to) {
      footer = (
        <p>
          {format(range.from, 'PPP')}–{format(range.to, 'PPP')}
        </p>
      );
    }
  }
  return (
    <div>
      <div>
        <Navbar/>
      </div>
    
    <main className="flex flex-row justify-between gap-4 w-full">
    <div className="bgColorFF w-2/3 p-2">
          <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="jobtitle"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Job Title</FormLabel>
                  <FormControl>
                    <Input className="bgColorF8" placeholder="shadcn" {...field} />
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
          name="jobdescription"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Job Description</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Write here..."
                  className="resize-none bgColorF8"
                  {...field}
                  rows={5}
                />
              </FormControl>
              {/* <FormDescription>
                You can <span>@mention</span> other users and organizations.
              </FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid grid-cols-2 gap-8">

        <FormField
          control={form.control}
          name="teamdepartment"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Department/Team</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value} >
                <FormControl>
                  <SelectTrigger className="bgColorF8">
                    <SelectValue placeholder="Select department or team to display" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="Tech">Tech</SelectItem>
                  <SelectItem value="ICT">ICT</SelectItem>
                  <SelectItem value="Marketing">Marketing</SelectItem>
                  <SelectItem value="Accounting">Accounting</SelectItem>
                  <SelectItem value="Administrative">Administrative</SelectItem>
                  <SelectItem value="Sanitary">Sanitary</SelectItem>
                  <SelectItem value="Cyber Security">Cyber Security</SelectItem>
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
          name="location"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Location</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="bgColorF8">
                    <SelectValue placeholder="Select job location to display" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="Lagos">Lagos</SelectItem>
                  <SelectItem value="Abuja">Abuja</SelectItem>
                  <SelectItem value="Anambra">Anambra</SelectItem>
                  <SelectItem value="Portharcourt">Portharcourt</SelectItem>
                  <SelectItem value="Jos">Jos</SelectItem>
                  <SelectItem value="AkwaIbom">AkwaIbom</SelectItem>
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
          name="jobtype"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Job Type</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="bgColorF8">
                    <SelectValue placeholder="Select job type l to display" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="hybrid">hybrid</SelectItem>
                  <SelectItem value="remote">remote</SelectItem>
                  <SelectItem value="On-site">On-site</SelectItem>
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
          name="yearsofexperience"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Years Of Experince</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="bgColorF8">
                    <SelectValue placeholder="Select years of experience to display" />
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
        </div>

        <FormField
          control={form.control}
          name="companyoverview"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Company Oerview</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Write here..."
                  className="resize-none bgColorF8"
                  {...field}
                  rows={5}
                />
              </FormControl>
              {/* <FormDescription>
                You can <span>@mention</span> other users and organizations.
              </FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />


      <FormField
          control={form.control}
          name="qualifications"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Qualifications</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="bgColorF8">
                    <SelectValue placeholder="Select a qualification to display" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="UnderGraduate">UnderGraduate</SelectItem>
                  <SelectItem value="Bachelors Degree">Bachelors Degree</SelectItem>
                  <SelectItem value="Masters">Masters</SelectItem>
                  <SelectItem value="PHD">PHD</SelectItem>
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
          name="deadline"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>deadline</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-[240px] pl-3 text-left font-normal",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value ? (
                        format(field.value, "PPP")
                      ) : (
                        <span>Pick a date</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    // disabled={(date) =>
                    //   date > new Date() || date < new Date("1900-01-01")
                    // }
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <FormDescription>
                Choose a deadline for application
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
    

        {/* <FormField
          control={form.control}
          name="deadline"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Deadline</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-[240px] pl-3 text-left font-normal bgColorF8",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value ? (
                        format(field.value, "PPP")
                      ) : (
                        <span>Pick a date</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                  id="calendar"
                    mode="range"
                    // selected={field.value}
                    // onSelect={field.onChange}
                    // disabled={(date) =>
                    //   date > new Date() || date < new Date("1900-01-01")
                    // }
                    // initialFocus
                    // selected={range}
                    defaultMonth={pastMonth}
                    selected={range}
                    footer={footer}
                    onSelect={setRange}
                  />
                </PopoverContent>
              </Popover>
              <FormDescription>
                Select Start Date for Application and Deadline for Application
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        /> */}


<div className="grid grid-cols-3 gap-8">
<FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                  <div className="space-y-0.5">
                    <FormLabel className="text-base">
                      Name
                    </FormLabel>
                    {/* <FormDescription>
                      Receive emails about new products, features, and more.
                    </FormDescription> */}
                  </div>
                  <FormControl>
                    <Switch
                      // checked={field.value}
                      // onCheckedChange={field.onChange}
                      checked={isNameSwitchOn}
                      onCheckedChange={(checked) => {
                        setIsNameSwitchOn(checked)}}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
<FormField
              control={form.control}
              name="mobile"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                  <div className="space-y-0.5">
                    <FormLabel className="text-base">
                      Mobile
                    </FormLabel>
                    {/* <FormDescription>
                      Receive emails about new products, features, and more.
                    </FormDescription> */}
                  </div>
                  <FormControl>
                    <Switch
                      // checked={field.value}
                      // onCheckedChange={field.onChange}
                      checked={isMobileSwitchOn}
                      onCheckedChange={(checked) => {
                        setIsMobileSwitchOn(checked)}}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
<FormField
              control={form.control}
              name="linkedinprofile"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                  <div className="space-y-0.5">
                    <FormLabel className="text-base">
                      LinkedIn Profile
                    </FormLabel>
                    {/* <FormDescription>
                      Receive emails about new products, features, and more.
                    </FormDescription> */}
                  </div>
                  <FormControl>
                    <Switch
                      // checked={field.value}
                      // onCheckedChange={field.onChange}
                      checked={isLinkedinprofileSwitchOn}
                      onCheckedChange={(checked) => {
                        setIsLinkedinprofileSwitchOn(checked)}}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
<FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                  <div className="space-y-0.5">
                    <FormLabel className="text-base">
                      Email
                    </FormLabel>
                    {/* <FormDescription>
                      Receive emails about new products, features, and more.
                    </FormDescription> */}
                  </div>
                  <FormControl>
                    <Switch
                      // checked={field.value}
                      // onCheckedChange={field.onChange}
                      checked={isEmailSwitchOn}
                      onCheckedChange={(checked) => {
                        setIsEmailSwitchOn(checked)}}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
<FormField
              control={form.control}
              name="resume"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                  <div className="space-y-0.5">
                    <FormLabel className="text-base">
                      Resume
                    </FormLabel>
                    {/* <FormDescription>
                      Receive emails about new products, features, and more.
                    </FormDescription> */}
                  </div>
                  <FormControl>
                    <Switch
                      // checked={field.value}
                      // onCheckedChange={field.onChange}
                      checked={isResumeSwitchOn}
                      onCheckedChange={(checked) => {
                        setIsResumeSwitchOn(checked)}}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
<FormField
              control={form.control}
              name="portfolioworksample"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                  <div className="space-y-0.5">
                    <FormLabel className="text-base">
                      Portfolio/Work Sample
                    </FormLabel>
                    {/* <FormDescription>
                      Receive emails about new products, features, and more.
                    </FormDescription> */}
                  </div>
                  <FormControl>
                    <Switch
                    
                      // checked={field.value}
                      // onCheckedChange={field.onChange}
                      checked={isPortfolioworksampleSwitchOn}
                      onCheckedChange={(checked) => {
                        setIsPortfolioworksampleSwitchOn(checked)}}
                      
                    />
                  </FormControl>
                </FormItem>
              )}
            />


</div>

            {/* <Button type="submit">Submit</Button> */}
          </form>
        </Form>
    </div>

    <div className="bgColorFF flex flex-col gap-2 w-1/3  p-2">
          <div className="flex flex-col gap-1">
            <h1 className="text-[20px] font-[500] whitespace-normal break-words">{jobtitle}</h1>
            <p className="text-[13px] font-[400] whitespace-normal break-words">{jobdescription}</p>
            <div className="grid grid-cols-2 gap-1">
              <div className="flex items-center gap-1  text-[13px] font-[500]"><div className="rounded-full bg-black w-[5px] h-[5px]"></div>{jobtype}</div> 
              <div className="flex items-center gap-1 text-[13px] font-[500]"><div className="rounded-full bg-black w-[5px] h-[5px]"></div>{teamdepartment}</div>
              <div className="flex items-center gap-1 text-[13px] font-[500]"><div className="rounded-full bg-black w-[5px] h-[5px]"></div>{yearsofexperience}</div>
              <div className="flex items-center gap-1 text-[13px] font-[500]"><div className="rounded-full bg-black w-[5px] h-[5px]"></div>{location}</div>
            </div>
            <span className="text-[13px] font-[500] reject">Deadline: {deadline?.toLocaleDateString()}</span>
          </div>
          <div className="flex flex-col gap-1">
            <h1 className="text-[16px] font-[500]">Company Overview</h1>
            <p className="text-[13px] font-[400] whitespace-normal break-words">{companyoverview}</p>
          </div>
            <div className="flex flex-col gap-2">
            <h1 className="text-[16px] font-[500]">Qualifications</h1>
            <div className="grid grid-cols-3 gap-4">
            <Badge className="flex items-center justify-center" variant="secondary">{qualifications}</Badge>
            {/* <Badge className='flex items-center justify-center' variant="secondary">Secondary</Badge><Badge className="flex items-center justify-center" variant="secondary">Secondary</Badge> */}
            </div>

          </div>


          <div className="flex flex-col gap-4">
            <h1 className="color98 text-[16px] font-[400]">Candidate Form</h1>

            {isNameSwitchOn ? (<div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="name">Name</Label>
            <Input disabled className="bgColorF8" type="email" id="email" placeholder="Email" />
            </div>):(<></>)}

            {isEmailSwitchOn ? (<div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="email">Email</Label>
            <Input disabled className="bgColorF8" type="email" id="email" placeholder="Email" />
            </div>):(<></>)}
            {isMobileSwitchOn ? (<div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="mobile">Mobile</Label>
            <Input disabled className="bgColorF8" type="email" id="email" placeholder="Email" />
            </div>):(<></>)}
            {isLinkedinprofileSwitchOn ? (<div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="linkedin">LinkedIn</Label>
            <Input disabled className="bgColorF8" type="email" id="email" placeholder="Email" />
            </div>):(<></>)}
            {isResumeSwitchOn ? (<div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="portfolioworksample">Resume</Label>
            <Input disabled id="picture" className="bgColorF8" type="file" />
          </div>):(<></>)}
            {isPortfolioworksampleSwitchOn ? (<div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="portfolioworksample">Upload Portfolio/ Work Sample</Label>
            <Input disabled id="picture" className="bgColorF8" type="file" />
          </div>):(<></>)}

          <Button className='w-full btnGreen' onClick={handleOpen} type="submit">Done</Button>



          <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {/* <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography> */}
          <div className="flex flex-col gap-1 ">
            <h1 className="text-[20px] font-[500]">{jobtitle}</h1>
            <p className="text-[13px] font-[400]">{jobdescription}</p>
            <div className="grid grid-cols-2 gap-1">
              <div className="flex items-center gap-1  text-[13px] font-[500]"><div className="rounded-full bg-black w-[5px] h-[5px]"></div>{jobtype}</div> 
              <div className="flex items-center gap-1 text-[13px] font-[500]"><div className="rounded-full bg-black w-[5px] h-[5px]"></div>{teamdepartment}</div>
              <div className="flex items-center gap-1 text-[13px] font-[500]"><div className="rounded-full bg-black w-[5px] h-[5px]"></div>{yearsofexperience}</div>
              <div className="flex items-center gap-1 text-[13px] font-[500]"><div className="rounded-full bg-black w-[5px] h-[5px]"></div>{location}</div>
            </div>
            <span className="text-[13px] font-[500] reject">Deadline: {deadline?.toLocaleString()}</span>
          </div>
          <div className="flex flex-col gap-1">
            <h1 className="text-[16px] font-[500]">Company Overview</h1>
            <p className="text-[13px] font-[400] whitespace-normal break-words">{companyoverview}</p>
          </div>
            <div className="flex flex-col gap-2">
            <h1 className="text-[16px] font-[500]">Qualifications</h1>
            <div className="grid grid-cols-3 gap-4">
            <Badge className="flex items-center justify-center" variant="secondary">{qualifications}</Badge>
            {/* <Badge className='flex items-center justify-center' variant="secondary">Secondary</Badge><Badge className="flex items-center justify-center" variant="secondary">Secondary</Badge> */}
            </div>

          </div>

          <div className='mt-4'>
            <span>share to:</span>
            <div>
                      <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                  {/* <FormField
                    control={form.control}
                    name="items"
                    render={() => (
                      <FormItem>
                        <div className="mb-4">
                          <FormLabel className="text-base">Sidebar</FormLabel>
                          <FormDescription>
                            Select the items you want to display in the sidebar.
                          </FormDescription>
                        </div> */}
                        <div className='grid grid-cols-3 gap-4'>
                        {items.map((item) => (
                          <FormField
                            key={item.id}
                            control={form.control}
                            name={`${item.name}`}
                            render={({ field }) => {
                              return (
                                <FormItem
                                  key={item.id}
                                  className="flex flex-row items-start space-x-3 space-y-0"
                                >
                                  <FormControl>
                                    <Checkbox
                                      checked={field.value?.includes(item.id)}
                                      onCheckedChange={(checked) => {
                                        return checked
                                          ? field.onChange([...field.value, item.id])
                                          : field.onChange(
                                              field.value?.filter(
                                                (value) => value !== item.id
                                              )
                                            )
                                      }}
                                      
                                    />
                                  </FormControl>
                                  <FormLabel className="font-normal">
                                    {item.label}
                                  </FormLabel>
                                </FormItem>
                              )
                            }}
                            
                          />
                        ))}
                        </div>
                        {/* <FormMessage />
                      </FormItem>
                    )}
                  /> */}
                  <Button onClick={handleClick} className='w-full btnGreen' type="submit">Share</Button>
                </form>
              </Form>
            </div>
          </div>
                          
          <div className='w-full items-center justify-center flex m-2'>
          <button className='flex flex-row gap-2 items-center justify-center bg-white'>
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
            <span className='text-black'>Copy Link</span>
          </button>
          </div>
        </Box>
      </Modal>
    </div>

          </div>
    </div>

    </main>
    </div>
  )
}



  
















