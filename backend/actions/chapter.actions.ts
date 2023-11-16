"use server";
import { revalidatePath } from "next/cache";
import Chapter from "../models/applicationsModel/applications.model";
import Book from "../models/bookModel/book.model";
import User from "../models/userModels/user.model";
import Message from "../models/noteAndFeedBackModel/noteAndFeedBack.model";
import { connectToDB } from "../mongoDb/connect";
const mongoose = require("mongoose");

interface Params {
  bookId?: string | null | undefined;
  userId?: string | null | undefined;
  header?: string | null | undefined;
  text?: string | null | undefined;
  path: string;
}

export async function createChapter({
  userId,
  header,
  text,
  path,
}: Params): Promise<void> {
  connectToDB();

  try {
    // Find the user by its ID
    const mongoUser = await User.findOne({ id: userId });
    // const mongoUser = JSON.parse(JSON.stringify(resp))

    const book = await Book.findOne({ author: mongoUser._id });
    // const book = JSON.parse(JSON.stringify(re))

    if (!book) {
      throw new Error("Book not found");
    }

    // Create a new chapter
    const createdChapter = await Chapter.create({
      book: book._id,
      header: header || "",
      text: text || "",
      // You can add other chapter properties here
    });

    console.log("cc",createChapter)

    // Add the chapter's _id to the book's chapters array
    book?.chapters?.push(createdChapter?._id);
    

    // Save the book to update its chapters array
    await book.save();

    const user = await User.findOne({ id: userId });
    // const user = JSON.parse(JSON.stringify(res))

      if (user) {
        // Update the user's 'books' field to include the book's ID
        user?.books?.push(book._id);

        // Save the updated user
        await user.save();
      }
 

    // Revalidate the path
    revalidatePath(path);
  } catch (error: any) {
    throw new Error(`Failed to create Chapter: ${error.message}`);
  }
}



interface BookParams{
  bookId:string;
}
export async function getBookChapter({bookId}:BookParams){
  connectToDB()
  try {

  const res = await Book.findOne({_id:bookId}).populate({
    path: 'chapters',
    populate: {
      path: 'comments',
      populate: {
        path: 'sender',
      },
      
    },
  })
  const book = JSON.parse(JSON.stringify(res))
  console.log("book chapter",book) 
  return book
   
} catch (error:any) {
  console.log(`there was an error findind all books${error.message}`)
}
} 











interface ChapterParams{
  chapterId:string;
}
export async function getChapter({chapterId}:ChapterParams){
  connectToDB()
  try {
    if (mongoose.Types.ObjectId.isValid(chapterId)){
      await Message.find({})
      const res = await Chapter?.findOne({_id:chapterId}).populate("comments").exec()
      
      
      // const res2 = await Chapter?.findOne({_id:chapterId})
      // const res1 = res.populate("comments")
      // console.log(res.populate("comments")) 
      
  const chapter = JSON.parse(JSON.stringify(res)) 
  // console.log("ch",chapter)
  return chapter}

} catch (error:any) {
  console.log(`${error.message}`)
}
} 