// import { connectToDB } from "../mongoDb/connect";
// import Comment from "../models/commentModel/comment";
// import User from "../models/userModels/user.model";
// import Application from "../models/applicationsModel/applications.model";










// export async function fetchMessage(userId: string) {
//     connectToDB();
//       try {
    
//         return await User.findOne({ id: userId })
//       } catch (error: any) {
//         throw new Error(`Failed to fetch user: ${error.message}`);
//       }
//     }












// interface Params {
//     content?:string | null | undefined;
//     sender?:string | null | undefined;
//     receiver?:string | null | undefined;
//     applicantId?:string | null | undefined;
//     // bio?:string | null | undefined;
//     // image?:string | null | undefined;
//     // path?:string | null | undefined;
//     // email?:string | null | undefined;
//     // objectId?:string | null | undefined;
// }

// export async function sendComment({content,sender,receiver,applicantId}:Params):Promise<void>{
//     connectToDB();

    
//     try {

     
//           const user = await User.findOne({ id: sender });
        
        
//         const createdComment = await Comment.create(
//         {content:content,receiver:receiver, sender:user._id})
     
        
 
//         if (createdComment) {
//           // Update the user's 'books' field to include the book's ID
//           const applicant = await Application.findOne({ _id: applicantId });
//           const c = applicant?.comments?.push(createdComment?._id?.toString());
//           console.log(c)
    
//           // Save the updated user
//           await applicant.save();
//         }

     

//         // if (path === '/profile/edit'){
//         //     revalidatePath(path);
//         // }

     
//     } catch (error:any) {
//         throw new Error(`Failed to create comment:${error.message}`)
//     }

// }