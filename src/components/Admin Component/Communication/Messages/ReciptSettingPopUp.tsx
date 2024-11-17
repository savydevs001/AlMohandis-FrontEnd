import React, { useState } from "react";
import SearchableDropdown from "./SearchableDropdown";

interface ReciptSettingPopUpProps {
  onClose: () => void; // Callback for closing the popup
  onPrevious: () => void; // Callback to go back to the previous step
}

const ReciptSettingPopUp: React.FC<ReciptSettingPopUpProps> = ({ onClose, }) => {
  const [selectedGender, setSelectedGender] = useState<string | null>(null);
  const [selectedAudience, setSelectedAudience] = useState<string | null>(null);
  const [_, setSelectedOption] = useState<string | null>(null);

  const handleSelect = (option: string) => {
    setSelectedOption(option);
  };

  const handleGenderSelect = (gender: string) => {
    setSelectedGender(gender);
  };

  const handleAudienceSelect = (audience: string) => {
    setSelectedAudience(audience);
  };

  return (
    <>
      <form className="space-y-4">
        {/* Gender Selection */}
        <div className="space-y-2">
          <label className="font-semibold" htmlFor="gender">
            Gender
          </label>
          <div className="flex items-center gap-2">
            <p
              onClick={() => handleGenderSelect("Female")}
              className={`px-4 py-1 rounded-full w-fit cursor-pointer ${
                selectedGender === "Female" ? "bg-primary text-white" : "bg-pTag text-white"
              }`}
            >
              Female
            </p>
            <p
              onClick={() => handleGenderSelect("Male")}
              className={`px-4 py-1 rounded-full w-fit cursor-pointer ${
                selectedGender === "Male" ? "bg-primary text-white" : "bg-pTag text-white"
              }`}
            >
              Male
            </p>
          </div>
        </div>

        {/* Audience Selection */}
        <div className="space-y-2">
          <label className="font-semibold" htmlFor="audience">
            Audience
          </label>
          <div className="flex items-center gap-2">
            <p
              onClick={() => handleAudienceSelect("All")}
              className={`px-4 py-1 rounded-full w-fit cursor-pointer ${
                selectedAudience === "All" ? "bg-primary text-white" : "bg-pTag text-white"
              }`}
            >
              All
            </p>
            <p
              onClick={() => handleAudienceSelect("Student")}
              className={`px-4 py-1 rounded-full w-fit cursor-pointer ${
                selectedAudience === "Student" ? "bg-primary text-white" : "bg-pTag text-white"
              }`}
            >
              Student
            </p>
            <p
              onClick={() => handleAudienceSelect("Teachers")}
              className={`px-4 py-1 rounded-full w-fit cursor-pointer ${
                selectedAudience === "Teachers" ? "bg-primary text-white" : "bg-pTag text-white"
              }`}
            >
              Teachers
            </p>
            <p
              onClick={() => handleAudienceSelect("Guardians")}
              className={`px-4 py-1 rounded-full w-fit cursor-pointer ${
                selectedAudience === "Guardians" ? "bg-primary text-white" : "bg-pTag text-white"
              }`}
            >
              Guardians
            </p>
          </div>
        </div>

        <div className="space-y-3">
          <SearchableDropdown
            label="Course"
            placeholder="Search"
            options={["All", "Course Name ", "Course Name", "Course Name"]}
            onSelect={handleSelect}
          />
          <SearchableDropdown
            label="Teachers"
            placeholder="Search"
            options={["All", "Teacher Name ", "Teacher Name", "Teacher Name"]}
            onSelect={handleSelect}
          />
          <SearchableDropdown
            label="Groups"
            placeholder="Search"
            options={["All", "Group Name ", "Group Name", "Group Name"]}
            onSelect={handleSelect}
          />
          <SearchableDropdown
            label="Academic Stage"
            placeholder="Search"
            options={["All", "Academic Name ", "Academic Name", "Academic Name"]}
            onSelect={handleSelect}
          />
       
        </div>

        {/* Buttons */}
        <div className="flex items-center justify-start space-x-4">
          <button
            type="button"
            className="px-4 py-2 text-white rounded bg-primary"
          >
            Send Now
          </button>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 border rounded border-primary text-primary hover:bg-blue-700"
          >
            Cancel
          </button>
        </div>
      </form>
    </>
  );
};

export default ReciptSettingPopUp;
