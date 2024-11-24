import React, { useState } from 'react';
import { Attachment } from '../../../../../types/course';

interface AttachmentModuleProps {
  module: Attachment;
}

const AttachmentModule: React.FC<AttachmentModuleProps> = ({ module }) => {
  const [attachments, setAttachments] = useState<Attachment[]>(module.attachments);

  const handleAddAttachment = () => {
    setAttachments([
      ...attachments,
      {
        id: `${Date.now()}`,
        fileType: 'PDF',
        fileUrl: '',
        description: '',
        moduleId: module.id,
      },
    ]);
  };

  const handleRemoveAttachment = (id: string) => {
    setAttachments(attachments.filter(att => att.id !== id));
  };

  const handleAttachmentChange = (id: string, key: string, value: any) => {
    setAttachments(
      attachments.map(att => (att.id === id ? { ...att, [key]: value } : att))
    );
  };

  return (
    <div className="p-4">
      <h2 className="text-lg font-bold">Attachment Module</h2>
      {attachments.map((attachment) => (
        <div key={attachment.id} className="border-b pb-4 mb-4">
          <input
            type="text"
            value={attachment.description}
            onChange={(e) => handleAttachmentChange(attachment.id, 'description', e.target.value)}
            placeholder="Enter description"
            className="border rounded p-2 w-full mb-2"
          />
          <input
            type="text"
            value={attachment.fileUrl}
            onChange={(e) => handleAttachmentChange(attachment.id, 'fileUrl', e.target.value)}
            placeholder="Enter file URL"
            className="border rounded p-2 w-full mb-2"
          />
          <button
            onClick={() => handleRemoveAttachment(attachment.id)}
            className="bg-red-500 text-white p-2 rounded"
          >
            Remove Attachment
          </button>
        </div>
      ))}
      <button onClick={handleAddAttachment} className="bg-green-500 text-white p-2 rounded">
        Add Attachment
      </button>
    </div>
  );
};

export default AttachmentModule;
