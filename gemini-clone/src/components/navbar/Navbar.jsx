import React from "react";
import { SiGooglegemini } from "react-icons/si";
import { assets } from "../../assets/assets";
import { FaCaretDown } from "react-icons/fa";




const Navbar = () => {
  return (
    <div className="flex justify-between  w-full p-3 ">
      {/* Left Side: Title + Model version */}
      <div className="gap-2 ">
        <h1 className="text-white text-xl font-medium">Gemini</h1>
        <div className="flex cursor-pointer items-center  gap-3 mt-1 px-3 py-[3px] bg-[#2a2a2a] rounded-full text-sm font-semibold text-gray-400">
          <span>2.5 Flash</span>
          <FaCaretDown className="text-gray-500" size={16} />
        </div>
      </div>

      {/* Right Side: Upgrade Button + Profile */}
      <div className="flex items-center gap-10">
        <button className="flex items-center gap-2 px-8 py-3 cursor-pointer rounded-md bg-[#2a2a2a] hover:bg-[#333333] font-semibold text-sm text-white transition">
          <SiGooglegemini className="text-pink-400" />
          Upgrade
        </button>
        <div className=" cursor-pointer text-black font-semibold flex items-center justify-center uppercase">
          <img className="h-10 w-10 rounded-full" src={assets.user_icon} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

