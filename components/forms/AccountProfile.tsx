"use client"

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod'
import { UserValidation } from '@/lib/validations/user';

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form"
import { Input } from "../ui/input"
import { Button } from '../ui/button';
import {Textarea} from '../ui/textarea'
import * as z from "zod"
import Image from 'next/image';
import { ChangeEvent, useState } from 'react';
// import {useUploadThing} from '@/lib/uploadthing'
// import { isBase64Image } from '@/lib/utils';
import { updateUser } from '@/backend/actions/user.actions';
import { usePathname, useRouter } from 'next/navigation';

interface Props {
    user:{
        id?:string;
        objectId?:string;
        username?:string;
        name?:string;
        bio?:string;
        image?:string;
    };
    btnTitle?:string;
}



function AccountProfile({user,btnTitle}:Props) {

const [files, setFiles] = useState<File[]>([])
// const {startUpload} = useUploadThing("media")
const router = useRouter();
const pathname = usePathname()



  const form = useForm({resolver: zodResolver(UserValidation),
  defaultValues:{
    profile_photo:user?.image || '',
    name:user?.name || '',
    username:user?.username || '',
    bio:user?.bio || ''
  }
  })



// const handleImage = (e:ChangeEvent<HTMLInputElement>, fieldChange:(value:string)=> void)=>{
//   e.preventDefault();


//   const fileReader = new FileReader();

//   if(e.target.files && e.target.files.length > 0){
//     const file = e.target.files[0];


//     setFiles(Array.from(e.target.files))

//     if(!file.type.includes('image')) return;

//     fileReader.onload = async (event) => {
//       const imageDataUrl = event.target?.result?.toString()
//  || '';

//  fieldChange(imageDataUrl)

// }


// fileReader.readAsDataURL(file);

//   }


// }

  const onSubmit = async (values:z.infer<typeof UserValidation>) =>{
    //this will be type safe and validated
      console.log(values)

      // const blob = values.profile_photo;
      // const hasImageChanged = isBase64Image(blob)

      // if(hasImageChanged) {
      //   const imgRes = await startUpload(files)


        
      // if(imgRes && imgRes[0].fileUrl){
      //   values.profile_photo = imgRes[0].fileUrl;
      // }

// call backend function to update user profile

await updateUser(
  {userId:user.id,
  username:values.username,
  name:values.name,
  bio:values.bio,
  // image:values.profile_photo,
  path:pathname
}
)

// if(pathname === '/profile/edit'){
//   router.back();
// } else{
//   router.push('/');
// }

      }



  // }

  return (
    <div className='w-full flex items-center justify-center'>
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full flex flex-col item-center justify-center gap-10">
        {/* <FormField
          control={form.control}
          name="profile_photo"
          render={({ field }) => (
            <FormItem className='flex items-center gap-4'>
              <FormLabel className='account-form_image-label'>
                {field.value ? (<Image src={field.value} alt='profile photo'
                width={96}
                height={96}
                priority
                className='rounded-full object-contain'
                />):(
                  <Image
                  src='/assets/profile.png' alt='profile photo'
                width={36}
                height={36}
                
                className='object-contain'
                  />
                )}
              </FormLabel>
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
        /> */}


      <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className='flex flex-col gap-3'>
              <FormLabel className='text-base text-bold'>
                Name
              </FormLabel>
              <FormControl className='flex-1 text-base text-bold text-gray-200'>
                <Input 
                  type = "text"
                  className='account-form_input no-focus text-black w-[30rem]'
                  {...field}
                />
              </FormControl>
              
            </FormItem>
          )}
        />



      <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem className='flex flex-col gap-3 '>
              <FormLabel className='text-base text-bold'>
                Username
              </FormLabel>
              <FormControl className='flex-1 text-base text-bold text-gray-200'>
                <Input 
                  type = "text"
                  className='account-form_input no-focus text-black w-[30rem]'
                  {...field}
                />
              </FormControl>
              
            </FormItem>
          )}
        />

      <FormField
          control={form.control}
          name="bio"
          render={({ field }) => (
            <FormItem className='flex flex-col gap-3 '>
              <FormLabel className='text-base text-bold'>
                Bio
              </FormLabel>
              <FormControl className='flex-1 text-base text-bold text-gray-200'>
                <Textarea 
                  rows ={5}
                  className='account-form_input no-focus text-black w-[30rem]'
                  {...field}
                />
              </FormControl>
              
            </FormItem>
          )}
        />

  











        <Button className='w-[30rem]' type="submit">Submit</Button>
      </form>
    </Form>
    </div>
  )
}

export default AccountProfile