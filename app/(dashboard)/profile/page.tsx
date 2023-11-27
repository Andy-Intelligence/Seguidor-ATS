"use client"
 
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import Image from 'next/image';
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
import { toast } from "@/components/ui/use-toast"
 
const FormSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  profile_photo: z.string().url().min(1),
})
 


export default function Home() {

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
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

  // e:ChangeEvent<HTMLInputElement>
  const handleImage = (e:any, fieldChange:(value:string)=> void)=>{
    e.preventDefault();
  }

  return (
    <div className="grid grid-cols-2 gap-4 w-full">
        <div className="whiteBgFE p-2 w-full">
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-10">
        <FormField
          control={form.control}
          name="profile_photo"
          render={({ field }) => (
            <FormItem className='flex flex-col items-center gap-4'>
              <FormLabel className='account-form_image-label'>
                {field.value ? (<Image src={field.value} alt='profile photo'
                width={96}
                height={96}
                priority
                className='rounded-full object-contain'
                />):(
                  <Image
                  src='/assets/profile.png' alt='profile photo'
                  className='rounded-full object-contain'
                width={150}
                height={150}
                  />
                )}
              </FormLabel>
              <div className="flex flex-col items-center justify-center">
                <h1 className="text-[20px] font-[400]">Kelvin Chikezie</h1>
                <p className="text-[16px] font-[400]">usoroandidiong@gmail.com</p>
              </div>
              <FormControl className='flex-1 text-base text-bold text-gray-200'>
                <Input 
                  type='file'
                  accept='image/*'
                  placeholder='Upload a photo'
                  className='account-form_image-input'
                  onChange={(e)=> handleImage(e, field.onChange)}
                />
              </FormControl>
              
            </FormItem>
          )}
        />
        <Button className="bg-white hover:bg-white text-black flex items-center justify-between w-full">
          <div className="  flex items-center justify-between w-full">
            <span className="flex items-center justify-center gap-2">
            <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 11C11.6603 11 12.7731 10.5391 13.5936 9.71859C14.4141 8.89812 14.875 7.78532 14.875 6.625C14.875 5.46468 14.4141 4.35188 13.5936 3.53141C12.7731 2.71094 11.6603 2.25 10.5 2.25C9.33968 2.25 8.22688 2.71094 7.40641 3.53141C6.58594 4.35188 6.125 5.46468 6.125 6.625C6.125 7.78532 6.58594 8.89812 7.40641 9.71859C8.22688 10.5391 9.33968 11 10.5 11Z" stroke="#2B2B2B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M16.8088 14.2729L13.7113 17.3704C13.5888 17.4929 13.475 17.7204 13.4488 17.8866L13.2825 19.0679C13.2213 19.4966 13.5188 19.7941 13.9475 19.7329L15.1288 19.5666C15.295 19.5404 15.5313 19.4266 15.645 19.3041L18.7425 16.2066C19.2763 15.6729 19.53 15.0516 18.7425 14.2641C17.9638 13.4854 17.3425 13.7391 16.8088 14.2729Z" stroke="#2B2B2B" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M16.3625 14.7188C16.625 15.6638 17.36 16.3987 18.305 16.6612" stroke="#2B2B2B" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M2.98376 19.75C2.98376 16.3638 6.35251 13.625 10.5 13.625C11.41 13.625 12.285 13.7563 13.0988 14.0013" stroke="#2B2B2B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>

            <span>Profile Setting</span>
            </span>
            <span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.90991 19.9201L15.4299 13.4001C16.1999 12.6301 16.1999 11.3701 15.4299 10.6001L8.90991 4.08008" stroke="#2B2B2B" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            </span>
          </div>
        </Button>
         </form>
          </Form>
        </div>
        <div className="whiteBgFE p-2 w-full">
              <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Company Name</FormLabel>
                    <FormControl>
                      <Input placeholder="shadcn" {...field} />
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
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="shadcn" {...field} />
                    </FormControl>
                    {/* <FormDescription>
                      This is your public display name.
                    </FormDescription> */}
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Mobile</FormLabel>
                    <FormControl>
                      <Input placeholder="shadcn" {...field} />
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
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Alternative</FormLabel>
                    <FormControl>
                      <Input placeholder="shadcn" {...field} />
                    </FormControl>
                    {/* <FormDescription>
                      This is your public display name.
                    </FormDescription> */}
                    <FormMessage />
                  </FormItem>
                )}
              />
              </div>
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Address</FormLabel>
                    <FormControl>
                      <Input placeholder="shadcn" {...field} />
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
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Motto</FormLabel>
                    <FormControl>
                      <Input placeholder="shadcn" {...field} />
                    </FormControl>
                    {/* <FormDescription>
                      This is your public display name.
                    </FormDescription> */}
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button className="btnGreen w-full" type="submit">Submit</Button>
            </form>
          </Form>
        </div>
    </div>
  )
}



  
















