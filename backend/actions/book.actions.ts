
"use server";
import { revalidatePath } from "next/cache";
import Chapter from "../models/applicationsModel/applications.model";
import User from "../models/userModels/user.model";
import Book from "../models/bookModel/book.model";
import { connectToDB } from "../mongoDb/connect";

interface Params {
  userId?: string | null | undefined;
  name?: string | null | undefined;
  coverPhoto?: string | null | undefined;
  caption?: string | null | undefined;
}

export async function createBook({
  userId,
  name,
  coverPhoto,
  caption,
}: Params): Promise<void> {
  connectToDB();

  try {
    // Find the user by their userId   
    const user = await User.findOne({ id: userId });

    if (!user) {
      throw new Error(`User not found with id: ${userId}`);
    }

    // Create a new book
    const createdBook = await Book.create({
      author: user._id, // Associate the book with the user
      coverPhoto: coverPhoto,
      name: name,
      caption: caption,
    });

    if (createdBook) {
      // Update the user's 'books' field to include the book's ID
      user.books.push(createdBook._id.toString());

      // Save the updated user
      await user.save();
    }
  } catch (error: any) {
    throw new Error(`Failed to create Book: ${error.message}`);
  }
}







interface delParams {
    userIdd?: string | null | undefined;
    bookIdd?: string | null | undefined;
    // coverPhoto?: string | null | undefined;
    // caption?: string | null | undefined;
  }



export async function deleteBook({userIdd,bookIdd}:delParams):Promise<void>{
    connectToDB()
    // Assuming you have the user ID and book ID
const userId = "651203d3a61b0118fe8088e5";
const bookId = '6512e3eda9e7d2a5a094edcb';

try {
  // Find the user by ID
  const user = await User.findById(userId);

  if (!user) {
    throw new Error('User not found.');
  }

  // Remove the book ID from the user's books array
  user.books.pull(bookId);

  // Save the updated user
  await user.save();

  // Now, you can safely delete the book
  await Book.findByIdAndDelete(bookId);

  console.log('Book deleted and removed from user.books array.');
} catch (error:any) {
  console.error('Error:', error.message);
}

}





export async function getAllBooks(){
  connectToDB()
  try {

  const res = await Book.find({}).populate("author")
  const books = JSON.parse(JSON.stringify(res))
  console.log("books",books)
  return books

} catch (error:any) {
  console.log(`there was an error findind all books${error.message}`)
}
} 






interface BookParams {
  // userIdd?: string | null | undefined;
  bookId?: string | null | undefined;
  // coverPhoto?: string | null | undefined;
  // caption?: string | null | undefined;
}


export async function getSingleBook({bookId}:BookParams){
  connectToDB()
  try {
    const res = await Book.findOne({ _id: bookId }).populate("author","name")
    const book = JSON.parse(JSON.stringify(res))
    console.log("bebeebe", book)
const sanitizedBook = {
  _id: book._id,
  name: book.name,
  caption: book.caption,
  chapters:book.chapters.length,
  // name: book.name,
  // Add other properties you need
  author: {
    _id: book.author._id,
    name: book.author.name,
    // Add other author properties you need
  },
};
    return sanitizedBook;
  } catch (error:any) {
    console.error('Error searching in the database:', error);
    
    return {}
  }  
}