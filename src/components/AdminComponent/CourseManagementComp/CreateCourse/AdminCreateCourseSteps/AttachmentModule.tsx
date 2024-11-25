import React, { useState } from "react";

interface Attachment {
  id: string;
  fileType: string;
  fileUrl: string;
  description: string;
  moduleId: string;
}

interface Module {
  id: string;
  attachments: Attachment[];
}

interface AttachmentModuleProps {
  module: Module;
}

const AttachmentModule: React.FC<AttachmentModuleProps> = ({ module }) => {
  const [attachments, setAttachments] = useState<Attachment[]>(module.attachments);

  const handleAddAttachment = () => {
    setAttachments([
      ...attachments,
      {
        id: `${Date.now()}`,
        fileType: "PDF",
        fileUrl: "",
        description: "",
        moduleId: module.id,
      },
    ]);
  };

  const handleRemoveAttachment = (id: string) => {
    setAttachments(attachments.filter((att) => att.id !== id));
  };

  const handleAttachmentChange = (id: string, key: keyof Attachment, value: string) => {
    setAttachments(
      attachments.map((att) => (att.id === id ? { ...att, [key]: value } : att))
    );
  };

  return (
    <div className="p-4">
      <h2 className="text-lg font-bold">Attachment Module</h2>
      {attachments.map((attachment) => (
        <div key={attachment.id} className="pb-4 mb-4 border-b">
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
          <button
            onClick={() => handleRemoveAttachment(attachment.id)}
            className="p-2 text-white bg-red-500 rounded"
          >
            Remove Attachment
          </button>
        </div>
      ))}
      <button
        onClick={handleAddAttachment}
        className="p-2 text-white bg-green-500 rounded"
      >
        Add Attachment
      </button>
    </div>
  );
};

export default AttachmentModule;
