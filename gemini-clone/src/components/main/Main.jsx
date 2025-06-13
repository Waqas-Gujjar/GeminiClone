import React from "react";
import Navbar from "../navbar/Navbar";
import { FaPlus } from "react-icons/fa6";
import { TbWorldSearch } from "react-icons/tb";
import { BiAddToQueue } from "react-icons/bi";
import { IoMdMic } from "react-icons/io";

const Main = () => {
  return (
    <>
      <div className=" w-full bg-[#1a1b1c]">
        <Navbar />
        <div className="flex flex-col">
          <div className="flex justify-center items-center py-40">
            <h1 className="text-4xl font-semibold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
              Hello, Gemini
            </h1>
          </div>
        </div>
        <div className="flex justify-center items-center py-10 ">
          <div className="py-5 justify-between items-center border-2 h-27 w-200 border-[#4a4f4f] rounded-3xl px-6 font-semibold">
            <form action="">
              <input
                type="text"
                className="text-gray-300 outline-none w-full bg-transparent placeholder:text-gray-500"
                placeholder="Ask Gemini"
              />
            </form>
            <div className="flex items-center justify-between mt-5 gap-6">
              <div className="flex cursor-pointer items-center  text-gray-400 gap-4">
                <FaPlus  className="hover:bg-gray-700  rounded-full " size={"20px"} />
                <div className="flex   gap-1">
                   <TbWorldSearch   size={"20px"}  />
                <p>Deep Reserch</p>
                </div>
               
                <BiAddToQueue size={"20px"} />
              </div>
              <div className="text-gray-400">
                 <IoMdMic size={"20px"}  />
              </div>

             
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
