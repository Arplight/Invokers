"use client";
import Image from "next/image";
import Logo from "../../../public/logo/logo.svg";
import { BarLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="flex min-h-screen items-center justify-center flex-col gap-2">
      <Image
        src={Logo}
        alt="Raseen logo"
        width={300}
        height={300}
        className="object-contain"
      />
      <BarLoader color="#36d7b7" height={3} width={200} aria-label="Loading" />
    </div>
  );
};

export default Loading;
