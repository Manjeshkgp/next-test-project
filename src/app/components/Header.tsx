import { FC } from "react";
import logo from "../assets/logo.png";
import Image from "next/image";
import { AiOutlineSearch, AiFillCaretDown } from "react-icons/ai";
import profileImg from "../assets/Rectangle 6.png";
import Link from "next/link";

interface HeaderProps {
  setAuthPopup: Function;
  isAuthorized?: boolean;
}

const Header: FC<HeaderProps> = ({ isAuthorized, setAuthPopup }) => {
  return (
    <div className="fixed z-40 w-full h-12 bg-white flex justify-around items-center border-b">
      <Link href="/">
        <Image src={logo} alt="logo" className="w-28" />
      </Link>
      <div className="relative hidden lg:block">
        <AiOutlineSearch className="h-6 w-6 text-[#7A7A7A] absolute top-1.5 left-1" />
        <input
          type="text"
          className="pl-8 px-3 py-1.5 w-80 bg-[#F2F2F2] rounded-full focus:outline-none"
          placeholder="Search for your favorite groups in ATG"
        />
      </div>
      <div className="flex gap-3 justify-around items-center">
        {isAuthorized ? (
          <>
            <Image src={profileImg} alt="Profile Image" className="h-8 w-8" />
            <p>Siddhart Goyal</p>
          </>
        ) : (
          <p
            onClick={() => setAuthPopup(true)}
            className="cursor-pointer text-[#2E2E2E]"
          >
            Create Account.{" "}
            <span className="text-[#2F6CE5]">It&apos;s free!</span>
          </p>
        )}
        <AiFillCaretDown className="h-4 w-4" />
      </div>
    </div>
  );
};

export default Header;
