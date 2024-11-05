// import React from 'react';
// import { FaBookmark } from "react-icons/fa";

import ContentVideo from "./ContentVideo";

function Contents() {
  return (
    <div className="w-full bg-white h-[30%] space-y-3 shadow-md p-3">
      <h1 className="text-xl font-semibold">Content</h1>
      <div className="max-h-[250px] overflow-y-auto space-y-3"> {/* Set max height and enable scrolling */}
        <ContentVideo title="Part 1" />
        <ContentVideo title="Part 1" />
        <ContentVideo title="Part 1" />
        <ContentVideo title="Part 1" />
        <ContentVideo title="Part 1" />
        <ContentVideo title="Part 1" />
        {/* Add more ContentVideo components as needed */}
      </div>
      <div>
            
      </div>
    </div>
  );
}

export default Contents;
