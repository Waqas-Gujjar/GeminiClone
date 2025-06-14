import React from "react";
import { assets } from "../../assets/assets";
import { IoIosSearch } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { PiNotePencilBold } from "react-icons/pi";
import { MdMoreTime } from "react-icons/md";
import { MdSettings } from "react-icons/md";




import { FaChevronDown } from "react-icons/fa";

const SiderBar = () => {
  return (
    <div className="flex flex-col justify-between min-h-screen w-[270px] bg-[#282A2C] text-[#a9aaaa] font-sans">
      {/* Top Section */}
      <div>
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-4">
          <div className="p-2 rounded-full hover:bg-gray-700 cursor-pointer">
            <GiHamburgerMenu size={20} />
          </div>
          <div className="p-2 rounded-full hover:bg-gray-700 cursor-pointer">
            <IoIosSearch size={20} />
          </div>
        </div>

        {/* New Chat */}
        <div className="px-4">
          <div className="flex items-center gap-3 p-2 rounded-full hover:bg-gray-700 cursor-pointer transition">
            <PiNotePencilBold size={20} />
            <span className="text-sm font-semibold">New chat</span>
          </div>
        </div>

        {/* Gems Section */}
        <div className="px-4 mt-6">
          <h2 className="text-sm font-semibold text-gray-400 mb-2">Gems</h2>

          {/* Selected Gem */}
          <div className="flex items-center gap-3 bg-[#40495c] text-white p-2 rounded-full cursor-pointer">
            <div className="h-6 w-6 rounded-full bg-[#1c5c9e] flex items-center justify-center text-sm font-semibold">
              B
            </div>
            <span className="text-sm font-medium">Bug</span>
          </div>

          {/* Explore Gems */}
          <div className="flex items-center gap-3 mt-3 hover:bg-gray-700 p-2 rounded-full cursor-pointer transition">
            <MdMoreTime size={20} />
            <span className="text-sm font-medium">Explore Gems</span>
          </div>
        </div>

        {/* Recent Section */}
        <div className="px-4 mt-6">
          <h2 className="text-sm font-semibold text-gray-400 mb-2">Recent</h2>

          {[
            "Processing Message: Stand ...",
            "Smart Value, Explained Con...",
            "WhatsApp request, decline...",
            "Ready for LaTeX Assistance",
            "Build Real-time Chat App API",
          ].map((item, index) => (
            <div
              key={index}
              className="text-sm text-gray-300 truncate hover:bg-gray-700 p-2 rounded-full cursor-pointer transition"
              title={item}
            >
              {item}
            </div>
          ))}

          {/* Show more */}
          <div className="flex items-center gap-2 text-sm text-gray-400 mt-2 hover:bg-gray-700 p-2 rounded-full cursor-pointer w-fit">
            <span>Show more</span>
            <FaChevronDown size={14} />
          </div>
        </div>
      </div>

      {/* Bottom: Settings */}
      <div className="px-4 mb-6">
        <div className="flex items-center gap-3 hover:bg-gray-700 p-2 rounded-full cursor-pointer transition">
          <MdSettings size={20} />
          <span className="text-sm font-medium">Settings & help</span>
        </div>
      </div>
    </div>
  );
};

export default SiderBar;
