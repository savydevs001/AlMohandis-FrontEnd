import React, { useState } from 'react';
import axios from 'axios';

interface AttachmentPopupProps {
  onClose: () => void;
  moduleId: string;
  courseId:string;
  partId:string
}
interface Attachment {
  id: string;
  fileType: string; // File type, e.g., PDF, Image, etc.
  fileUrl: string; // URL or file path
  description: string; // Optional description
  moduleId: string; // Associated module ID
}





export const AttachmentPopup: React.FC<AttachmentPopupProps> = ({
  courseId,
  onClose,
  moduleId,
  partId
}) => {
  const [fileType, setFileType] = useState<string>('');
  const [fileUrl, setFileUrl] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleSave = async () => {
    const newAttachment: Attachment = {
      id: `${Date.now()}`,
      fileType,
      fileUrl,
      description: description,
      moduleId: moduleId,
    };

    setIsSubmitting(true);
    try {
     console.log(courseId,"sad")
      if (!courseId) {
        throw new Error('Course ID not found');
      }
      const response = await axios.patch(
        `http://localhost:5000/api/courses/${courseId}/parts/${partId}/modules/${moduleId}/attachment`,
        {
          fileType: newAttachment.fileType,
          fileUrl: newAttachment.fileUrl,
          description: newAttachment.description,
        }
      );

      alert('Attachment updated successfully!');
      onClose();
    } catch (error) {
      console.error('Error updating attachment:', error);
      alert('Failed to update attachment.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
        <h2 className="mb-4 text-xl font-bold">Edit Attachment</h2>

        {/* File Type */}
        <label className="block mb-2 font-semibold">File Type</label>
        <input
          type="text"
          value={fileType}
          onChange={(e) => setFileType(e.target.value)}
          className="w-full px-3 py-2 mb-4 border rounded-md"
          placeholder="Enter file type (e.g., PDF, Image)"
        />

        {/* File URL */}
        <label className="block mb-2 font-semibold">File URL</label>
        <input
          type="text"
          value={fileUrl}
          onChange={(e) => setFileUrl(e.target.value)}
          className="w-full px-3 py-2 mb-4 border rounded-md"
          placeholder="Enter file URL"
        />

        {/* Description */}
        <label className="block mb-2 font-semibold">Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full px-3 py-2 mb-4 border rounded-md"
          placeholder="Enter a brief description"
        />

        {/* Buttons */}
        <div className="flex justify-end gap-4">
          <button
            className="px-4 py-2 text-white bg-red-500 rounded-md"
            onClick={onClose}
            disabled={isSubmitting}
          >
            Cancel
          </button>
          <button
            className={`px-4 py-2 text-white rounded-md ${
              isSubmitting ? 'bg-gray-400' : 'bg-blue-500'
            }`}
            onClick={handleSave}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Saving...' : 'Save'}
          </button>
        </div>
      </div>
    </div>
  );
};
