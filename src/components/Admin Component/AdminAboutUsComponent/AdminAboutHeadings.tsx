import React from 'react';
import AdminInputField from "../AdminLandingPageComponent/AdminInputField";
import RichTextEditor from "../AdminLandingPageComponent/RichTextEditor";

interface AdminAboutHeadingsProps {
  headingText: string;
}

const AdminAboutHeadings: React.FC<AdminAboutHeadingsProps> = ({ headingText }) => {
  return (
    <div className='space-y-1'>
      <h1 className='text-lg font-semibold text-primary'>{headingText}</h1>
      <AdminInputField label="Title" placeholder="Enter Heading Title..." />
      <RichTextEditor label="Description" />
    </div>
  );
};

export default AdminAboutHeadings;
