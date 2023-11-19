"use server"
import { revalidatePath } from "next/cache";
import User from "../models/userModels/user.model";
import { connectToDB } from "../mongoDb/connect"









export async function linkedInSignInUser() {
    const url = 'https://api.linkedin.com/v2/userinfo';
    const token = 'AQUd45TTnWIHsZ1y_fHT6lLc9YOeGJjYvYoId8ezZSZQqHeNkstSyNdtnrson5-rK38qojt1pikrqvoeMyRU5_AdvOZgMt-lX5164h8alnfxbMA5KI_p9S3oL0X6VbK0fDUFuGU-zoVAN8B82C2Xx4ylQL2YBFXP-BP07boYbUcyK8iX85dB4z5jq_R4BQs7XVyTT0OxV3oZhBZKU82s8mER5FzNMTvC2OLlVKuh2NZkAKZIKvt1U7TU49r5Ca3apsIz40gdwtOusmK4AnNVCViyyOUu9ZzlCTQTONfybCUuvCFcwHYOV7PSayrjtU2E2-yRJK5H-DTr-_3JUYB3kgmXND6lSA';
  
    const headers = {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
    };
  
    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: headers,
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json();
      // Handle the data returned from the API
      console.log(data);
  
    } catch (error:any) {
      throw new Error(`Failed to sign in user: ${error.message}`);
    }
  }



  




  export async function fetchUser(userId: string | undefined) {
    connectToDB();
    try {
  const res = await User.findOne({ id: userId }).exec() 
  const user = JSON.parse(JSON.stringify(res))
      return user
    } catch (error: any) {
      throw new Error(`Failed to fetch user: ${error.message}`);
    }
  }

// export async function fetchUser() {
//     connectToDB();

//     const authurl = getAuthUrl()
//       console.log(authurl)
//       return authurl

    // try {
      
      // const a = await createMeeting(authurl)
    

// const meetingDetails = {
//   title: 'My Next.js Meeting',
//   description: 'A meeting about Next.js development',
//   startTime: '2023-11-16T14:00:00Z', // Replace with your desired start time
//   endTime: '2023-11-16T15:00:00Z', // Replace with your desired end time
// };

// const googleMeetLink = await createGoogleMeetLink(meetingDetails);
// console.log('Google Meet link:', googleMeetLink);
      
//       // console.log("meeting",a)
//     } catch (error: any) {
//       throw new Error(`Failed to fetch user: ${error.message}`);
    // }
  // }


interface Params {
    userId?:string | null | undefined;
    username?:string | null | undefined;
    name?:string | null | undefined;
    bio?:string | null | undefined;
    image?:string | null | undefined;
    path?:string | null | undefined;
    email?:string | null | undefined;
    objectId?:string | null | undefined;
}

export async function updateUser({userId,username,name,bio,image,path,email,objectId}:Params):Promise<void>{
    connectToDB();

    
    try {
        await User.findOneAndUpdate({
            id:userId
        },
        {username:username?.toLowerCase(),name,objectId,bio,image,onboarded:true,email},{upsert:true})



        if (path === '/profile/edit'){
            revalidatePath(path);
        }

     
    } catch (error:any) {
        throw new Error(`Failed to create and Update user:${error.message}`)
    }

}