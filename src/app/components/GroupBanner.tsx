import Image from "next/image";
import { FC } from "react";
import groupBannerImg from "../assets/Rectangle 2.png";
import {BiArrowBack} from "react-icons/bi";

interface GroupBannerProps {
  groupJoin:boolean
  setGroupJoin:Function
}

const GroupBanner: FC<GroupBannerProps> = ({groupJoin,setGroupJoin}) => {
  return (
    <section className="w-full relative h-max">
      <Image
        src={groupBannerImg}
        className="min-w-[100vw] object-cover max-h-[70vh] fill-neutral-700 object-center"
        alt="Group Banner"
      />
      <div className="absolute w-full bg-[rgba(0,0,0,0.5)] inset-0 flex flex-col justify-between lg:justify-end items-center">
        <div className="flex mt-2 lg:hidden justify-between items-center w-[96%]">
            <BiArrowBack className="h-8 w-8 text-white"/>
            <button onClick={()=>setGroupJoin((prev:boolean)=>(!prev))} className="text-lg text-white font-semibold p-2 rounded-md border-white border-2">{groupJoin?"Joined":"Join Group"}</button>
        </div>
        <div className="flex flex-col text-white mb-4 lg:mb-8 w-[96%] max-w-7xl justify-start items-start">
            <p className="text-xl font-bold lg:text-3xl">Computer Engineering</p>
            <p className="text-base md:text-lg lg:text-xl font-normal">142,765 Computer Engineers follow this</p>
        </div>
      </div>
    </section>
  );
};

export default GroupBanner;
