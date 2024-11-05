import React from 'react';

interface ShowAttachmentProps {
  attachment: string;
}

const ShowAttachment: React.FC<ShowAttachmentProps> = ({ attachment }) => {
  return (
    <div className="p-5">
      <h2 className="text-lg font-semibold">Attachment</h2>
      <p className="text-gray-600">Attachment details for: {attachment}</p>
      {/* Render the attachment content here. */}
      <div className="p-4 mt-4 bg-gray-100 rounded-md">
        {/* You can customize how the attachment displays here */}
        <p>Attachment URL: {attachment}</p>
      </div>
    </div>
  );
};

export default ShowAttachment;
