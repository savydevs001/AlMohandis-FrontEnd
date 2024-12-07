import React, { useState } from "react";
import axios from "axios";
import FileUpload from "../../CreateCourseComp/FileUpload";
import AudioEditor from "../../../../AdminComponent/CourseManagementComp/CreateCourse/AdminCreateCourseSteps/RigthAudioModule/AudioEditor";

interface AudioLessonPopupProps {
  lessonId: string; // Add lessonId to match functionality
  onClose: () => void;
}

export const AudioLessonPopup: React.FC<AudioLessonPopupProps> = ({ lessonId, onClose }) => {
  const [audioTitle, setAudioTitle] = useState("");
  const [audioDescription, setAudioDescription] = useState("");
  const [audioFile, setAudioFile] = useState<File | null>(null);
  const [isSaving, setIsSaving] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const handleFileUpload = (file: File | null) => {
    setAudioFile(file);
  };

  const uploadAudioFile = async (file: File, title: string): Promise<string | null> => {
    const formData = new FormData();
    formData.append("audioFile", file);
    formData.append("title", title);

    try {
      const response = await axios.post(
        `http://localhost:5000/api/audioUpload?title=${encodeURIComponent(title)}`,
        formData
      );
      return response.data.audioUrl || null;
    } catch (error) {
      console.error("Error uploading audio:", error);
      return null;
    }
  };

  const handleSave = async () => {
    if (!audioTitle) {
      alert("Please provide a title for the audio.");
      return;
    }

    let audioLink: string | null = null;

    setIsSaving(true);
    if (audioFile) {
      audioLink = await uploadAudioFile(audioFile, audioTitle);
      if (!audioLink) {
        alert("Failed to upload audio.");
        setIsSaving(false);
        return;
      }
    } else {
      alert("Please upload an audio file.");
      setIsSaving(false);
      return;
    }

    const payload = {
      mediaSources: [
        {
          link: audioLink,
          title: audioTitle,
          description: audioDescription,
          channel: "AUDIO",
          isFree: false,
          isPromotional: true,
          clips: [
            {
              title: "Part 1",
              start: 0,
              end: 300,
            },
            {
              title: "Part 2",
              start: 301,
              end: 600,
            },
          ],
        },
      ],
    };

    try {
      await axios.patch(`http://localhost:5000/api/courses/lesson/${lessonId}`, payload);
      alert("Lesson updated successfully!");
      onClose();
    } catch (error) {
      console.error("Error saving lesson:", error);
      alert("Failed to save lesson. Please try again.");
    } finally {
      setIsSaving(false);
    }
  };

  const handleDelete = async () => {
    const confirmDelete = window.confirm("Are you sure you want to delete this lesson?");
    if (!confirmDelete) return;

    setIsDeleting(true);
    try {
      await axios.delete(`http://localhost:5000/api/courses/lessons/${lessonId}`);
      alert("Lesson deleted successfully!");
      onClose();
    } catch (error) {
      console.error("Error deleting lesson:", error);
      alert("Failed to delete lesson. Please try again.");
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg w-[90%] h-fit max-w-5xl p-6">
        <div>
          <h2 className="mb-4 text-xl font-bold">Add Audio to Lesson</h2>
          <div className="flex flex-col items-center gap-4 lg:flex-row">
            <div className="flex flex-col justify-between gap-4 lg:flex-col lg:w-[40%] w-full">
              <div className="space-y-4 w-[100%]">
                {/* Audio Title */}
                <div>
                  <label className="font-semibold">Title</label>
                  <input
                    type="text"
                    value={audioTitle}
                    onChange={(e) => setAudioTitle(e.target.value)}
                    className="w-full py-2 rounded-md"
                    placeholder="Lesson Title"
                  />
                </div>
                {/* Audio Description */}
                <div className="space-y-4">
                  <div className="flex flex-col gap-1">
                    <label>Description</label>
                    <textarea
                      value={audioDescription}
                      onChange={(e) => setAudioDescription(e.target.value)}
                      className="w-full border rounded-md"
                      placeholder="Enter audio description"
                    />
                  </div>
                </div>
              </div>
              {/* Audio File Upload */}
              <div className="space-y-4">
                <div className="w-[100%]">
                  <label className="font-semibold">Lesson File</label>
                  <div className="flex items-center justify-between p-2 space-y-4 text-center border border-dashed border-primary text-primary">
                    <p>{audioFile?.name || "No file uploaded"}</p>
                    <FileUpload partId={null} onFileSelect={handleFileUpload} />
                  </div>
                </div>
              </div>
            </div>
            {/* Audio Editor */}
            <div>
              <AudioEditor mediaFile={audioFile} />
            </div>
          </div>
          <div className="mt-4 space-x-4 flex justify-end">
            {/* Save, Delete, and Close Buttons */}
            <button
              onClick={onClose}
              className="px-4 py-2 text-white transition rounded bg-gray-500 hover:bg-gray-600"
              disabled={isSaving || isDeleting}
            >
              Close
            </button>
            <button
              onClick={handleSave}
              className="px-4 py-2 text-white transition rounded bg-blue-500 hover:bg-blue-600"
              disabled={isSaving || isDeleting}
            >
              {isSaving ? "Saving..." : "Save"}
            </button>
            <button
              onClick={handleDelete}
              className="px-4 py-2 text-white transition rounded bg-red-500 hover:bg-red-600"
              disabled={isDeleting}
            >
              {isDeleting ? "Deleting..." : "Delete"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
