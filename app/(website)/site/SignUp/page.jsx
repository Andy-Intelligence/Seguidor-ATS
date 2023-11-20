import Image from "next/image";
import illustration from "../images/Rectangle 7.svg";
import Link from "next/link"
import SignIn from '../comps/SignIn'
export default function Home() {
  return (
    <div className="container">
      <div className="shift">
      <Image src={illustration} alt="logo" quality={100} className="img" />
      <div className="absolute bottom-6 left-0  floater ">
        <p className="text-white  font-semibold text-2xl text-center">
          Streamline Your Recruitment Effort with{" "}
          <span className="block text-white">our Advanced Application Tracking System </span>
        </p>
      </div>
      <div className="signin">
        <h1 className="font-bold text-4xl text-color-">Logo</h1>
        <h2>Sign Up</h2>
        <SignIn />
        <p className="former">Already have an account
          {/* <Link href="/Login" className="link"> Login</Link> */}
          <Link href="/site" className="link"> Login</Link>
        </p>
      </div>
      </div>
    </div>
  );
}