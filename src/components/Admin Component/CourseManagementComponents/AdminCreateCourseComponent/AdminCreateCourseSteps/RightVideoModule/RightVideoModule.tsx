import React, { useState } from "react";
import FileUpload from "../../../../../Teacher Component/Courses Component/Create Course Component/FileUpload";
import { RxPinRight } from "react-icons/rx";

interface RightVideoModuleProps {
  title: string;
  handleNext: () => void;
}

const RightVideoModule: React.FC<RightVideoModuleProps> = ({ title, handleNext }) => {
  const [mediaFile, setMediaFile] = useState<File | null>(null);

  const handleFileUpload = (file: File | null) => {
    setMediaFile(file);
  };

  return (
    <div className="p-4">
      <div className="flex flex-col justify-between w-full gap-4 lg:flex-row">
        <div className="space-y-4 w-[90%]">
          <div>
            <label className="font-semibold">Title</label>
            <input className="w-full py-2 rounded-md" type="text" placeholder="Lesson 1 Title" />
          </div>
          <div className="space-y-4">
            <div className="mt-3 space-y-2">
              <div className="flex items-center gap-3">
                <input className="w-3 h-3 rounded-sm text-primary" type="checkbox" />
                <p className="text-sm text-[#7C7C7C]">Promoted Content</p>
              </div>
              <div className="flex items-center gap-3">
                <input className="w-3 h-3 rounded-sm text-primary" type="checkbox" />
                <p className="text-sm text-[#7C7C7C]">Available for Free</p>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <label>{title}</label>
              <textarea className="w-full border rounded-md"></textarea>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="w-[100%]">
            <label className="font-semibold">Lesson File</label>
            <div className="w-[100%] border border-dashed border-primary p-2 text-center text-primary space-y-4">
              <p>Browse and choose the files you want to upload from your computer</p>
              <FileUpload partId={null} onFileSelect={handleFileUpload} />
            </div>
          </div>
          {mediaFile && (
            <div className="mt-2">
              <p>File Name: {mediaFile.name}</p>
              <p>File Type: {mediaFile.type}</p>
            </div>
          )}
        </div>
      </div>

      <div className="w-[100%] h-[100%] mt-4">
        <iframe
          className="mx-auto w-[90%] h-[30vh] rounded-xl"
          src="https://www.youtube.com/embed/55RieJwCRps?si=n5eqhAIgSPfoFT5o"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
        ></iframe>
      </div>

      <div className="flex items-center gap-2 px-4 py-2">
        <button
          className="flex items-center gap-2 px-6 py-2 font-semibold text-white border-2 rounded-lg bg-primary"
          onClick={handleNext}
        >
          Next <RxPinRight />
        </button>
      </div>
    </div>
  );
};

export default RightVideoModule;
