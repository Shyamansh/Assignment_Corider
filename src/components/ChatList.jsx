import React, { useState, useEffect } from 'react';
import  ChatMessage  from './ChatMessage';

const ChatList = ({ messages, onLoadMore }) => {
  const [reachedEnd, setReachedEnd] = useState(false);

  // Handle infinite scrolling (implementation example)
  const handleScroll = (event) => {
    const { scrollTop, scrollHeight, clientHeight } = event.target;
    if (scrollTop + clientHeight >= scrollHeight - 50 && !reachedEnd) {
      onLoadMore();
      setReachedEnd(messages.length === 0); // Check no more messages after next page
    }
  };

  return (
    <div className="chat-list" onScroll={handleScroll}>
      {messages.map((message) => (
        <ChatMessage key={message.id} message={message} />
      ))}
      {reachedEnd && <p>No more messages to load.</p>}
    </div>
  );
};

export default ChatList;
