"use client";

import { FC, useState } from "react";
import { MdCancel } from "react-icons/md";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import fbImg from "../assets/f_logo_RGB-Blue_1024.png";
import googleImg from "../assets/search.png";
import pcAuthBanner from "../assets/pcAuthBanner.png";
import Image from "next/image";

interface AuthorizeProps {
  setAuthPopup:Function,
  setIsAuthorized:Function
}

const Authorize: FC<AuthorizeProps> = ({setAuthPopup,setIsAuthorized}) => {
  const [hidePass, setHidePass] = useState<boolean>(false);
  const [login, setLogin] = useState<boolean>(false);

  return (
    <div className="fixed z-40 bg-[rgba(0,0,0,0.6)] inset-0 flex justify-center items-end lg:items-center transition-all duration-300">
      <div className="relative transition-all lg:pt-10 duration-500 lg:scale-90 2xl:scale-100 bg-white p-3 lg:p-4 w-full max-w-[750px] flex flex-col justify-items-start lg:flex-row items-center lg:items-start rounded-t-lg lg:rounded-lg text-black">
        <p className="w-full text-[#008A45] bg-[#EFFFF4] rounded-lg px-6 p-2 hidden absolute top-0 left-0 right-0 lg:block text-center">
          Let&apos;s learn, share & inspire each other with our passion for
          computer engineering. Sign up now 🤘🏼
        </p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setIsAuthorized(true);
            setAuthPopup(false);
          }}
          className="flex flex-col w-full lg:w-[calc(100%-300px)] items-center"
        >
          <div className="w-full flex justify-between items-end flex-row lg:justify-start">
            <p className="font-bold text-[35px] leading-[45px] lg:text-[40px] lg:leading-[52px]">
              {login ? "Welcome Back!" : "Create Account"}
            </p>
            <MdCancel onClick={()=>{setAuthPopup((prev:boolean)=>(!prev))}} className="text-[#212529] cursor-pointer w-[35px] h-[35px] lg:absolute lg:-right-6 lg:w-8 lg:h-8 lg:-top-10 lg:text-white" />
          </div>
          <div className="flex items-center mt-4 justify-center w-full">
            <input
              type="text"
              placeholder="First Name"
              className={
                login
                  ? "hidden"
                  : "w-[calc(50%)] px-3 py-2 border border-r-[0.5px] border-[#8A8A8A] rounded-tl-sm focus:outline-none"
              }
            />
            <input
              type="text"
              placeholder="Last Name"
              className={
                login
                  ? "hidden"
                  : "w-[calc(50%)] px-3 py-2 border border-l-[0.5px] border-[#8A8A8A] rounded-tr-sm focus:outline-none"
              }
            />
          </div>
          <input
            type="text"
            className="px-3 py-2 border border-[#8A8A8A] rounded-tr-sm focus:outline-none w-full"
            placeholder="Email"
          />
          <div className="relative w-full">
            <input
              type={hidePass ? "password" : "text"}
              className="px-3 pr-8 py-2 border border-[#8A8A8A] rounded-tr-sm focus:outline-none w-full"
              placeholder="Password"
            />
            <div
              onClick={() => {
                setHidePass((prev: boolean) => !prev);
              }}
              className="absolute flex justify-center items-center w-[41px] h-[41px] top-0 right-0"
            >
              {hidePass ? (
                <AiOutlineEyeInvisible className="text-[#8A8A8A] h-6 w-6" />
              ) : (
                <AiOutlineEye className="text-[#8A8A8A] h-6 w-6" />
              )}
            </div>
          </div>
          <input
            type={hidePass ? "password" : "text"}
            className={
              login
                ? "hidden"
                : "px-3 py-2 border border-[#8A8A8A] rounded-tr-sm focus:outline-none w-full rounded-b-sm"
            }
            placeholder="Confirm Password"
          />
          <div className="mt-4 flex justify-between w-full items-center font-semibold">
            <button
              type="submit"
              className="bg-[#2F6CE5] w-40 lg:w-full py-2 rounded-full text-white"
            >
              {login ? "Sign In" : "Create Account"}
            </button>
            <p
              onClick={() => setLogin((prev: boolean) => !prev)}
              className="text-[#495057] lg:hidden underline"
            >
              or, {login ? "Create Account" : "Sign In"}
            </p>
          </div>
          <div className="cursor-pointer flex mt-4 border border-[#8A8A8A] rounded-sm w-full p-2 justify-center items-center gap-2">
            <Image src={fbImg} alt="Fb" className="w-6 h-6" />
            <p>Sign {login ? "In" : "Up"} with Facebook</p>
          </div>
          <div className="cursor-pointer flex mt-2 border border-[#8A8A8A] rounded-sm w-full p-2 justify-center items-center gap-2">
            <Image src={googleImg} alt="Fb" className="w-6 h-6" />
            <p>Sign {login ? "In" : "Up"} with Google</p>
          </div>
        </form>
        <div
          className={
            login
              ? "flex flex-col gap-3 items-end w-full lg:w-[420px] p-2"
              : "flex flex-col gap-3 items-center w-full lg:w-[450px] p-2"
          }
        >
          <div className="w-full justify-end items-center hidden lg:flex">
            <p className="text-[#3D3D3D]">
              {login
                ? "Don't have an account yet? "
                : "Already have an account? "}
              <span
                onClick={() => setLogin((prev: boolean) => !prev)}
                className="text-[#2F6CE5] cursor-pointer"
              >
                {login ? "Create new for free!" : "Sign In"}
              </span>
            </p>
          </div>
          <Image
            src={pcAuthBanner}
            alt="Pc Auth Banner"
            className={
              login
                ? "hidden lg:block w-[420px] object-contain"
                : "hidden lg:block w-[350px] object-contain"
            }
          />
          <p
            className={
              login ? "hidden" : "w-80 lg:w-full text-center lg:text-xs"
            }
          >
            By signing up, you agree to our Terms & conditions, Privacy policy
          </p>
          <p
            className={
              login
                ? "font-semibold text-black w-full text-center my-8 lg:my-0"
                : "hidden"
            }
          >
            Forgot Password?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Authorize;
