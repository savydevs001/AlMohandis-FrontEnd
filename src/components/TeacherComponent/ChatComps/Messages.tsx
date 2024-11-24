import React from "react";

type Message = {
  id: number;
  text: string;
  sender: "me" | "other";
};

type MessagesProps = {
  messages: Message[];
};

const Messages: React.FC<MessagesProps> = ({ messages }) => {
  return (
    <div className="flex-1 p-4 space-y-4 overflow-y-auto bg-gray-50">
      {messages.map((message) => (
        <div
          key={message.id}
          className={`flex ${
            message.sender === "me" ? "justify-end" : "justify-start"
          }`}
        >
          <div
            className={`max-w-sm p-2 rounded-lg ${
              message.sender === "me"
                ? "bg-teal-500 text-white"
                : "bg-gray-200 text-gray-900"
            }`}
          >
            {message.text}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Messages;
