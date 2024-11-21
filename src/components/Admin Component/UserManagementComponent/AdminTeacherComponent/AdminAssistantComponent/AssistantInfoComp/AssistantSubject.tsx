// import React from 'react' // Uncomment if needed (React 17 and below)

import AssistantCoursesTable from "./AssistantCoursesTable";

function AssistantSubject() {
  return (
    <div>
      <div className="flex items-center gap-3 py-6 lg:gap-6">
        <button className="px-4 py-1 text-sm font-semibold text-white rounded-md lg:py-3 lg:text-lg bg-primary">
          Total <span className="px-3 lg:text-xl">08</span>
        </button>
        <button className="px-4 lg:py-3 py-1 lg:text-lg text-sm font-semibold text-white rounded-md bg-[#098E02]">
          Active <span className="px-3 lg:text-xl">06</span>
        </button>
        <button className="px-4 lg:py-3 py-1 lg:text-lg text-sm font-semibold text-white rounded-md bg-[#0900FF]">
          Inactive <span className="px-3 lg:text-xl">02</span>
        </button>
      </div>
      <div>
        <AssistantCoursesTable  />
      </div>
    </div>
  );
}

export default AssistantSubject;
