"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();

  return (
    <Image
      alt="Logo"
      className=" cursor-pointer"
      height="50"
      width="50"
      src="/images/ILO_logo_green.png"
      onClick={() => {
        router.push("/");
      }}
    />
  );
};

export default Logo;
