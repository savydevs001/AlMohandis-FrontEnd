import { useState } from 'react';
import UserManagementHeader from "../UserManagementComponent/UserManagementHeader";
import AdminFileInput from "./AdminFileInput";
import AdminInputField from "./AdminInputField";
import LandingPageBtns from "./LandingPageBtns";
import RichTextEditor from "./RichTextEditor";
import Cookies from 'js-cookie'; // Import js-cookie

function AdminLandingPage() {
  const [formData, setFormData] = useState({
    id: "b0793f94-1efb-4597-b867-5bc1ce9f1feb", // Example ID
    mainHeading: "",
    subHeading: "",
    heroImg: "",
    description: "",
    features: [
      { title: "", icon: "" },
      { title: "", icon: "" },
      { title: "", icon: "" },
      { title: "", icon: "" },
    ],
    keyFeature: {
      mainHeading: "",
      content: "",
      img: "",
    },
    reviews: [
      { rating: 0, fullName: "", description: "" },
      { rating: 0, fullName: "", description: "" },
    ],
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleFeatureChange = (index: number, field: string, value: string) => {
    const updatedFeatures : any = [...formData.features];
    updatedFeatures[index][field] = value;
    setFormData((prev) => ({ ...prev, features: updatedFeatures }));
  };

  const handleSubmit = async () => {
    const token = Cookies.get('token'); // Get the token from cookies

    try {
      const response = await fetch('http://localhost:5000/api/admin/landingPage', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`, // Include the Bearer token
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      console.log('Success:', result);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="flex-1 space-y-8">
      <UserManagementHeader title="Landing Page" />
      <LandingPageBtns onPublish={handleSubmit} />
      <div>
        <div>
          <h1 className="text-xl font-semibold text-center text-primary">Hero Section</h1>
          <div className="space-y-1">
            <AdminInputField label="Main Heading" placeholder="Enter Main Heading Data" onChange={(value) => handleInputChange('mainHeading', value)} />
            <AdminInputField label="Sub Heading" placeholder="Enter Sub Heading Data" onChange={(value) => handleInputChange('subHeading', value)} />
            <AdminFileInput label="Hero Img" onChange={(value) => handleInputChange('heroImg', value)} />
          </div>
        </div>
        
        <div className="mt-6">
          <h1 className="text-xl font-semibold text-center text-primary">How are we different</h1>
          <AdminInputField label="Description" placeholder='Add Description....' onChange={(value) => handleInputChange('description', value)} />
          
          {[...Array(4)].map((_, index) => (
            <div className="mt-4" key={index}>
              <h1 className="text-xl font-semibold text-center">{`Feature-${index + 1}`}</h1>
              <div className="space-y-2">
                <div className="flex items-center w-full gap-3">
                  <AdminInputField label="Title" placeholder="Enter Title...." onChange={(value) => handleFeatureChange(index, 'title', value)} />
                  <AdminFileInput width='w-[50%]' label="Icon" onChange={(value) => handleFeatureChange(index, 'icon', value)} />
                </div>
                <AdminInputField label="Description" placeholder="Enter Description...." onChange={(value) => handleFeatureChange(index, 'description', value)} />
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-4">
          <div className="flex items-center gap-4">
            <input className="w-4 h-4 text-green-400 bg-green-400 rounded-full" type="checkbox" />
            <h5 className="text-lg font-semibold">Popular Courses</h5>
          </div>
          <h1 className="text-xl font-semibold text-center text-primary">Popular Courses </h1>
          <AdminInputField label="Course Title" placeholder="Enter Course Title" onChange={(value) => handleInputChange('popularCourses.title', value)} />
          <AdminFileInput label="Course Image" onChange={(value) => handleInputChange('popularCourses.img', value)} />
        </div>

        <div className="mt-4">
          <h1 className="text-xl font-semibold text-center text-primary">Key Features</h1>
          <div>
            <AdminInputField label="Main Heading" placeholder="Main Heading Data..." onChange={(value) => handleInputChange('keyFeature.mainHeading', value)} />
            <RichTextEditor label="Content" onChange={(value) => handleInputChange('keyFeature.content', value)} />
            <AdminFileInput label="Image" onChange={(value) => handleInputChange('keyFeature.img', value)} />
          </div>
        </div>

        <div className="mt-4 mb-4">
          <h1 className="text-xl font-semibold text-center text-primary">Reviews</h1>
          {[...Array(2)].map((_, index) => (
            <div className="space-y-2" key={index}>
              <AdminInputField label="Full Name" placeholder="Enter Full Name" onChange={(value) => handleInputChange(`reviews[${index}].fullName`, value)} />
              <AdminInputField label="Rating" placeholder="Enter Rating" onChange={(value) => handleInputChange(`reviews[${index}].rating`, value)} />
              <AdminInputField label="Description" placeholder="Enter Description" onChange={(value) => handleInputChange(`reviews[${index}].description`, value)} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AdminLandingPage;