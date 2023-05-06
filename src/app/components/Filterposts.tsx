"use client";

import { FC, useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import joinGrouppng from "../assets/joingroup.png";
import Image from "next/image";

interface FilterpostsProps {
    groupJoin:boolean
  setGroupJoin:Function
}

const Filterposts: FC<FilterpostsProps> = ({groupJoin,setGroupJoin}) => {
  const [filter, setFilter] = useState<string>("All");
  return (
    <div style={{position:"-webkit-sticky"}} className="w-[calc(100vw-32px)] sticky bg-white top-12 z-20 lg:border-b mx-4 max-w-[1024px] flex justify-between items-center mb-4">
      <p className="lg:hidden text-2xl font-bold text-black">Posts(4)</p>
      <button className="lg:hidden flex relative group items-center justify-around py-1.5 px-3 rounded bg-[#F1F3F5] text-[#212529]">
        Filter: {filter} <AiFillCaretDown className="w-4 h-4 ml-1" />
        <div className="absolute top-9 right-0 left-0 hidden min-w-[6rem] h-max group rounded group-hover:flex flex-col bg-white items-start">
          <div
            className="p-1 rounded hover:bg-gray-400 w-full"
            onClick={() => setFilter("All")}
          >
            All Posts
          </div>
          <div
            className="p-1 rounded hover:bg-gray-400 w-full"
            onClick={(e) => setFilter(e.currentTarget.innerText)}
          >
            Article
          </div>
          <div
            className="p-1 rounded hover:bg-gray-400 w-full"
            onClick={(e) => setFilter(e.currentTarget.innerText)}
          >
            Event
          </div>
          <div
            className="p-1 rounded hover:bg-gray-400 w-full"
            onClick={(e) => setFilter(e.currentTarget.innerText)}
          >
            Education
          </div>
          <div
            className="p-1 rounded hover:bg-gray-400 w-full"
            onClick={(e) => setFilter(e.currentTarget.innerText)}
          >
            Job
          </div>
        </div>
      </button>
      <div className="hidden lg:flex justify-around items-center gap-x-4">
        <p onClick={()=>setFilter("All")} className={filter==="All"?"py-5 border-b-2 border-black cursor-pointer":"py-5 cursor-pointer"}>All Posts</p>
        <p onClick={(e)=>setFilter(e.currentTarget.innerText)} className={filter==="Article"?"py-5 border-b-2 border-black cursor-pointer":"py-5 cursor-pointer"}>Article</p>
        <p onClick={(e)=>setFilter(e.currentTarget.innerText)} className={filter==="Event"?"py-5 border-b-2 border-black cursor-pointer":"py-5 cursor-pointer"}>Event</p>
        <p onClick={(e)=>setFilter(e.currentTarget.innerText)} className={filter==="Education"?"py-5 border-b-2 border-black cursor-pointer":"py-5 cursor-pointer"}>Education</p>
        <p onClick={(e)=>setFilter(e.currentTarget.innerText)} className={filter==="Job"?"py-5 border-b-2 border-black cursor-pointer":"py-5 cursor-pointer"}>Job</p>
      </div>
      <div className="hidden lg:flex justify-around items-center mb-2 gap-x-4">
        <button className="flex items-center justify-around py-1.5 px-3 rounded bg-[#F1F3F5] text-[#212529]">
          Write a Post
          <AiFillCaretDown className="w-4 h-4 ml-1" />
        </button>
        <button onClick={()=>setGroupJoin((prev:boolean)=>(!prev))} className="bg-[#2F6CE5] flex items-center justify-around py-1.5 px-3 rounded text-white">
          <Image src={joinGrouppng} alt="Join Group" className="h-5 w-5 mr-1" />
          {groupJoin?"Leave":"Join Group"}
        </button>
      </div>
    </div>
  );
};

export default Filterposts;