import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Cookies from "js-cookie";
import AdminInputField from "../Landing/AdminInputField";
import UserManagementHeader from "../UserManagementComponent/UserManagementHeader";
import { useSnackbar } from 'notistack';

function AdminPrivacyPolicy() {
  const { enqueueSnackbar } = useSnackbar();
  const [privacyData, setPrivacyData] = useState({
    mainPara: "",
    headings: [
      { title: "", content: "" },
      { title: "", content: "" }
    ]
  });

  // Fetch data from the specific API
  const fetchData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/admin/privacyPolicy"
      );
      const apiData = response.data;

      setPrivacyData({
        mainPara: apiData.mainPara || "",
        headings: apiData.headings || [
          { title: "", content: "" },
          { title: "", content: "" }
        ]
      });
    } catch (error) {
      console.error("Error fetching privacy policy data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Update the specific API endpoint with the new data
  const handleSave = async () => {
    const token = Cookies.get('token');
    if (!token) {
      alert('Authentication failed. Token missing');
      return;
    }

    try {
      const response = await axios.patch(
        "http://localhost:5000/api/admin/privacyPolicy/6c6cccf1-0808-4a9d-b1a1-7c99cb9bd91d",
        privacyData,
        {
          headers: {
            Authorization: `Bearer ${token}`, // Make sure 'token' is properly defined
          },
        }
      );
      console.log("Privacy policy updated successfully:", response.data);
      enqueueSnackbar("About Us updated successfully!", { variant: "success" });
    } catch (error) {
      console.error("Error updating privacy policy data:", error);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setPrivacyData((prevData) => ({
      ...prevData,
      [field]: value
    }));
  };

  const handleHeadingChange = (index: number, field: "title" | "content", value: string) => {
    setPrivacyData((prevData) => {
      const updatedHeadings = [...prevData.headings];
      updatedHeadings[index][field] = value;
      return { ...prevData, headings: updatedHeadings };
    });
  };

  return (
    <div className="flex-1 space-y-5">
      <UserManagementHeader title="Privacy Policy" />

      <div className="space-y-5">
        {/* Main Paragraph */}
        <AdminInputField
          label="Main Paragraph"
          value={privacyData.mainPara}
          onChange={(value) => handleInputChange("mainPara", value)}
        />

        {/* Dynamic Headings */}
        {privacyData.headings.map((heading, index) => (
          <div key={index} className="space-y-2">
            <AdminInputField
              label="Title"
              value={heading.title}
              onChange={(value) => handleHeadingChange(index, "title", value)}
            />
            <AdminInputField
              label="Content"
              value={heading.content}
              onChange={(value) => handleHeadingChange(index, "content", value)}
            />
          </div>
        ))}
      </div>

      <div className="flex items-center justify-end space-x-4">
        <button
          onClick={handleSave}
          className="px-4 py-2 font-semibold border rounded-md bg-primary text-white"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
}

export default AdminPrivacyPolicy;
