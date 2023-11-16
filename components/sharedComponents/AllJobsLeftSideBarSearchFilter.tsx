"use client"
 
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { toast } from "@/components/ui/use-toast"
 
import React from 'react'

const items = [
    {
      id: "experience",
      label: "0-2 years of experience",
    },
    {
      id: "experience2",
      label: "3-5 years of experience",
    },
    {
      id: "experience3",
      label: "5-10 years of experience",
    },
    
  ] as const


const items2 = [
    {
      id: "Linkedin",
      label: "linkedin",
    },
    {
      id: "Jobberman",
      label: "jobberman",
    },
    {
      id: "Pinterest",
      label: "pinterest",
    },
    {
      id: "Dribble",
      label: "dribble",
    },
    {
      id: "Behance",
      label: "behance",
    },
    
  ] as const


  const items3 = [
    {
      id: "Figma",
      label: "figma",
    },
    {
      id: "Adobe XD",
      label: "adobexd",
    },
    {
      id: "skitch",
      label: "skitch",
    },
    {
      id: "canva",
      label: "Canva",
    },
    {
      id: "docs",
      label: "Docs",
    },
    
  ] as const
   

   


const FormSchema = z.object({
    items: z.array(z.string()).refine((value) => value.some((item) => item), {
      message: "You have to select at least one item.",
    }),
    email: z
    .string({
      required_error: "Please select an email to display.",
    })
    .email(),
  })

const AllJobsLeftSideBarSearchFilter = () => {
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
          items: ["recents", "home"],
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
    <div className='allJobsLeftSideBarSearchFilter w-[220px] rounded-[12px] p-2 flex flex-col items-start justify-center'>
       <div className="w-full">
        <div className="formHeaderColor text-[16px] font-[400] py-2">Product Manager</div>
        <div className='underline w-full'></div>
        <div className="flex flex-row items-center space-x-[5px]">
            <span>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.74 14.3026C10.74 14.7601 10.44 15.3601 10.0575 15.5926L9 16.2751C8.0175 16.8826 6.6525 16.2001 6.6525 14.9851V10.9726C6.6525 10.4401 6.3525 9.75757 6.045 9.38257L3.16498 6.35256C2.78248 5.97006 2.4825 5.29507 2.4825 4.83757V3.09756C2.4825 2.19006 3.16501 1.50757 3.99751 1.50757H14.0025C14.835 1.50757 15.5175 2.19006 15.5175 3.02256V4.68756C15.5175 5.29506 15.135 6.05257 14.76 6.42757" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12.0525 12.3901C13.378 12.3901 14.4525 11.3156 14.4525 9.9901C14.4525 8.66461 13.378 7.59009 12.0525 7.59009C10.727 7.59009 9.6525 8.66461 9.6525 9.9901C9.6525 11.3156 10.727 12.3901 12.0525 12.3901Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M14.9025 12.8401L14.1525 12.0901" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            </span>
            <span className="text-[16px] font-[400]">Filter</span>
        </div>
        <div className='underline w-full'></div>
        </div> 
        <div>

            <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="items"
          render={() => (
            <FormItem>
              <div className="mb-4">
                <FormLabel className="formHeaderColor text-base text-[14px] font-[400]">Experience Level</FormLabel>
                {/* <FormDescription>
                  Select the items you want to display in the sidebar.
                </FormDescription> */}
              </div>
              {items.map((item) => (
                <FormField
                  key={item.id}
                  control={form.control}
                  name="items"
                  render={({ field }) => {
                    return (
                      <FormItem
                        key={item.id}
                        className="flex flex-row items-start space-x-3 space-y-0 text-[16px] font-[400]"
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
              <FormMessage />
            </FormItem>
          )}
        />


<FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-base">Location</FormLabel>
              <Select  onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="m@example.com">m@example.com</SelectItem>
                  <SelectItem value="m@google.com">m@google.com</SelectItem>
                  <SelectItem value="m@support.com">m@support.com</SelectItem>
                </SelectContent>
              </Select>
              {/* <FormDescription>
                You can manage location here
                <Link href="/examples/forms">email settings</Link>.
              </FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />





<FormField
          control={form.control}
          name="items"
          render={() => (
            <FormItem>
              <div className="mb-4">
                <FormLabel className="formHeaderColor text-base text-[14px] font-[400]">Candidate Source</FormLabel>
                {/* <FormDescription>
                  Select the candidate source to apply.
                </FormDescription> */}
              </div>
              {items2.map((item) => (
                <FormField
                  key={item.id}
                  control={form.control}
                  name="items"
                  render={({ field }) => {
                    return (
                      <FormItem
                        key={item.id}
                        className="flex flex-row items-start space-x-3 space-y-0 text-[16px] font-[400]"
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
              <FormMessage />
            </FormItem>
          )}
        />



<FormField
          control={form.control}
          name="items"
          render={() => (
            <FormItem>
              <div className="mb-4">
                <FormLabel className="formHeaderColor text-base text-[14px] font-[400]">Skills</FormLabel>
                {/* <FormDescription>
                  Select the candidate skills to apply.
                </FormDescription> */}
              </div>
              {items3.map((item) => (
                <FormField
                  key={item.id}
                  control={form.control}
                  name="items"
                  render={({ field }) => {
                    return (
                      <FormItem
                        key={item.id}
                        className="flex flex-row items-start space-x-3 space-y-0 text-[16px] font-[400]"
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
              <FormMessage />
            </FormItem>
          )}
        />


        
        <Button className = 'w-full' type="submit">Apply</Button>

        <Button className= 'w-full' type="reset">Reset</Button>

      </form>
    </Form>

        </div>
    </div>
  )
}

export default AllJobsLeftSideBarSearchFilter