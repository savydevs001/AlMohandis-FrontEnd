import axios from "axios";
import React, { useState } from "react";

interface Attachment {
  id: string;
  fileType: string; // File type, e.g., PDF, Image, etc.
  fileUrl: string; // URL or file path
  description: string; // Optional description
  moduleId: string; // Associated module ID
}

interface Module {
  id: string;
  attachments?: Attachment[]; // List of attachments
}

interface AttachmentModuleProps {
  module: Module;
  partId:string;

}

const AttachmentModule: React.FC<AttachmentModuleProps> = ({partId,
  module,
  
}) => {
  const [attachments, setAttachments] = useState<Attachment[]>(
    module.attachments || [] // Default to empty array if undefined
  );
  const [file, setFile] = useState<File | null>(null);
  const [fileType, setFileType] = useState<string>("PDF");
  const [fileDescription, setFileDescription] = useState<string>("");
  const [fullScreenPreview, setFullScreenPreview] = useState<string | null>(null);

  const handleAddAttachment = async () => {
    if (!file) {
      alert("Please select a file to upload.");
      return;
    }


    const fileUrl = URL.createObjectURL(file);

    const newAttachment: Attachment = {
      id: `${Date.now()}`,
      fileType,
      fileUrl,
      description: fileDescription,
      moduleId: module.id,
    };

    setAttachments([...attachments, newAttachment]);
    try {
      const courseId = localStorage.getItem('courseId');
      if (!courseId) {
        throw new Error('Course ID is not found in localStorage');
      }
    
      const response = await axios.patch(
        `http://localhost:5000/api/courses/${courseId}/parts/${partId}/modules/${module.id}/attachment`,
        {
          fileType: newAttachment.fileType,
          fileUrl: newAttachment.fileUrl,
          description: newAttachment.description,
        }
      );
    
      console.log('Attachment Updated:', response.data); // Log the response data for debugging
    
    } catch (error:any) {
      console.error('Error updating attachment:', error.response ? error.response.data : error.message);
    }

    
    // Reset fields
    setFile(null);
    setFileDescription("");
  };

  

  const handleAttachmentChange = (
    id: string,
    key: keyof Attachment,
    value: string
  ) => {
    setAttachments(
      attachments.map((att) =>
        att.id === id ? { ...att, [key]: value } : att
      )
    );
  };

  const handleFullScreenPreview = (fileUrl: string) => {
    setFullScreenPreview(fileUrl);
  };

  return (
    <div className="p-4">
      <h2 className="text-lg font-bold">Attachment Module</h2>

      {attachments.map((attachment) => (
        <div key={attachment.id} className="pb-4 mb-4 border-b">
          {attachment.fileType === "Image" && (
            <div
              className="relative w-20 h-20 overflow-hidden border rounded cursor-pointer"
              onClick={() => handleFullScreenPreview(attachment.fileUrl)}
            >
              <img
                src={attachment.fileUrl}
                alt="Attachment"
                className="object-cover w-full h-full"
              />
            </div>
          )}

          <input
            type="text"
            value={attachment.description}
            onChange={(e) =>
              handleAttachmentChange(attachment.id, "description", e.target.value)
            }
            placeholder="Enter description"
            className="w-full p-2 mb-2 border rounded"
          />
          <input
            type="text"
            value={attachment.fileUrl}
            onChange={(e) =>
              handleAttachmentChange(attachment.id, "fileUrl", e.target.value)
            }
            placeholder="Enter file URL"
            className="w-full p-2 mb-2 border rounded"
          />
          <p className="text-sm">
            File Type: <b>{attachment.fileType}</b>
          </p>
          
        </div>
      ))}

      <div className="pb-4">
        <label className="block mb-2 font-semibold">Select File Type</label>
        <select
          value={fileType}
          onChange={(e) => setFileType(e.target.value)}
          className="w-full p-2 mb-4 border rounded"
        >
          <option value="PDF">PDF</option>
          <option value="Image">Image</option>
          <option value="Video">Video</option>
          <option value="Document">Document</option>
        </select>

        <label className="block mb-2 font-semibold">File Description</label>
        <input
          type="text"
          value={fileDescription}
          onChange={(e) => setFileDescription(e.target.value)}
          placeholder="Enter file description"
          className="w-full p-2 mb-4 border rounded"
        />

        <label className="block mb-2 font-semibold">Upload File</label>
        <input
          type="file"
          onChange={(e) => setFile(e.target.files?.[0] || null)}
          className="w-full p-2 mb-4 border rounded"
        />

        <button
          onClick={handleAddAttachment}
          className="p-2 text-white bg-green-500 rounded"
        >
          Add Attachment
        </button>
      </div>

      {/* Full-Screen Preview */}
      {fullScreenPreview && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
          <div className="relative">
            <button
              onClick={() => setFullScreenPreview(null)}
              className="absolute top-2 right-2 p-2 text-white bg-red-500 rounded"
            >
              Close
            </button>
            <img
              src={fullScreenPreview}
              alt="Full Preview"
              className="max-w-full max-h-screen"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default AttachmentModule;
