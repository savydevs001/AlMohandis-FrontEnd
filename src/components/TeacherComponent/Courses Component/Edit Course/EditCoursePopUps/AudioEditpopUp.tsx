import { useState } from "react";
import FileUpload from "../../CreateCourseComp/FileUpload";
import AudioEditor from "../../../../AdminComponent/CourseManagementComp/CreateCourse/AdminCreateCourseSteps/RigthAudioModule/AudioEditor";


interface AudioLessonPopupProps {
  // title: string;
  handleFileUpload?: (file: File | null) => void;
  onClose: () => void;
}

export const AudioLessonPopup: React.FC<AudioLessonPopupProps> = ({ onClose }) => {
  const [mediaFile, setMediaFile] = useState<File | null>(null); // Move useState here



  const handleFileUpload = (file: File | null) => {
    setMediaFile(file);
  };
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg w-[90%] h-fit max-w-5xl p-6">
        <div>
          <div className="flex flex-col items-center gap-4 lg:flex-row">
            <div className="flex flex-col justify-between gap-4 lg:flex-col lg:w-[40%] w-full">
              <div className="space-y-4 w-[100%]">
                <div>
                  <label className="font-semibold">Title</label>
                  <input className="w-full py-2 rounded-md" type="text" placeholder="Lesson 1 Title" />
                </div>
                <div className="space-y-4">
                  <div className="space-y-1">
                    <h5>Content type</h5>
                    <select className="w-full border-none rounded-md outline-none">
                      <option value="">Audio Lesson</option>
                      <option value="">Video Lesson</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-1">
                    <label>Description</label>
                    <textarea className="w-full border rounded-md"></textarea>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="w-[100%]">
                  <label className="font-semibold">Lesson File</label>
                  <div className="flex items-center justify-between p-2 space-y-4 text-center border border-dashed border-primary text-primary">
                    <p>File Name</p>
                    <FileUpload partId={null} onFileSelect={handleFileUpload} />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <AudioEditor mediaFile={mediaFile} />
            </div>
          </div>
          <div className="mt-4 space-x-4">
            <button className="px-4 py-2 text-white transition rounded bg-primary hover:bg-primary-dark">Save Change</button>
            <button
              className="px-4 py-2 text-white transition rounded bg-primary hover:bg-primary-dark"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
