"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();

  return (
    <div className="flex flex-row gap-2 md:gap-8 items-center font-inter text-primary">
      <Image
        alt="Logo"
        className=" cursor-pointer mr-4 md:mr-8"
        height="50"
        width="50"
        src="/images/ILO_logo_green.png"
        onClick={() => {
          router.push("/");
        }}
      />
      <Link href="#" className="">
        {" "}
        ABOUT
      </Link>
      <Link href="#" className="">
        {" "}
        CONTACT
      </Link>
    </div>
  );
};

export default Logo;
