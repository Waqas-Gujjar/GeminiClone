import React from "react";
import { SiGooglegemini } from "react-icons/si";
import { assets } from "../../assets/assets";
import { FaCaretDown } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="flex justify-between w-full px-4 py-2">
      {/* Left Side: Title with 2.5 Flash below */}
      <div className="flex flex-col justify-center">
        <h1 className="text-white text-lg font-medium leading-none">Gemini</h1>
        <div className="flex items-center gap-1 mt-1 px-4 py-[2px] bg-[#2a2a2a] rounded-full text-xs font-semibold text-gray-400 w-fit">
          <span>2.5 Flash</span>
          <FaCaretDown className="text-gray-500" size={12} />
        </div>
      </div>

      {/* Right Side: Upgrade Button + Profile */}
      <div className="flex items-center gap-6">
        <button className="flex items-center gap-1.5 px-4 py-1.5 cursor-pointer rounded-md bg-[#2a2a2a] hover:bg-[#333333] font-semibold text-xs text-white transition">
          <SiGooglegemini className="text-pink-400" size={16} />
          Upgrade
        </button>
        <div className="cursor-pointer font-semibold flex items-center justify-center uppercase">
          <img className="h-8 w-8 rounded-full" src={assets.user_icon} alt="User" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
