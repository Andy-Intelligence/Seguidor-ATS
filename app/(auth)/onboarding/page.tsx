import Image from "next/image";
import illustration from "../../../public/images/Rectangle 7.svg";
import { fetchUser } from "@/backend/actions/user.actions";
import AccountProfile from "@/components/forms/AccountProfile"
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

export default async function Home() {
   


  const user = await currentUser();
  if (!user) return null; // to avoid typescript warnings

  const userInfo = await fetchUser(user.id);
  if (userInfo?.onboarded) redirect("/");

  const userData = {
      id:user?.id,
      objectId:userInfo?._id,
      username:userInfo?.username || user?.username,
      name:userInfo?.name || user?.firstName || "",
      bio:userInfo?.bio || "",
      image:userInfo?.image || user?.imageUrl    
  }


  return (
    <main className="flex flex-row items-center justify-center w-full">
      <section className="w-1/2">
    <div className="">
      <h1 className="font-bold text-4xl text-center">Logo</h1>
      <h2 className="text-center">Kudos You Are Almost Done!</h2>
    </div>
    <div>
      <Image src={illustration} alt="logo" quality={100} className="img" />
      <div className="absolute bottom-1 left-0  floater ">
        <p className="text-white  font-semibold text-2xl text-center">
          Streamline Your Recruitment Effort with{" "}
          <span className="block text-white">
            our Advanced Application Tracking System{" "}
          </span>
        </p>
      </div>
    </div>
    </section>
    <section className="w-1/2 bg-red-500 flex items-center justify-center">
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


