import { useState } from 'react';
import AssistantCoursesTable from './AssistantCoursesTable';
import CoursesPermissions from './CoursesPermissions';

type AssistantInfoCoursesTableProps = {
  onViewClick: () => void;
};

function AssistantInfoCoursesTable({ onViewClick }: AssistantInfoCoursesTableProps) {
  const [isViewClicked, setIsViewClicked] = useState(false);

  const handleViewClick = () => {
    setIsViewClicked(true);
    onViewClick(); // Call the function passed from the grandparent
  };

  return (
    <div>
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

          <AssistantCoursesTable onViewClick={handleViewClick} />
        </div>
      )}
      {isViewClicked && <CoursesPermissions />}
    </div>
  );
}

export default AssistantInfoCoursesTable;
