"use client";

import Image from "next/image";
import { FC, useState } from "react";
import { AiOutlineInfoCircle, AiTwotoneLike } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { RiPencilFill } from "react-icons/ri";
import liesure from "../assets/leisure.png";
import activism from "../assets/activism.png";
import mba from "../assets/mba.png";
import philosophy from "../assets/philosophy.png";

interface LocationAndrecommendedProps {}

const LocationAndrecommended: FC<LocationAndrecommendedProps> = ({}) => {
    const [hide,setHide] = useState<boolean>(true);
  return (
    <div className="hidden lg:flex flex-col items-start">
      <form
        onSubmit={(e)=>{e.preventDefault();setHide(false)}} className="hidden relative mt-4 lg:flex flex-col gap-4 w-[240px]">
        <RiPencilFill className="absolute top-2 w-5 h-5 right-0" />
        <GoLocation className="absolute top-2 w-5 h-5 left-0" />
        <input
          type="text"
          defaultValue="Noida, India"
          className="p-1 focus:outline-none border-b px-6"
        />
        <div className="flex justify-between gap-2">
          <AiOutlineInfoCircle className="h-8 w-8 text-gray-700" />
          <p className="text-sm text-gray-700">
            Your location will help us serve better and extend a personalised
            experience.
          </p>
        </div>
      </form>
      <div className={hide?"hidden":"mt-8 flex flex-col items-center gap-4"}>
        <div className="flex justify-center items-start gap-1">
          <AiTwotoneLike className="text-gray-900" />
          <p>RECOMMENDED GROUPS</p>
        </div>
        <div className="flex justify-between w-full items-center">
          <Image
            src={liesure}
            alt="leisure"
            className="h-12 w-12 rounded-full"
          />
          <p>Leisure</p>
          <button className="bg-gray-300 text-black px-3 py-1.5 rounded-full">
            Follow
          </button>
        </div>
        <div className="flex justify-between w-full items-center">
          <Image
            src={activism}
            alt="leisure"
            className="h-12 w-12 rounded-full"
          />
          <p>Activism</p>
          <button className="bg-gray-300 text-black px-3 py-1.5 rounded-full">
            Follow
          </button>
        </div>
        <div className="flex justify-between w-full items-center">
          <Image src={mba} alt="leisure" className="h-12 w-12 rounded-full" />
          <p>MBA</p>
          <button className="bg-gray-300 text-black px-3 py-1.5 rounded-full">
            Follow
          </button>
        </div>
        <div className="flex justify-between w-full items-center">
          <Image
            src={philosophy}
            alt="leisure"
            className="h-12 w-12 rounded-full"
          />
          <p>Philosophy</p>
          <button className="bg-gray-300 text-black px-3 py-1.5 rounded-full">
            Follow
          </button>
        </div>
      </div>
    </div>
  );
};

export default LocationAndrecommended;
