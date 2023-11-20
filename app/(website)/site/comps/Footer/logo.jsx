import Link from "next/link";
import mainLogo from "../../../../../app/(website)/site/images/Logo.png";
import Image from "next/image";
const Logo = () => {
  return (
    <Link href="/">
      <h1 className="font-normal mt-[-3rem] text-5xl">
      <Image src={mainLogo} alt="Main-logo" className="footerLogo" />
      </h1>
    </Link>
  );
};

export default Logo;
