import CourseInput from "./CourseInput";
import SeasonPopUp from '../Create Course Component/SeasonPopUp'; // Assuming this is your pop-up component
import EditCourseDescription from "./EditCourseDescription";
import { useState } from "react";

function EditCourseForm() {
  const [isSeasonPopUpOpen, setIsSeasonPopUpOpen] = useState(false);

  // Function to open the pop-up
  const handleOpenSeasonPopUp = () => setIsSeasonPopUpOpen(true);

  // Function to close the pop-up
  const handleCloseSeasonPopUp = () => setIsSeasonPopUpOpen(false);

  return (
    <div className="w-full mt-8 space-y-5">
      <div className="flex flex-col-reverse items-center justify-between lg:flex-row">
        <div className="flex flex-col items-center w-full space-y-4 lg:space-y-0 lg:space-x-10 lg:w-3/4 lg:flex-row">
          <CourseInput title="Course Title" placeholder="DBMS for Beginners" />
          <CourseInput title="Course Completion Time" placeholder="4 Weeks" />
        </div>
        <button onClick={handleOpenSeasonPopUp} className="px-4 py-2 font-semibold text-white rounded-md w-fit bg-primary">
          Add Season
        </button>
      </div>

      <div className="flex flex-col items-center w-full lg:w-3/4 lg:space-x-10 lg:flex-row ">
        <CourseInput title="Season Amount" placeholder="$98/00" />
        <CourseInput title="Season2 Amount" placeholder="$87/99" />
      </div>

      <div className="space-y-6">
        <EditCourseDescription title="Course Description" placeholder="Write a short Description" />
        <EditCourseDescription title="Course Objectives" placeholder="Write a short Description" />
        <EditCourseDescription title="What will students learn" placeholder="Write a short Description" />
      </div>

      {isSeasonPopUpOpen && <SeasonPopUp onClose={handleCloseSeasonPopUp} />}
    </div>
  );
}

export default EditCourseForm;
