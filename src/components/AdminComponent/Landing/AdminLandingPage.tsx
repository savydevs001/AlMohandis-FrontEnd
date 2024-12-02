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
    id: "",
    mainHeading: "",
    subHeading: "",
    heroImg: "",
    description: "",
    features: [
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

  // Fetch landing page data from API
  useEffect(() => {
    const fetchLandingPage = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/admin/getLandingPage"
        );
        const apiData = response.data;

        setFormData({
          id: apiData.id || "",
          mainHeading: apiData.mainHeading || "",
          subHeading: apiData.subHeading || "",
          heroImg: apiData.heroImg || "",
          description: apiData.description || "",
          features: apiData.features || [
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

  // Handle simple input changes
  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  // Handle nested input changes for `features`
  const handleFeatureChange = (index: number, field: string, value: string) => {
    const updatedFeatures = [...formData.features];
    updatedFeatures[index][field] = value;
    setFormData((prev) => ({ ...prev, features: updatedFeatures }));
  };

  // Handle nested input changes for `keyFeature`
  const handleKeyFeatureChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      keyFeature: { ...prev.keyFeature, [field]: value },
    }));
  };

  // Handle nested input changes for `reviews`
  const handleReviewChange = (index: number, field: string, value: string) => {
    const updatedReviews = [...formData.reviews];
    updatedReviews[index][field] = value;
    setFormData((prev) => ({ ...prev, reviews: updatedReviews }));
  };

  // Clean the payload before sending
  const cleanPayload = () => {
    return {
      id: formData.id,
      mainHeading: formData.mainHeading,
      subHeading: formData.subHeading,
      heroImg: formData.heroImg,
      description: formData.description,
      features: formData.features.map(({ title, icon }) => ({ title, icon })),
      keyFeature: formData.keyFeature,
      reviews: formData.reviews.map(({ rating, fullName, description }) => ({
        rating,
        fullName,
        description,
      })),
    };
  };

  // Handle form submission
  const handleSubmit = async () => {
    const token = Cookies.get("token");
    if (!token) {
      console.error("No token found. Please log in.");
      return;
    }

    const payload = cleanPayload();

    try {
      console.log("Payload being sent:", payload);
      const response = await axios.patch(
        "http://localhost:5000/api/admin/landingPage",
        payload,
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
    } catch (error:any) {
      console.error("Error updating landing page:", error.response?.data || error);
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
          <h1 className="text-xl font-semibold text-center text-primary">
            Hero Section
          </h1>
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
          <h1 className="text-xl font-semibold text-center text-primary">
            How are we different
          </h1>
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
                    onChange={(value) =>
                      handleFeatureChange(index, "title", value)
                    }
                  />
                  <AdminFileInput
                    width="w-[50%]"
                    label="Icon"
                    onChange={(value) =>
                      handleFeatureChange(index, "icon", value)
                    }
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Key Feature */}
        <div className="mt-4">
          <h1 className="text-xl font-semibold text-center text-primary">
            Key Features
          </h1>
          <div>
            <AdminInputField
              label="Main Heading"
              value={formData.keyFeature.mainHeading}
              onChange={(value) =>
                handleKeyFeatureChange("mainHeading", value)
              }
            />
            <RichTextEditor
              label="Content"
              onChange={(value) => handleKeyFeatureChange("content", value)}
            />
            <AdminFileInput
              label="Image"
              onChange={(value) => handleKeyFeatureChange("img", value)}
            />
          </div>
        </div>

        {/* Reviews */}
        <div className="mt-4 mb-4">
          <h1 className="text-xl font-semibold text-center text-primary">
            Reviews
          </h1>
          {formData.reviews.map((review, index) => (
            <div className="space-y-2" key={index}>
              <AdminInputField
                label="Full Name"
                value={review.fullName}
                onChange={(value) =>
                  handleReviewChange(index, "fullName", value)
                }
              />
              <AdminInputField
                label="Rating"
                value={review.rating.toString()}
                onChange={(value) =>
                  handleReviewChange(index, "rating", parseFloat(value))
                }
              />
              <AdminInputField
                label="Description"
                value={review.description}
                onChange={(value) =>
                  handleReviewChange(index, "description", value)
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
