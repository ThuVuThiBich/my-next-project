import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer>
      <div className=" flex h-1/2  flex-col items-start justify-between bg-black p-10 text-white  md:h-1/4 md:p-24 lg:flex-row">
        <div className="w-full md:w-1/2">
          <div
            className="
            mb-2
           flex
          flex-col
        items-start 
        justify-center
        "
          >
            <div
              className="
              mb-2
              flex
              flex-col
            text-base 
            font-black
          uppercase leading-8 
        md:text-xl"
            >
              Công ty TNHH XD&TM HÙNG PHONG
            </div>
            <div>Địa chỉ: </div>
            <div>Email: </div>
          </div>
          <div className="flex">
            <div className="mr-4 text-lg uppercase">Mạng xã hội:</div>
            <div className="flex gap-6 pb-5">
              <FaInstagram className="cursor-pointer text-2xl hover:text-yellow-600" />
              <FaTwitter className="cursor-pointer text-2xl hover:text-blue-600" />
              <FaLinkedin className="cursor-pointer text-2xl hover:text-blue-600" />
              <FaYoutube className="cursor-pointer text-2xl hover:text-red-600" />
            </div>
          </div>
        </div>

        <div className=" w-full md:w-1/2">
          <div className="mb-2 text-lg uppercase">Bản đồ:</div>

          <div s className="w-full">
            <iframe
              width="100%"
              height="300"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
              src="https://maps.google.com/maps?width=100%25&amp;height=300&amp;hl=en&amp;q=27,%20Nguy%E1%BB%85n%20B%E1%BA%A3o,%20H%C3%B2a%20Ch%C3%A2u,%20H%C3%B2a%20Vang,%20%C4%90%C3%A0%20N%E1%BA%B5ng+(H%C3%B9ng%20Phong)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            >
              <a href="https://www.gps.ie/marine-gps/">navigation gps</a>
            </iframe>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center bg-[#aa0706]  p-5 text-center text-white">
        <h1 className=" font-semibold ">
          © 2021-2022 by 7huh7. All rights reserved
        </h1>
      </div>
    </footer>
  );
}
