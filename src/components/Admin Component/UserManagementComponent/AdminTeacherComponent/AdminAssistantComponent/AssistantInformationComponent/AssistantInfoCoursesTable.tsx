import { useState } from 'react';
import AssistantCoursesTable from './AssistantCoursesTable';
import CoursesPermissions from './CoursesPermissions';

function AssistantInfoCoursesTable() {
  // Define state to manage visibility of the table and additional content
  const [isViewClicked, setIsViewClicked] = useState(false);

  // Define a handler for the "View" button click
  const handleViewClick = () => {
    setIsViewClicked(true); // Change state when the "View" button is clicked
  };

  return (
    <div>
      {/* Only render the AssistantCoursesTable if isViewClicked is false */}
      {!isViewClicked && (
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

          {/* Pass handleViewClick function as a prop */}
          <AssistantCoursesTable onViewClick={handleViewClick} />
        </div>
      )}

      {/* Show additional component or content when View button is clicked */}
      {isViewClicked && <div>
        <CoursesPermissions/>
        </div>}
    </div>
  );
}

export default AssistantInfoCoursesTable;
