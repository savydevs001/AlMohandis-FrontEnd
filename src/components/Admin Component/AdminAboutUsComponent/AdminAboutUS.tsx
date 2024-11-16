import { useState, useEffect } from "react";
import AdminInputField from "../AdminLandingPageComponent/AdminInputField";
import LandingPageBtns from "../AdminLandingPageComponent/LandingPageBtns";
import UserManagementHeader from "../UserManagementComponent/UserManagementHeader";
import AdminAboutHeadings from "./AdminAboutHeadings";
import axios from "axios";
import Cookies from "js-cookie";
import { useSnackbar } from "notistack";

// Define types for the heading structure
interface Heading {
  id: string;
  title: string;
  description: string;
}

function AdminAboutUS() {
  
  const [mainHeading, setMainHeading] = useState<string>(""); // Main heading state
  const [headings, setHeadings] = useState<Heading[]>([]); // Array of headings
  const authToken = Cookies.get("token"); 
  const apiBaseURL = "http://localhost:5000/api/admin"; 
  const { enqueueSnackbar } = useSnackbar();

  // Fetch data on component mount
  useEffect(() => {
    const fetchAboutUsData = async () => {
      try {
        const response = await axios.get(`${apiBaseURL}/getAboutUs/26ae5bea-230b-4dfc-8c5d-8cba30cdef37`, {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        });
        setMainHeading(response.data.mainHeading || "");
        setHeadings(response.data.headings || []);
      } catch (error) {
        console.error("Error fetching About Us data:", error);
      }
    };

    fetchAboutUsData();
  }, []);

  // Handle main heading change
  const handleMainHeadingChange = (value: string) => {
    setMainHeading(value);
  };

  // Handle individual heading updates
  const handleHeadingChange = (index: number, key: keyof Heading, value: string) => {
    setHeadings((prevHeadings) =>
      prevHeadings.map((heading, i) =>
        i === index ? { ...heading, [key]: value } : heading
      )
    );
  };

  // Add a new section
  const handleAddSection = () => {
    setHeadings((prev) => [...prev, { id: "", title: "", description: "" }]);
  };

  // Save data to the server
  const handleSave = async () => {
    try {
      await axios.patch(
        `${apiBaseURL}/updateAboutUs/26ae5bea-230b-4dfc-8c5d-8cba30cdef37`,
        { mainHeading, headings },
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );
      enqueueSnackbar("About Us updated successfully!", { variant: "success" });
    } catch (error) {
      console.error("Error updating About Us data:", error);
      enqueueSnackbar("About Us updated successfully!", { variant: "error" });
    }
  };

  return (
    <div className="flex-1 space-y-5">
      <UserManagementHeader title="About Us" />
      <LandingPageBtns onPublish={handleSave} />

      <div className="space-y-5">
        <AdminInputField
          label="Main Heading"
          placeholder="Enter Main Heading data....."
          onChange={handleMainHeadingChange}
        />
        {headings.map((heading, index) => (
          <AdminAboutHeadings
            key={index}
            headingText={`Heading ${index + 1}`}
            title={heading.title}
            description={heading.description}
            onTitleChange={(value) => handleHeadingChange(index, "title", value)}
            onDescriptionChange={(value) =>
              handleHeadingChange(index, "description", value)
            }
          />
        ))}
      </div>
      <div className="flex items-center justify-end">
        <button
          className="px-4 py-2 font-semibold border rounded-md border-primary text-primary"
          onClick={handleAddSection}
        >
          Add Section +
        </button>
      </div>
    </div>
  );
}

export default AdminAboutUS;
