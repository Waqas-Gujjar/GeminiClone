import React, { useState, useEffect } from "react";
import { assets } from "../../assets/assets";
import { IoIosSearch } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { PiNotePencilBold } from "react-icons/pi";
import { MdMoreTime } from "react-icons/md";
import { MdSettings } from "react-icons/md";
import { FaChevronDown } from "react-icons/fa";

const SiderBar = ({ onChatSelect, onNewChat, chatHistory }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [showAllChats, setShowAllChats] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleShowMore = () => {
    setShowAllChats(!showAllChats);
  };

  const displayedChats = showAllChats ? chatHistory : chatHistory.slice(0, 2);

  return (
    <div className={`flex flex-col justify-between min-h-screen bg-[#282A2C] text-[#a9aaaa] font-sans transition-all duration-300 ${isOpen ? 'w-[270px]' : 'w-[70px]'}`}>
      {/* Top Section */}
      <div>
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-4">
          <div 
            className="p-2 rounded-full hover:bg-gray-700 cursor-pointer transition-transform duration-300"
            onClick={toggleSidebar}
          >
            <GiHamburgerMenu size={20} className={`transform ${isOpen ? 'rotate-0' : 'rotate-180'}`} />
          </div>
          {isOpen && (
            <div className="p-2 rounded-full hover:bg-gray-700 cursor-pointer">
              <IoIosSearch size={20} />
            </div>
          )}
        </div>

        {/* New Chat */}
        <div className="px-4">
          <div 
            onClick={onNewChat}
            className="flex items-center gap-3 p-2 rounded-full hover:bg-gray-700 cursor-pointer transition"
          >
            <PiNotePencilBold size={20} />
            {isOpen && <span className="text-sm font-semibold">New chat</span>}
          </div>
        </div>

        {/* Gems Section */}
        <div className="px-4 mt-6">
          {isOpen && <h2 className="text-sm font-semibold text-gray-400 mb-2">Gems</h2>}

          {/* Selected Gem */}
          <div className="flex items-center gap-3 bg-[#40495c] text-white p-2 rounded-full cursor-pointer">
            <div className="h-6 w-6 rounded-full bg-[#1c5c9e] flex items-center justify-center text-sm font-semibold">
              B
            </div>
            {isOpen && <span className="text-sm font-medium">Bug</span>}
          </div>

          {/* Explore Gems */}
          <div className="flex items-center gap-3 mt-3 hover:bg-gray-700 p-2 rounded-full cursor-pointer transition">
            <MdMoreTime size={20} />
            {isOpen && <span className="text-sm font-medium">Explore Gems</span>}
          </div>
        </div>

        {/* Recent Section */}
        <div className="px-4 mt-6">
          {isOpen && <h2 className="text-sm font-semibold text-gray-400 mb-2">Recent</h2>}

          <div className={`max-h-[calc(100vh-400px)] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-500 pr-2 ${!isOpen && 'hidden'}`}>
            {chatHistory.length === 0 ? (
              <p className="text-sm text-gray-400">No recent chats</p>
            ) : (
              <>
                {displayedChats.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => onChatSelect(item)}
                    className="text-sm text-gray-300 truncate hover:bg-gray-700 p-2 rounded-full cursor-pointer transition mb-1"
                    title={item.messages[0]?.text || "Empty conversation"}
                  >
                    {item.messages[0]?.text || "Empty conversation"}
                  </div>
                ))}
              </>
            )}
          </div>

          {/* Show more/less button */}
          {isOpen && chatHistory.length > 2 && (
            <div 
              className="flex items-center gap-2 text-sm text-gray-400 mt-2 hover:bg-gray-700 p-2 rounded-full cursor-pointer w-fit"
              onClick={handleShowMore}
            >
              <span>{showAllChats ? "Show less" : "Show more"}</span>
              <FaChevronDown size={14} className={`transform transition-transform ${showAllChats ? 'rotate-180' : ''}`} />
            </div>
          )}
        </div>
      </div>

      {/* Bottom: Settings */}
      <div className="px-4 mb-6">
        <div className="flex items-center gap-3 hover:bg-gray-700 p-2 rounded-full cursor-pointer transition">
          <MdSettings size={20} />
          {isOpen && <span className="text-sm font-medium">Settings & help</span>}
        </div>
      </div>
    </div>
  );
};

export default SiderBar;
