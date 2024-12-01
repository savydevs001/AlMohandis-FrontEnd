import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminInputField from "../Landing/AdminInputField";
import LandingPageBtns from "../Landing/LandingPageBtns";
import UserManagementHeader from "../UserManagementComponent/UserManagementHeader";
import Cookies from "js-cookie";

function AdminContactUs() {
  const [contactData, setContactData] = useState({
    email: "",
    phoneNumber: "",
    address: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Fetch data from the API
  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/admin/contactUs");
      setContactData({
        email: response.data.email || "",
        phoneNumber: response.data.phone || "",
        address: response.data.address || "",
      });
      console.log(response.data)
    } catch (error) {
      console.error("Error fetching contact data:", error);
      setError("Failed to fetch data.");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Save the updated contact data
  const handleSave = async () => {
    setIsLoading(true);
    setError(null);

    const token = Cookies.get('token');
    if (!token) {
      alert('Authentication failed. Token missing');
      return;
    }

    try {
      const response = await axios.patch(
        "http://localhost:5000/api/admin/contactUs/f113f06a-98c3-4f36-96fe-2bfd7696dfbc",
        contactData,
        {
          headers: {
            Authorization: `Bearer ${token}`, // Make sure 'token' is properly defined
          },
        }
      );
      console.log("Contact data updated successfully:", response.data);
      setIsLoading(false);
    } catch (error) {
      console.error("Error updating contact data:", error);
      setError("Failed to update contact data.");
      setIsLoading(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setContactData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  return (
    <div className="flex-1 space-y-6">
      <UserManagementHeader title="Contact Us" />
      <LandingPageBtns onPublish={handleSave} />

      {error && <div className="text-red-500">{error}</div>}

      <div className="space-y-7">
        <AdminInputField
          label="Email Address"
          value={contactData.email} // Bind value to email
          onChange={(value) => handleInputChange("email", value)} // Update email
        />
        <AdminInputField
          label="Phone Number"
          value={contactData.phoneNumber} // Bind value to phone number
          onChange={(value) => handleInputChange("phoneNumber", value)} // Update phone number
        />
        <AdminInputField
          label="Address"
          value={contactData.address} // Bind value to address
          onChange={(value) => handleInputChange("address", value)} // Update address
        />
      </div>

      {isLoading && <div className="text-center">Saving...</div>} {/* Display loading state */}
    </div>
  );
}

export default AdminContactUs;
