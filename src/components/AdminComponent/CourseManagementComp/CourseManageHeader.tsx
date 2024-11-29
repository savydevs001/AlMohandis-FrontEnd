import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
import ActiveCourseShowComp from "./ActiveCoursesComponent/ActiveCourseShowComp";
import AdminPendingCourses from "./PendingCourses/AdminPendingCourses";
import AdminDraftCourses from "./DraftCourses/AdminDraftCourses";
import AdminArchivedCourse from "./Archived/AdminArchivedCourse";

type Tab = "active" | "pending" | "archived" | "draft";

interface Course {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  isFree: boolean;
  isActive: boolean;
  isDraft: boolean;
  waitingForReview: boolean;
  objectives?: string;
  whatYouWillLearn?: string;
  instructorId?: string; 
  adminId?: string;
  updatedAt: string; 
}

function CourseManagementShowHeader() {
  const [activeTab, setActiveTab] = useState<Tab>("active");
  const [courses, setCourses] = useState<Course[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const token = Cookies.get("token");
        const response = await axios.get("http://localhost:5000/api/admin/course/getAll", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setCourses(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching courses:", error);
        setError("Failed to fetch courses. Please try again later.");
      }
    };

    fetchCourses();
  }, []);

  // Categorize courses based on the provided model
  const activeCourses = courses.filter(course => course.isActive == true);
  const pendingCourses = courses.filter(course => course.waitingForReview == true && course.isDraft == false);
  const draftCourses = courses.filter(course => course.isDraft == true);
  const archivedCourses = courses.filter(course => course.isActive == false && course.isDraft == false && course.waitingForReview == false);

  // Normalize data for ActiveCourseShowComp
  const normalizedActiveCourses = activeCourses.map(course => ({
    id: course.id,
    name: course.title,
    description: course.description,
    imageSrc: course.imageSrc,
    objectives: course.objectives || "Not specified",
    whatYouWillLearn: course.whatYouWillLearn || "Not specified",
    instructorId: course.instructorId || "Unknown",
    adminId: course.adminId || "Unknown",
    isFree: course.isFree,
    publishedDate: "Unknown", 
    studentCount: 0,
  }));

  const renderContent = () => {
    switch (activeTab) {
      case "active":
        return <ActiveCourseShowComp courses={normalizedActiveCourses} />;
      case "pending":
        return <AdminPendingCourses courses={pendingCourses} />;
      case "archived":
        return <AdminArchivedCourse courses={archivedCourses} />;
      case "draft":
        return <AdminDraftCourses courses={draftCourses} />;
      default:
        return null;
    }
  };

  return (
    <div>
      {error && <p className="text-red-500">{error}</p>}
      <div className="w-full space-y-3">
        <div className="flex flex-col justify-between space-y-6 lg:items-center lg:flex-row lg:space-y-0">
          {/* Tab buttons */}
          <div className="flex space-x-6">
            <button
              className={`px-2 py-2 text-md ${
                activeTab === "active" ? "text-teal-600 border-b-2 border-teal-600" : "text-gray-600"
              }`}
              onClick={() => setActiveTab("active")}
            >
              Active
            </button>
            <button
              className={`px-2 py-2 text-md ${
                activeTab === "pending" ? "text-teal-600 border-b-2 border-teal-600" : "text-gray-600"
              }`}
              onClick={() => setActiveTab("pending")}
            >
              Pending
            </button>
            <button
              className={`px-2 py-2 text -md ${
                activeTab === "archived" ? "text-teal-600 border-b-2 border-teal-600" : "text-gray-600"
              }`}
              onClick={() => setActiveTab("archived")}
            >
              Archived
            </button>
            <button
              className={`px-2 py-2 text-md ${
                activeTab === "draft" ? "text-teal-600 border-b-2 border-teal-600" : "text-gray-600"
              }`}
              onClick={() => setActiveTab("draft")}
            >
              Draft
            </button>
          </div>
          <div>
            <NavLink
              className="px-4 py-3 font-semibold text-white rounded-md bg-primary"
              to="AdminCreateCourse/step1"
            >
              Create New Course <span className="text-2xl">+</span>
            </NavLink>
          </div>
        </div>
        <div className="py-4">{renderContent()}</div>
      </div>
    </div>
  );
}

export default CourseManagementShowHeader;