import React from "react";
import "./chatheader.css";

const ChatHeader = ({ data }) => {
    return (
        <header className="chat-header">
            <h2>{data?.name}</h2>
            {/* Use optional chaining for safety */}
            <p>
                <div>
                    <b>From </b>
                    {data?.from}
                </div>
                <div>
                    <b>To </b>
                    {data?.to}
                </div>

                <div className="time_main">
                    {data?.chats.length > 0 && (
                        <div className="time">{data.chats[0].time}</div>
                    )}
                </div>
            </p>
        </header>
    );
};

export default ChatHeader;
