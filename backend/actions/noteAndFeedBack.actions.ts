"use server"
import { revalidatePath } from "next/cache";
import User from "../models/userModels/user.model";
import Message from "../models/noteAndFeedBackModel/noteAndFeedBack.model";
import { connectToDB } from "../mongoDb/connect"
import Chapter from "../models/applicationsModel/applications.model";






export async function fetchMessage(userId: string) {
  connectToDB();
    try {
  
      return await User.findOne({ id: userId })
    } catch (error: any) {
      throw new Error(`Failed to fetch user: ${error.message}`);
    }
  }


interface Params {
    content?:string | null | undefined;
    sender?:string | null | undefined;
    receiver?:string | null | undefined;
    chapterId?:string | null | undefined;
    anonymous?:boolean;
    // bio?:string | null | undefined;
    // image?:string | null | undefined;
    // path?:string | null | undefined;
    // email?:string | null | undefined;
    // objectId?:string | null | undefined;
}

export async function sendMessage({content,sender,receiver,chapterId,anonymous}:Params):Promise<void>{
    connectToDB();

    
    try {
console.log(sender)
      if(!anonymous){
        const user = await User.findOne({ id: sender });
        
        
        const createdMessage = await Message.create(
        {content:content,sender:user._id,receiver:receiver})
     

        if (createdMessage) {
          // Update the user's 'books' field to include the book's ID
          const chapter = await Chapter.findOne({ _id: chapterId });
          const c = chapter?.comments?.push(createdMessage?._id?.toString());
          console.log(c)
    
          // Save the updated user
          await chapter.save();
        }
      }else{
          const user = await User.findOne({ id: sender });
        
        
        const createdMessage = await Message.create(
        {content:content,receiver:receiver, sender:user._id,anonymous:anonymous})
     
        
 
        if (createdMessage) {
          // Update the user's 'books' field to include the book's ID
          const chapter = await Chapter.findOne({ _id: chapterId });
          const c = chapter?.comments?.push(createdMessage?._id?.toString());
          console.log(c)
    
          // Save the updated user
          await chapter.save();
        }

        }

        // if (path === '/profile/edit'){
        //     revalidatePath(path);
        // }

     
    } catch (error:any) {
        throw new Error(`Failed to create message:${error.message}`)
    }

}