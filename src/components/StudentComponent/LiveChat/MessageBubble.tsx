import React from "react";
import img from '../../../assets/featuresImg.png'
interface MessageBubbleProps {
  sender: "me" | "agent";
  text: string;
}

const MessageBubble: React.FC<MessageBubbleProps> = ({ sender, text }) => {
  const isMe = sender === "me";

  return (
    <div className={`flex ${isMe ? "justify-end" : "justify-start"}`}>
      <div
        className={`flex items-end space-x-2 ${
          isMe ? "flex-row-reverse" : ""
        }`}
      >
        {/* Avatar */}
        <div className="w-8 h-8 overflow-hidden rounded-full">
          {isMe ? (
            <img
              src={img}
              alt="Me"
              className="object-cover w-full h-full"
            />
          ) : (
            <img
            src={img}
              alt="Agent"
              className="object-cover w-full h-full"
            />
          )}
        </div>

        {/* Bubble */}
        <div
          className={`px-4 py-2 rounded-lg max-w-xs ${
            isMe
              ? "bg-teal-500 text-white"
              : "bg-gray-200 text-gray-800"
          }`}
        >
          {text}
        </div>
      </div>
    </div>
  );
};

export default MessageBubble;
