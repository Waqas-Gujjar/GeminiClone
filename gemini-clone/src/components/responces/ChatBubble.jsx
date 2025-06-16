import React from "react";
import ReactMarkdown from "react-markdown";
import { SiGooglegemini } from "react-icons/si";

const ChatBubble = ({ text, sender }) => {
  return (
    <div
      className={`flex ${
        sender === "user" ? "justify-end" : "justify-start"
      } mb-4 ml-30`}
    >
      {/* Show Gemini icon for bot messages */}
      {sender === "bot" && (
        <span className="mt-1 text-blue-500">
          <SiGooglegemini size={28} />
        </span>
      )}
      <div
        className={`px-6 rounded-2xl mr-30 py-2 shadow-sm ${
          sender === "user"
            ? "bg-[#30363c] text-white rounded-br-md"
            : "text-white ml-1"
        }`}
      >
        <div className="prose prose-invert max-w-none [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-gray-600/50 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb:hover]:bg-gray-500/50">
          {sender === "bot" ? (
            <ReactMarkdown
              components={{
                h1: ({ node, ...props }) => (
                  <h1 className="text-2xl font-bold mb-3 mt-2" {...props} />
                ),
                h2: ({ node, ...props }) => (
                  <h2 className="text-xl font-semibold mb-2 mt-2" {...props} />
                ),
                h3: ({ node, ...props }) => (
                  <h3 className="text-lg font-semibold mb-2 mt-2" {...props} />
                ),
                p: ({ node, ...props }) => (
                  <p className="mb-2 leading-relaxed text-[16px]" {...props} />
                ),
                a: ({ node, ...props }) => (
                  <a
                    className="text-blue-400 hover:underline break-all"
                    target="_blank"
                    rel="noopener noreferrer"
                    {...props}
                  />
                ),
                ul: ({ node, ...props }) => (
                  <ul className="list-disc pl-6 mb-3" {...props} />
                ),
                ol: ({ node, ...props }) => (
                  <ol className="list-decimal pl-6 mb-3" {...props} />
                ),
                li: ({ node, ...props }) => (
                  <li className="mb-1" {...props} />
                ),
                code: ({ node, ...props }) => (
                  <code className="bg-gray-800 rounded px-1 py-0.5 text-[15px]" {...props} />
                ),
                pre: ({ node, ...props }) => (
                  <pre className="bg-gray-900 rounded p-4 mb-4 overflow-x-auto text-[15px] [&::-webkit-scrollbar]:h-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-gray-600/50 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb:hover]:bg-gray-500/50" {...props} />
                ),
                strong: ({ node, ...props }) => (
                  <strong className="font-bold text-white" {...props} />
                ),
                blockquote: ({ node, ...props }) => (
                  <blockquote className="border-l-4 border-blue-400 pl-4 italic text-gray-300 my-2" {...props} />
                ),
              }}
            >
              {text}
            </ReactMarkdown>
          ) : (
            <p className="text-white text-[16px]">{text}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatBubble;
