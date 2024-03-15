import React, { useState } from "react";
import "./chatinput.css";

function ChatInput({ onSendMessage }) {
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (message.trim()) {
      onSendMessage(message);
      setMessage('');
    }
  };

  return (
    <div className="chat-input-container">
      <form onSubmit={handleSubmit}>
        <input
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message..."
          className="chat-input-field"
        />
        <button type="submit" className="chat-input-button" disabled={!message.trim()}>
          Send
        </button>
      </form>
    </div>
  );
}

export default ChatInput;
