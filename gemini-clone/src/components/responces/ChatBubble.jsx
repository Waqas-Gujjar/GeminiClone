import React from "react";
import { SiGooglegemini } from "react-icons/si";

const ChatBubble = ({ text, sender }) => {
  const isUser = sender === "user";

  return (
    <div className={`flex  ${isUser ? "justify-end" : "justify-start"} mb-3 px-4`}>
      <div className="ml-30">
      {/* Gemini icon on bot message */}
      {!isUser && (
        <div className="  mt-4">
          <span className="  bg-clip-text ">
            <SiGooglegemini className="text-blue-700" size={30} />
          </span>
        </div>
      )}
   </div> 
      {/* Message Bubble */}
      <div
        className={` px-10 mr-30   py-5 text-sm leading-relaxed rounded-full ${
          isUser
            ? "bg-[#2d2f31] text-white rounded-br-none"
            : " text-gray-200 rounded-bl-none"
        }`}
      >
        <p>{text}</p>
      </div>
    </div>
  );
};

export default ChatBubble;
