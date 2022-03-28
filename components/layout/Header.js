import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { Link } from "react-scroll";
import Image from "next/image";
import Navbar from "./Navbar";
import Images from "../../constants/image";
import call from "../../assets/icons/call.png";
import Slideshow from "./Slideshow";
// import Logo from "../public/streamlineLogo.png";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <header
        className="
        container 
      mx-auto 
      flex 
      items-center 
      justify-between bg-gradient-to-b from-white to-blue-50 py-2 px-4  md:flex md:items-center md:py-4"
      >
        <div className="flex items-center">Logo</div>
        <div
          className="
          hidden flex-col
          items-center 
        justify-center 
         md:flex md:flex-col md:items-center md:justify-end
        "
        >
          <div
            className="
            mb-2 
            font-black
          uppercase leading-8 
          text-[#EC0A0A] 
        md:text-3xl"
          >
            Công ty TNHH XD&TM HÙNG PHONG
          </div>
          <div>Địa chỉ: </div>
          <div>Email: </div>
        </div>
        <div className="flex items-center ">
          <div className="mr-2 h-8 w-8">
            <Image src={call} alt="" className="h-full w-full object-cover" />
          </div>
          <div>
            <div>HOTLINE</div>
            <div className="text-xl font-bold text-[#EC0A0A]">0832890865</div>
          </div>
        </div>
      </header>
      <Navbar />
      <Slideshow />
    </>
  );
}
