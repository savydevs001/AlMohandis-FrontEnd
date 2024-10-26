import { useState } from 'react';
import DashBoardHeader from "../../Dashboard Component/DashBoardHeader";
import Sidebar from "../../Sidebar";
import EditCourseForm from "./EditCourseForm";
import SeasonsTiles from "./SeasonsTiles";
import AccessibilityPopup from './EditCoursePopUps/AccessibilitySettingpopUp';
import EditCourseBtns from './EditCourseBtns';

function EditCourse() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handlePopupOpen = () => {
    setIsPopupOpen(true);
  };

  const handlePopupClose = () => {
    setIsPopupOpen(false);
  };

  return (
    <div className="flex flex-col w-full lg:flex-row">
      <Sidebar />
      <div className="flex-1 w-full p-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Edit</h1>
          <DashBoardHeader />
        </div>
        <EditCourseForm />
        <div className="grid w-full grid-cols-1 gap-4 lg:grid-cols-2">
          <SeasonsTiles />
        </div>
        <div className="mt-4 w-fit">
          <p
            className="text-sm font-semibold border-b cursor-pointer border-b-primary text-primary"
            onClick={handlePopupOpen}
          >
            Accessibility Setting
          </p>
        </div>

        <EditCourseBtns/>
      </div>

      {isPopupOpen && <AccessibilityPopup onClose={handlePopupClose} />}
    </div>
  );
}

export default EditCourse;
