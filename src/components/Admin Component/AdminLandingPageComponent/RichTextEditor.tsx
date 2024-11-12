import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

interface RichTextEditorProps {
  label: string;
  placeholder?: string;
  width?: string;
}

const RichTextEditor: React.FC<RichTextEditorProps> = ({ label, placeholder = 'Enter text...', width = '100%' }) => {
  const [value, setValue] = useState('');

  const modules = {
    toolbar: [
      [{ 'bold': true }, { 'italic': true }, { 'list': 'bullet' }],
    ]
  };

  return (
    <div className="space-y-2" style={{ width }}>
      <label className="font-semibold text-gray-800">{label}</label>
      <div className="p-2 border border-gray-300 rounded-md">
        <ReactQuill
          value={value}
          onChange={setValue}
          modules={modules}
          placeholder={placeholder}
          className="outline-none h-fit"
        />
      </div>
    </div>
  );
};

export default RichTextEditor;
