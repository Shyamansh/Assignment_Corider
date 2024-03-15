import React from "react";

const ChatMessage = ({ message }) => {
    const { sender, message: content, time } = message;

    return (
        <div className={`chat-message ${sender.self ? "self" : ""}`}>
            <img
                src={sender.image}
                alt={sender.user_id}
                style={{
                    marginLeft: ".6rem",
                    marginRight: ".7rem", // Adjust margin for spacing
                    width: "80px",
                    height: "80px",
                    borderRadius: "50%",
                    float: "left", // Position image outside box
                }}
            />
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start", // Align content left
                    marginBottom: "2rem",
                    marginRight: "2rem",
                    padding: "1rem 1.5rem", // Adjust padding for spacing
                    borderRadius: "0.5rem",
                    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
                    backgroundColor: sender.self ? "#1C63D5" : "white", // Blue for self
                    marginLeft: "80px", // Adjust margin for image width and spacing
                }}
            >
                <p
                    style={{
                        fontWeight: "bold",
                        whiteSpace: "normal",
                        wordWrap: "break-word",
                        fontSize: "0.8rem",
                    }}
                >
                    {sender.user_id}
                </p>
                <p>{content}</p>
                <p style={{ fontSize: "0.8rem", color: "#999" }}>{time}</p>
            </div>
        </div>
    );
};

export default ChatMessage;
