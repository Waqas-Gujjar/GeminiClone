import React, { useState, useEffect } from 'react'
import SiderBar from './components/sidebar/SiderBar'
import Main from './components/main/Main'

const App = () => {
  const [chatHistory, setChatHistory] = useState([]);
  const [currentChat, setCurrentChat] = useState([]);

  // Clear history on page load
  useEffect(() => {
    localStorage.removeItem('chatHistory');
    setChatHistory([]);
  }, []);

  // Save chat to history when a conversation ends
  useEffect(() => {
    if (currentChat.length > 0) {
      // Only save to history if it's a complete conversation (has both user and bot messages)
      const hasUserMessage = currentChat.some(msg => msg.sender === 'user');
      const hasBotMessage = currentChat.some(msg => msg.sender === 'bot');
      
      if (hasUserMessage && hasBotMessage) {
        // Check if this conversation already exists in history
        const isDuplicate = chatHistory.some(chat => 
          chat.messages.length === currentChat.length && 
          chat.messages.every((msg, i) => 
            msg.text === currentChat[i].text && 
            msg.sender === currentChat[i].sender
          )
        );

        if (!isDuplicate) {
          const newHistory = [{
            id: Date.now(),
            messages: [...currentChat],
            timestamp: new Date().toISOString()
          }, ...chatHistory];

          setChatHistory(newHistory);
          localStorage.setItem('chatHistory', JSON.stringify(newHistory));
        }
      }
    }
  }, [currentChat]);

  const handleNewChat = () => {
    setCurrentChat([]); // Clear current chat
  };

  const handleChatSelect = (historyItem) => {
    setCurrentChat(historyItem.messages);
  };

  return (
    <div className="flex">
      <SiderBar 
        onChatSelect={handleChatSelect}
        onNewChat={handleNewChat}
        chatHistory={chatHistory}
      />
      <Main 
        chat={currentChat}
        setChat={setCurrentChat}
      />
    </div>
  )
}

export default App