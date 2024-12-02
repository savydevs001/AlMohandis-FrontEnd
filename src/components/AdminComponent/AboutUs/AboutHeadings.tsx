import React from "react";

interface AdminAboutHeadingsProps {
  headingText: string;
  title: string;
  description: string;
  value:string;
  onTitleChange: (value: string) => void;
  onDescriptionChange: (value: string) => void;
}

const AdminAboutHeadings: React.FC<AdminAboutHeadingsProps> = ({
  headingText,
  title,
  description,
  onTitleChange,
  onDescriptionChange,
}) => {
  return (
    <div className="space-y-2">
      <h4 className="font-semibold">{headingText}</h4>
      <input
        type="text"
        placeholder="Enter Title"
        value={title}
        onChange={(e) => onTitleChange(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded-md"
      />
      <textarea
        placeholder="Enter Description"
        value={description}
        onChange={(e) => onDescriptionChange(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded-md"
      />
    </div>
  );
};

export default AdminAboutHeadings;
