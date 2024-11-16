import React from 'react';

interface LandingPageBtnsProps {
  onPublish: () => void;
}

const LandingPageBtns: React.FC<LandingPageBtnsProps> = ({ onPublish }) => {
  return (
    <div className="flex items-center justify-end w-full gap-3">
      <button className="px-4 py-2 text-white rounded-md bg-primary" onClick={onPublish}>Publish</button>
      <button className="px-4 py-2 border rounded-md text-primary border-primary">Preview</button>
    </div>
  );
}

export default LandingPageBtns;