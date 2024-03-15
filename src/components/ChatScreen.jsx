import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ChatInput from './ChatInput';
import ChatList from './ChatList';
import ChatHeader from './ChatHeader';

const ChatScreen = () => {
  const [chatData, setChatData] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`https://qa.corider.in/assignment/chat?page=${currentPage}`);
      setChatData(response.data);
    };
    fetchData();
  }, [currentPage]);

  const handleSendMessage = (message) => {
    // Implement message sending logic (e.g., API call, update state)
    console.log('Message sent:', message); // Example logging

    // **Optional:** Update chat data locally for a more dynamic experience
    setChatData((prevData) => ({
      ...prevData,
      chats: [...prevData.chats, { sender: { self: true }, message, time: new Date().toLocaleString() }],
    }));
  };

  const handleLoadMore = () => {
    setCurrentPage(currentPage + 1);
  };

  return (
    <div className="chat-screen">
      {/* Pass chatData to ChatHeader for rendering trip details */}
      <ChatHeader data={chatData} />
      <ChatList messages={chatData?.chats || []} onLoadMore={handleLoadMore} />
      <ChatInput onSendMessage={handleSendMessage} />
    </div>
  );
};

export default ChatScreen;
