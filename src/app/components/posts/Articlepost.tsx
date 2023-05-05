"use client";

import { FC } from "react";
import mountain from "../../assets/Mountains.png";
import Image from "next/image";
import { BsThreeDots, BsShareFill } from "react-icons/bs";
import { AiOutlineEye } from "react-icons/ai";

interface ArticlepostProps {}

const Articlepost: FC<ArticlepostProps> = ({}) => {
  return (
    <div className="w-full h-max max-w-[728px] flex flex-col rounded-sm overflow-hidden border">
      <Image
        src={mountain}
        alt="Article Image"
        className="w-[100vw] md:w-[728px] h-full"
      />
      <div className="flex w-full justify-start items-center m-4">
        <p className="font-semibold">✍️ Article</p>
      </div>
      <div className="m-4 mt-0 lg:text-xl font-bold flex justify-between gap-3 items-start relative">
        <p>What if famous brands had regular fonts? Meet RegulaBrands!</p>
        <div className="group">
          <BsThreeDots className="w-8 h-8 cursor-pointer hover:bg-gray-400 p-1 group rounded-md" />
          <div className="group-hover:flex rounded flex-col font-medium text-base bg-white group hidden absolute right-0 top-8 min-w-[8rem] w-max p-1 shadow-[rgba(0,0,0,0.2)] shadow-lg">
            <p className="p-1 rounded hover:bg-gray-300">Edit</p>
            <p className="p-1 rounded hover:bg-gray-300">Report</p>
            <p className="p-1 rounded hover:bg-gray-300">Option 3</p>
          </div>
        </div>
      </div>
      <div className="m-4 w-[calc(100%-32px)] mt-0">
        <p className="text-[#495057] font-normal lg:text-lg truncate text-ellipsis">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo,
          dolore magnam dolor itaque veritatis sit.
        </p>
      </div>
      <div className="flex w-[calc(100%-32px)] m-4 mt-0 justify-between items-center">
        <div className="flex justify-center items-center gap-2">
          <Image
            src={mountain}
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

export default Articlepost;
