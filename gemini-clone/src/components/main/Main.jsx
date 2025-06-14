import React, { useState, useEffect, useRef } from "react";
import Navbar from "../navbar/Navbar";
import ChatBubble from "../responces/ChatBubble.jsx";
import { FaPlus } from "react-icons/fa6";
import { TbWorldSearch } from "react-icons/tb";
import { BiAddToQueue } from "react-icons/bi";
import { IoMdMic } from "react-icons/io";
import { GEMINI_API_KEY, GEMINI_API_URL } from "../../../context";

const Main = () => {
  const [askQuestion, setAskQuestion] = useState("");
  const [chat, setChat] = useState([]);
  const [loading, setLoading] = useState(false);
  const chatEndRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!askQuestion.trim()) return;

    setChat((prev) => [...prev, { text: askQuestion, sender: "user" }]);
    setAskQuestion("");
    setLoading(true);

    const payload = {
      contents: [
        {
          parts: [
            {
              text: askQuestion,
            },
          ],
        },
      ],
    };

    try {
      const askResponse = await fetch(
        `${GEMINI_API_URL}?key=${GEMINI_API_KEY}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      const response = await askResponse.json();
      const reply = response?.candidates?.[0]?.content?.parts?.[0]?.text;

      if (reply) {
        setChat((prev) => [...prev, { text: reply, sender: "bot" }]);
      }
    } catch (error) {
      console.error("API Error:", error);
      setChat((prev) => [
        ...prev,
        { text: "Something went wrong!", sender: "bot" },
      ]);
    }

    setLoading(false);
  };

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chat, loading]);

  return (
    <div className="w-full h-screen bg-[#1a1b1c] text-white flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Chat Section */}
      <div className="flex-1 overflow-y-auto px-4 py-6 space-y-3 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-500">
        {chat.length === 0 ? (
          <div className="flex justify-center items-center h-full">
            <h1 className="text-4xl font-semibold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
              Hello, Gemini
            </h1>
          </div>
        ) : (
          <>
            {chat.map((msg, i) => (
              <ChatBubble key={i} text={msg.text} sender={msg.sender} />
            ))}
            {loading && <ChatBubble text="Typing..." sender="bot" />}
            <div ref={chatEndRef} />
          </>
        )}
      </div>

      {/* Input Section */}
      <div className="px-6 py-4  bg-[#1a1b1c]">
        <div className="max-w-4xl mx-auto w-full">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-3 border-2 border-[#4a4f4f] rounded-3xl px-6 py-4"
          >
            <input
              value={askQuestion}
              onChange={(e) => setAskQuestion(e.target.value)}
              type="text"
              placeholder="Ask Gemini"
              className="w-full bg-transparent text-gray-200 text-base outline-none placeholder:text-gray-500"
            />

            {/* Icons */}
            <div className="flex items-center justify-between text-gray-400">
              <div className="flex items-center gap-5">
                <FaPlus
                  size={20}
                  className="hover:bg-gray-700 p-1 rounded-full cursor-pointer"
                />
                <div className="flex items-center gap-1 cursor-pointer hover:text-white">
                  <TbWorldSearch size={20} />
                  <p className="text-sm">Deep Research</p>
                </div>
                <BiAddToQueue
                  size={20}
                  className="cursor-pointer hover:text-white"
                />
              </div>
              <IoMdMic size={20} className="cursor-pointer hover:text-white" />
            </div>
          </form>

          {/* Info Text */}
          <div className="text-gray-500 text-sm text-center mt-2">
            <p>Gemini can make mistakes, so double-check its responses.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
