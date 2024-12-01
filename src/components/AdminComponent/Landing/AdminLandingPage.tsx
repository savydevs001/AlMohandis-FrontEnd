import { useEffect, useState } from "react";
import UserManagementHeader from "../UserManagementComponent/UserManagementHeader";
import AdminFileInput from "./AdminFileInput";
import AdminInputField from "./AdminInputField";
import LandingPageBtns from "./LandingPageBtns";
import RichTextEditor from "./RichTextEditor";
import Cookies from "js-cookie";
import axios from "axios";

function AdminLandingPage() {
  const [formData, setFormData] = useState({
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

  useEffect(() => {
    const fetchLandingPage = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/admin/getLandingPage"
        );

        const apiData = response.data;

        setFormData({
          mainHeading: apiData.mainHeading || "",
          subHeading: apiData.subHeading || "",
          heroImg: apiData.heroImg || "",
          description: apiData.description || "",
          features: apiData.features || [
            { title: "", icon: "" },
            { title: "", icon: "" },
            { title: "", icon: "" },
            { title: "", icon: "" },
          ],
          keyFeature: {
            mainHeading: apiData.keyFeature?.mainHeading || "",
            content: apiData.keyFeature?.content || "",
            img: apiData.keyFeature?.img || "",
          },
          reviews: apiData.reviews || [
            { rating: 0, fullName: "", description: "" },
            { rating: 0, fullName: "", description: "" },
          ],
        });
      } catch (error) {
        console.error("Error fetching landing page data:", error);
      }
    };

    fetchLandingPage();
  }, []);

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleFeatureChange = (index: number, field: string, value: string) => {
    const updatedFeatures = [...formData.features];
    updatedFeatures[index][field] = value;
    setFormData((prev) => ({ ...prev, features: updatedFeatures }));
  };

  const handleSubmit = async () => {
    const token = Cookies.get("token");
    if (!token) {
      console.error("No token found. Please log in.");
      return;
    }

    try {
      const response = await axios.patch(
        "http://localhost:5000/api/admin/landingPage",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        console.log("Success:", response.data);
        alert("Landing page updated successfully!");
      }
    } catch (error) {
      console.error("Error updating landing page:", error);
      alert("Error updating landing page. Check the console for details.");
    }
  };

  return (
    <div className="flex-1 space-y-8">
      <UserManagementHeader title="Landing Page" />
      <LandingPageBtns onPublish={handleSubmit} />
      <div>
        {/* Hero Section */}
        <div>
          <h1 className="text-xl font-semibold text-center text-primary">Hero Section</h1>
          <div className="space-y-1">
            <AdminInputField
              label="Main Heading"
              value={formData.mainHeading}
              onChange={(value) => handleInputChange("mainHeading", value)}
            />
            <AdminInputField
              label="Sub Heading"
              value={formData.subHeading}
              onChange={(value) => handleInputChange("subHeading", value)}
            />
            <AdminFileInput
              label="Hero Img"
              onChange={(value) => handleInputChange("heroImg", value)}
            />
          </div>
        </div>

        {/* Description */}
        <div className="mt-6">
          <h1 className="text-xl font-semibold text-center text-primary">How are we different</h1>
          <AdminInputField
            label="Description"
            value={formData.description}
            onChange={(value) => handleInputChange("description", value)}
          />

          {/* Features */}
          {formData.features.map((feature, index) => (
            <div className="mt-4" key={index}>
              <h1 className="text-xl font-semibold text-center">{`Feature-${index + 1}`}</h1>
              <div className="space-y-2">
                <div className="flex items-center w-full gap-3">
                  <AdminInputField
                    label="Title"
                    value={feature.title}
                    onChange={(value) => handleFeatureChange(index, "title", value)}
                  />
                  <AdminFileInput
                    width="w-[50%]"
                    label="Icon"
                    onChange={(value) => handleFeatureChange(index, "icon", value)}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Key Feature */}
        <div className="mt-4">
          <h1 className="text-xl font-semibold text-center text-primary">Key Features</h1>
          <div>
            <AdminInputField
              label="Main Heading"
              value={formData.keyFeature.mainHeading}
              onChange={(value) => handleInputChange("keyFeature.mainHeading", value)}
            />
            <RichTextEditor
              label="Content"
              onChange={(value) => handleInputChange("keyFeature.content", value)}
            />
            <AdminFileInput
              label="Image"
              onChange={(value) => handleInputChange("keyFeature.img", value)}
            />
          </div>
        </div>

        {/* Reviews */}
        <div className="mt-4 mb-4">
          <h1 className="text-xl font-semibold text-center text-primary">Reviews</h1>
          {formData.reviews.map((review, index) => (
            <div className="space-y-2" key={index}>
              <AdminInputField
                label="Full Name"
                value={review.fullName}
                onChange={(value) =>
                  handleInputChange(`reviews[${index}].fullName`, value)
                }
              />
              <AdminInputField
                label="Rating"
                value={review.rating.toString()}
                onChange={(value) =>
                  handleInputChange(`reviews[${index}].rating`, value)
                }
              />
              <AdminInputField
                label="Description"
                value={review.description}
                onChange={(value) =>
                  handleInputChange(`reviews[${index}].description`, value)
                }
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AdminLandingPage;
