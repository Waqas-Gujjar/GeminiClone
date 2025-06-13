import React from "react";
import { assets } from "../../assets/assets";
import { IoIosSearch } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { PiNotePencilBold } from "react-icons/pi";
import { MdMoreTime } from "react-icons/md";
import { MdSettings } from "react-icons/md";

const SiderBar = () => {
  return (
    <div className="flex flex-col h-screen w-90 font-sans  text-[#a9aaaa] bg-[#282A2C] justify-between">
      {/* Top Section */}
      <div>
  {/* Header */}
  <div className="flex items-center justify-between px-5 py-4">
    <div className="flex items-center text-[#6a6d6e] rounded-full hover:bg-gray-700 cursor-pointer p-2">
      <GiHamburgerMenu size="20px" />
    </div>
    <div className="flex items-center rounded-full hover:bg-gray-700 cursor-pointer p-2">
      <IoIosSearch size="20px" />
    </div>
  </div>

  {/* Menu Items */}
  <div className="flex flex-col px-5 gap-4">
    {/* New Chat */}
    <div className="flex items-center gap-2 hover:bg-gray-700 cursor-pointer p-2 rounded-full transition-all duration-200 ease-in-out">
      <PiNotePencilBold size="20px" />
      <p className="text-sm font-semibold ml-3">New Chat</p>
    </div>

    {/* Explore Gems */}
    <div className="flex items-center gap-2 hover:bg-gray-700 cursor-pointer p-2 rounded-full transition-all duration-200 ease-in-out">
      <MdMoreTime size="20px" />
      <p className="text-sm font-semibold ml-3">Explore Gems</p>
    </div>

    {/* Recent Section */}
    <div className="flex flex-col gap-3 mt-4">
      <h1 className="text-sm font-semibold text-gray-400 px-2">Recent</h1>

      {/* Only Text (No Icon) */}
      <div className="hover:bg-gray-700 cursor-pointer p-2 rounded-full transition-all duration-200 ease-in-out">
        <p className="text-sm font-semibold text-gray-300 ml-1">Create an app in React</p>
      </div>
    </div>
  </div>
</div>

{/* Bottom Section */}
<div className="flex flex-col px-5 gap-4 pb-6">
  <div className="flex items-center gap-2 hover:bg-gray-700 cursor-pointer p-2 rounded-full transition-all duration-200 ease-in-out">
    <MdSettings size="20px" />
    <p className="text-sm font-semibold ml-3">Settings & Help</p>
  </div>
</div>

    </div>
  );
};

export default SiderBar;
