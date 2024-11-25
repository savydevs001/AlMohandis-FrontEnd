import React, { useState } from "react";
import MessageBubble from "./MessageBubble";
import img from '../../../assets/featuresImg.png'

interface Message {
  id: number;
  sender: "me" | "agent";
  text: string;
}

const LiveChat: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, sender: "agent", text: "Hey, I am your support agent by Almuhndes." },
    { id: 2, sender: "agent", text: "How can I help you today?" },
  ]);
  const [inputValue, setInputValue] = useState<string>("");

  const handleSendMessage = () => {
    if (inputValue.trim() === "") return;

    const newMessage: Message = {
      id: messages.length + 1,
      sender: "me",
      text: inputValue.trim(),
    };

    setMessages([...messages, newMessage]);
    setInputValue(""); // Clear input after sending
  };

  return (
    <div className="flex flex-col flex-1 space-y-10">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-gray-200 p-">
        <div className="flex items-center gap-4">
           <div className="w-10 h-10 ">
           <img  className="w-full h-full bg-gray-300 rounded-full" src={img} alt="" />
           </div>
         <div>
         <h1 className="text-lg font-bold">Almuhndes Support Agent</h1>
         <span className="text-sm text-green-500">Online</span>
         </div>
        </div>
        <button className="px-4 py-2 font-medium text-teal-500 bg-teal-100 rounded-lg">
          Call
        </button>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 p-4 space-y-4 overflow-y-auto">
        {messages.map((message) => (
          <MessageBubble
            key={message.id}
            sender={message.sender}
            text={message.text}
          />
        ))}
      </div>

      {/* Input Area */}
      <div className="flex items-center p-4 space-x-4 border-t border-gray-200">
        <input
          type="text"
          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
          placeholder="Type your message..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          onClick={handleSendMessage}
          className="px-4 py-2 font-medium text-white bg-teal-500 rounded-lg hover:bg-teal-600"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default LiveChat;



