import React, { useState, useEffect } from "react";
import Messages from "./Messages";

type Message = {
  id: number;
  text: string;
  sender: "me" | "other";
};

const SeeChats: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: "Lorem ipsum", sender: "other" },
    { id: 2, text: "Lorem ipsum!", sender: "other" },
    { id: 3, text: "Lorem ipsum Lorem ipsum", sender: "me" },
  ]);
  const [newMessage, setNewMessage] = useState("");
  const [selectedChat, setSelectedChat] = useState<string | null>(null);
  const [isMobileView, setIsMobileView] = useState(false);

  // Detect screen size to handle responsiveness
  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 768); // Mobile view for screen width < 768px
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleSendMessage = () => {
    if (newMessage.trim() !== "") {
      setMessages((prev) => [
        ...prev,
        { id: prev.length + 1, text: newMessage, sender: "me" },
      ]);
      setNewMessage("");
    }
  };

  return (
    <div className="flex flex-1 h-screen bg-gray-100">
      {/* Sidebar */}
      {(!isMobileView || !selectedChat) && (
        <div className="w-full sm:w-[40%] bg-white border-r">
          <div className="flex items-center justify-between p-2 border-b">
            <h2 className="text-lg font-semibold">Messages</h2>
            <button className="flex items-center justify-center text-2xl text-white rounded-full h-7 w-7 bg-primary">
              +
            </button>
          </div>
          <hr />
          <div className="p-4">
            <input
              type="text"
              placeholder="Search Messages"
              className="w-full py-3 bg-gray-200 border-none rounded-md"
            />
          </div>
          <div className="flex flex-wrap items-center gap-2 px-4">
            <p className="px-2 py-1 text-sm text-white rounded-lg bg-primary">
              All
            </p>
            <p className="px-3 py-1 text-sm text-black bg-gray-200 rounded-lg">
              Groups
            </p>
            <p className="px-3 py-1 text-sm text-black bg-gray-200 rounded-lg">
              Teachers
            </p>
            <p className="px-3 py-1 text-sm text-black bg-gray-200 rounded-lg">
              Assistants
            </p>
            <p className="px-3 py-1 text-sm text-black bg-gray-200 rounded-lg">
              Student
            </p>
          </div>
          <div className="p-4 space-y-4">
            {/* Contact List */}
            <div
              className="flex items-center justify-between p-2 bg-gray-200 rounded-md cursor-pointer"
              onClick={() => setSelectedChat("Florencio Dorrance")} // Open Chat
            >
              <div>
                <h3 className="font-semibold">Florencio Dorrance</h3>
                <p className="text-sm text-gray-600">Message</p>
              </div>
              <span className="text-xs text-gray-400">24m</span>
            </div>
          </div>
        </div>
      )}

      {/* Chat Area */}
      {selectedChat && (
        <div
          className={`flex flex-col ${
            isMobileView ? "w-full" : "w-2/3"
          } bg-gray-50`}
        >
          {/* Chat Header */}
          <div className="flex items-center justify-between px-2 border-b">
            <div className="flex items-center space-x-4">
              <img
                src="https://via.placeholder.com/40"
                alt="Profile"
                className="w-10 h-10 rounded-full"
              />
              <div>
                <h3 className="font-semibold">{selectedChat}</h3>
                <p className="text-sm text-green-500">Online</p>
              </div>
            </div>
            <button
              className="p-2 text-teal-500 bg-gray-100 rounded-lg"
              onClick={() => setSelectedChat(null)} // Go back to sidebar
            >
              {isMobileView ? "Back" : "Close"}
            </button>
          </div>

          {/* Messages Component */}
          <Messages messages={messages} />

          {/* Chat Input */}
          <div className="flex items-center p-4 space-x-4 border-t">
            <input
              type="text"
              className="flex-1 px-4 py-2 border rounded-lg focus:outline-none"
              placeholder="Type a message..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
            />
            <button
              onClick={handleSendMessage}
              className="px-4 py-2 text-white bg-teal-500 rounded-lg"
            >
              Send
            </button>
          </div>
        </div>
      )}

      {/* Placeholder for no chat selected */}
      {!selectedChat && !isMobileView && (
        <div className="flex items-center justify-center flex-1">
          <p className="text-gray-500">Select a chat to start messaging</p>
        </div>
      )}
    </div>
  );
};

export default SeeChats;
