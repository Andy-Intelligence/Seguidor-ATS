"use client"
 
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
} from "@/components/ui/form"
import { Switch } from "@/components/ui/switch"
import { toast } from "@/components/ui/use-toast"
 

import React from 'react'


const FormSchema = z.object({
    marketing_emails: z.boolean().default(false).optional(),
    security_emails: z.boolean(),
  })


interface JobRoleProp{
    jobtitle?:string;
    jobtype?:string;
    employmentstatus?:string;
    jobdescription?:string;
    applications?:any;
    jobauthor?:any;

}



const JobRoleCard = ({jobtitle,jobtype,employmentstatus,jobdescription,applications,jobauthor}:JobRoleProp) => {

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
          security_emails: true,
        },
      })


      function onSubmit(data: z.infer<typeof FormSchema>) {
        toast({
          title: "You submitted the following values:",
          description: (
            <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
              <code className="text-white">{JSON.stringify(data, null, 2)}</code>
            </pre>
          ),
        })
      }




  return (
    <main className='jobRoleCard flex flex-col items-start rouded-[4px] min-w-[410px]'>
            <div className='flex items-center justify-between w-full p-2'>
                <div className='flex flex-col w-full'>
                    <div className='flex flex-row items-center justify-between w-full'>
                        <div className='flex items-center justify-center break-all whitespace-normal'>{jobtitle}</div>
                        <div className='flex items-center justify-center space-x-4'>
                        <div>
                        <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="">
            <FormField
              control={form.control}
              name="marketing_emails"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center justify-between rounded-lg  p-4">
                  {/* <div className="space-y-0.5">
                    <FormLabel className="text-base">
                      Marketing emails
                    </FormLabel>
                    <FormDescription>
                      Receive emails about new products, features, and more.
                    </FormDescription>
                  </div> */}
                  <FormControl>
                    <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
    
        {/* <Button type="submit">Submit</Button> */}
      </form>
    </Form>
                        </div>
                <span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 10C3.9 10 3 10.9 3 12C3 13.1 3.9 14 5 14C6.1 14 7 13.1 7 12C7 10.9 6.1 10 5 10Z" stroke="#292D32" strokeWidth="1.5"/>
                <path d="M19 10C17.9 10 17 10.9 17 12C17 13.1 17.9 14 19 14C20.1 14 21 13.1 21 12C21 10.9 20.1 10 19 10Z" stroke="#292D32" strokeWidth="1.5"/>
                <path d="M12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z" stroke="#292D32" strokeWidth="1.5"/>
                </svg>
            </span>
        </div>

                    </div>
                    <div className='flex items-center gap-[8px] text-[12px]'>
                        <div className='jobRoleTag flex items-center justify-center rounded-[100px] p-[10px] h-[24px] break-all whitespace-normal'>{jobtype}</div>
                        <div className='bg-black h-[5px] w-[5px] rounded-full'></div>
                        <div className='jobRoleTag2 flex items-center justify-center rounded-[100px] p-[10px] h-[24px] break-all whitespace-normal'>{employmentstatus}</div>
                    </div>
                    
                </div>

            </div>

        <div className='text-[14px] font-[400] text-left p-2 flex items-start justify-start break-all whitespace-normal'>{jobdescription}</div>
        <div className='underline w-full'></div>
        <div className='flex items-center justify-start space-x-2 w-full text-[12px] font-[400] p-2'>
            <div className='flex items-center justify-center '>All applicants:<div className='flex items-center justify-center'><img className='h-[17px] w-[17px] rounded-full' src='https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600' alt='pics'/><img className='h-[17px] w-[17px] rounded-full' src='https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600' alt='pics'/><img className='h-[17px] w-[17px] rounded-full' src='https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600' alt='pics'/></div><span className='text-[12px] font-[500] break-all whitespace-normal'> +500</span></div>
            <div className='bg-black h-[5px] w-[5px] rounded-full'></div>
            <div className='flex items-center justify-center'>Best Match:<div className='flex items-center justify-center'><img className='h-[17px] w-[17px] rounded-full' src='https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600' alt='pics'/><img className='h-[17px] w-[17px] rounded-full' src='https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600' alt='pics'/><img className='h-[17px] w-[17px] rounded-full' src='https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600' alt='pics'/></div><span className='text-[12px] font-[500] break-all whitespace-normal'> +10</span></div>
        </div>
        <div className='underline w-full'></div>
        <div className='flex items-center justify-start space-x-2 w-full text-[12px] font-[400] p-2'>
            <div className='flex items-center justify-center'>Posted by:<div className='flex items-center justify-center'><img className='h-[17px] w-[17px] rounded-full' src='https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600' alt='pics'/><span className='text-[12px] font-[400] break-all whitespace-normal'>Kelvin Chigozie</span></div></div>
            <div className='bg-black h-[5px] w-[5px] rounded-full'></div>
            <div className='flex items-center justify-center'>Interviewer:<div className='flex items-center justify-center'><img className='h-[17px] w-[17px] rounded-full' src='https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600' alt='pics'/><span className='text-[12px] font-[400] break-all whitespace-normal'>Mary Sansa</span></div></div>
        </div>
    </main>
  )
}

export default JobRoleCard