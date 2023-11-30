import Image from "next/image";
import illustration from "../../../public/images/Rectangle 7.svg";
import { fetchUser } from "@/backend/actions/user.actions";
import AccountProfile from "@/components/forms/AccountProfile"
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

export default async function Home() {
   


  const user = await currentUser();
  if (!user) return null; // to avoid typescript warnings

  // const userInfo = await fetchUser(user.id);
  // if (userInfo?.onboarded) redirect("/");


  let userInfo;

  try {
    // Try to fetch user info from the database
    userInfo = await fetchUser(user.id);
  } catch (error:any) {
    // Handle the error (user not found) and continue without throwing an error
    userInfo = null;
  }

  if (userInfo && userInfo.onboarded) {
    // If userInfo is defined and onboarded is true, redirect to home page
    redirect("/");
  }



  const userData = {
    id: user?.id,
    objectId: userInfo?._id || "",
    username: userInfo?.username || user?.username || "",
    name: userInfo?.name || user?.firstName || "",
    bio: userInfo?.bio || "",
    image: userInfo?.image || user?.imageUrl || "",
  };

  
  return (   <main className="flex flex-row items-center justify-evenly w-full">
      <section className="w-1/2">
    <div className="">
      <h1 className="font-bold text-4xl text-center mt-5">Seguidor</h1>
      <h2 className="text-center mb-5">Kudos You Are Almost Done!</h2>
    </div>
    {/* <div>
      <Image src={illustration} alt="logo" quality={100} className="img" />
      <div className="absolute bottom-1 left-25  floater ">
      <p className="text-white  font-semibold text-2xl text-center">
          Streamline Your Recruitment Effort with{" "}
          <span className="block text-white">
            our Advanced Application Tracking System{" "}
          </span>
        </p>
      </div>
    </div> */}
    <div className="relative w-full h-[80vh]">
  {/* Image */}

  <Image src={illustration} alt="logo"  quality={100} className="object-cover w-full h-full" />

  {/* Text container */}
  <div className="absolute bottom-0 left-0 right-0 bg-opacity-70 bg-gray-800 text-white text-center p-4">
  <p className="text-white  font-semibold text-2xl text-center">
          Streamline Your Recruitment Effort with{" "}
          <span className="block text-white">
            our Advanced Application Tracking System{" "}
          </span>
        </p>
  </div>
</div>
    </section>
    <section className="  flex items-center justify-center">
    <AccountProfile user= {userData} btnTitle = "Continue"/>
    </section>
  </main>
    // <main className="mx-auto flex max-w-3xl flex-col justify-start px-10 py-20">
    //     <h1 className="text-xl"> Onboarding</h1>
    //     <p className="mt-3 text-base text-black">Please Complete Your Profile</p>


    //     <section className="bg-buttonPurple mt-9 p-10">
    //         <AccountProfile user= {userData} btnTitle = "Continue"/>
    //     </section>
    // </main>
  )
}


