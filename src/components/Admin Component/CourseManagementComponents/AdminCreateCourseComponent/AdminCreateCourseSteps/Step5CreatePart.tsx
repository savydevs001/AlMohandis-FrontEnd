import React, { useState, useEffect } from "react";
import { RxPinRight } from "react-icons/rx";

interface PartStepProps {
  handleNext: () => void;
}

const Step5CreatePart: React.FC<PartStepProps> = ({ handleNext }) => {
  const [formData, setFormData] = useState({
    title: "",
    price: 0,
    openingDate: "",
    completionTime: "",
  });

  const [isPartCreated, setIsPartCreated] = useState(false); // Track if the part is already created
  const [partId, setPartId] = useState<string | null>(null); // Track the part ID
  const courseId = localStorage.getItem("courseId");

  useEffect(() => {
    // Retrieve saved data from localStorage if available
    const savedData = localStorage.getItem("coursePartData");
    if (savedData) {
      const parsedData = JSON.parse(savedData);
      setFormData(parsedData);

      // Check if a part has already been created
      if (parsedData.partId) {
        setIsPartCreated(true);
        setPartId(parsedData.partId);
      }
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prev) => {
      const updatedData = {
        ...prev,
        [name]: name === "price" || name === "completionTime" ? Number(value) : value,
      };
      localStorage.setItem("coursePartData", JSON.stringify(updatedData));
      return updatedData;
    });
  };

  const handleSubmit = async () => {
    if (!courseId) {
      alert("Course ID is missing. Please go back and select a course.");
      return;
    }

    try {
      let response;
      if (isPartCreated && partId) {
        // PATCH API for updating the part
        response = await fetch(
          `http://localhost:5000/api/courses/${courseId}/parts/${partId}`,
          {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          }
        );
      } else {
        // POST API for creating a new part
        response = await fetch(
          `http://localhost:5000/api/courses/${courseId}/createPart`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          }
        );
      }

      const data = await response.json();
      if (response.ok) {
        alert(isPartCreated ? "Part updated successfully!" : "Part created successfully!");
        setIsPartCreated(true);

        // Store part ID and clear local data after a successful submission
        if (!isPartCreated) {
          const updatedData = { ...formData, partId: data.id };
          localStorage.setItem("coursePartData", JSON.stringify(updatedData));
          setPartId(data.id);
        }

        handleNext(); // Move to the next step
      } else {
        alert(`Failed to ${isPartCreated ? "update" : "create"} part: ${data.message}`);
      }
    } catch (error) {
      console.error(`Error ${isPartCreated ? "updating" : "creating"} course part:`, error);
      alert("An error occurred while submitting the part.");
    }
  };

  return (
    <div className="mt-12 h-fit">
      <div className="max-w-4xl p-8 mx-auto space-y-6 shadow-2xl h-fit bg-cardBg">
        <h2 className="text-2xl font-semibold">{isPartCreated ? "Edit Part" : "Create Part"}</h2>
        <div className="flex flex-col">
          <label className="font-medium rounded-md" htmlFor="title">Title</label>
          <input
            type="text"
            className="rounded-md bg-cardBg border-[#6666]"
            name="title"
            placeholder="Enter your Title"
            value={formData.title}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex flex-col justify-between w-full lg:flex-row gap-14">
          <div className="w-full space-y-4 lg:w-1/2">
            <div className="flex flex-col gap-1">
              <label className="font-medium rounded-md" htmlFor="price">Price</label>
              <input
                type="number"
                className="rounded-md bg-cardBg border-[#6666]"
                name="price"
                placeholder="99.00"
                value={formData.price}
                onChange={handleInputChange}
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="font-medium rounded-md" htmlFor="openingDate">Opening Date</label>
              <input
                type="date"
                className="rounded-md bg-cardBg border-[#6666]"
                name="openingDate"
                value={formData.openingDate}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="w-full space-y-4 lg:w-1/2">
            <div className="flex flex-col gap-1">
              <label className="font-medium rounded-md" htmlFor="completionTime">
                Course Completion Time
              </label>
              <input
                type="number"
                className="rounded-md bg-cardBg border-[#6666]"
                name="completionTime"
                placeholder="4 days"
                value={formData.completionTime}
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button
            className="flex items-center gap-2 px-6 py-2 font-semibold text-white border-2 rounded-lg bg-primary"
            onClick={handleSubmit}
          >
            {isPartCreated ? "Update" : "Next"}
            <RxPinRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Step5CreatePart;
