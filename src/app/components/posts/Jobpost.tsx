"use client";

import { FC } from "react";
import redCarimg from "../../assets/redCar.png"
import Image from "next/image";
import { BsThreeDots, BsShareFill } from "react-icons/bs";
import { AiOutlineEye } from "react-icons/ai";
import calendar from "../../assets/baseline-today-24px.png"
import location from "../../assets/outline-location_on-24px.png"

interface JobpostProps {}

const Jobpost: FC<JobpostProps> = ({}) => {
  return (
    <div className="w-full h-max max-w-[728px] flex flex-col rounded-sm overflow-hidden border">
      <div className="flex w-full justify-start items-center m-4">
        <p className="font-semibold">💼️ Job</p>
      </div>
      <div className="m-4 mt-0 lg:text-xl font-bold flex justify-between gap-3 items-start relative">
        <p>Software Developer - II</p>
        <div className="group">
          <BsThreeDots className="w-8 h-8 cursor-pointer hover:bg-gray-400 p-1 group rounded-md" />
          <div className="group-hover:flex rounded flex-col font-medium text-base bg-white group hidden absolute right-0 top-8 min-w-[8rem] w-max p-1 shadow-[rgba(0,0,0,0.2)] shadow-lg">
            <p className="p-1 rounded hover:bg-gray-300">Edit</p>
            <p className="p-1 rounded hover:bg-gray-300">Report</p>
            <p className="p-1 rounded hover:bg-gray-300">Option 3</p>
          </div>
        </div>
      </div>
      <div className="m-4 w-[calc(100%-32px)] mt-0 flex justify-between lg:justify-start items-center lg:gap-x-8">
        <div className="flex justify-center items-center">
            <Image src={calendar} alt="location" className="w-[20px] h-[20px]"/>
            <p className="truncate text-ellipsis">Innovaccer Analytics Private Ltd.</p> 
        </div>
        <div className="flex justify-center items-center">
            <Image src={location} alt="location" className="w-[20px] h-[20px]"/>
            <p className="truncate text-ellipsis">Noida, India</p>
        </div>
      </div>
      <button className="m-4 mt-0 w-[calc(100%-32px)] bg-white text-[#02B875] border border-[#A9AEB8] text-center py-1.5 rounded-lg font-semibold">Apply on Timesjobs</button>
      <div className="flex w-[calc(100%-32px)] m-4 mt-0 justify-between items-center">
        <div className="flex justify-center items-center gap-2">
          <Image
            src={redCarimg}
            alt="Profile"
            className="h-10 w-10 rounded-full"
          />
          <div className="flex flex-col gap-[2px] text-sm leading-[16px]">
            <p className="text-black text-base font-bold">Sarthak Verma</p>
            <p className="text-[#495057] font-semibold lg:hidden">1.4k views</p>
          </div>
        </div>
        <div className="flex justify-between items-center gap-4">
          <p className="hidden lg:flex justify-between items-center text-[#495057] font-semibold">
            <span>
              <AiOutlineEye className="w-5 h-5 mr-2" />
            </span>
            1.4k views
          </p>
          <button className="bg-[#EDEEF0] text-[#2d2d2d] flex justify-center gap-2 items-center p-2 rounded">
            <BsShareFill />
            <p className="lg:hidden">Share</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Jobpost;