import React, { useState } from "react";

const GradeNowShowPdf: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const imageUrl = "https://plus.unsplash.com/premium_photo-1709311452215-496c6740ca59?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"; // Replace with the assignment image URL

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="p-4">
      <h1 className="text-lg font-semibold mb-4">Assignment Preview</h1>

      {/* Thumbnail View */}
      <div
        className="cursor-pointer border border-gray-300 rounded-md overflow-hidden w-32 h-32"
        onClick={openModal}
      >
        <img
          src={imageUrl}
          alt="Assignment Preview"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Modal View */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
          <div className="relative bg-white rounded-md shadow-lg">
            {/* Close Button */}
            <button
              className="absolute top-2 right-2 text-white bg-red-500 hover:bg-red-600 rounded-full p-2"
              onClick={closeModal}
            >
              X
            </button>

            {/* Large Image */}
            <img
              src={imageUrl}
              alt="Assignment Full Preview"
              className="max-w-screen-lg max-h-screen object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default GradeNowShowPdf;
