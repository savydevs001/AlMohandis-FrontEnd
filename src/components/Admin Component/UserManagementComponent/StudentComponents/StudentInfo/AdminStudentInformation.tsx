import { useState } from "react";
import { useParams } from "react-router-dom";
import UserManagementHeader from "../../UserManagementHeader";
import GeneralInformation from "./GeneralInfo/GeneralInformation";
import AdminStudentCourse from "./StudentCourses/AdminStudentCourse";
import AdminLiveLecture from "./LiveLectures/AdminLiveLecture";
import AdminRegisteredStudent from "../RegisteredStudent/RegisteredStudent";

type Tab = "information" | "course" | "lecturesAttended" | "registeredStudents";

function AdminStudentInformation() {
  const [activeTab, setActiveTab] = useState<Tab>("information");
  const { Id } = useParams<{ Id: string }>(); 

  const renderContent = () => {
    switch (activeTab) {
      case "information":
        return <GeneralInformation Id={Id} />;
      case "course":
        return <AdminStudentCourse />;
      case "lecturesAttended":
        return <AdminLiveLecture />;
      case "registeredStudents":
        return <AdminRegisteredStudent />;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-12">
      <UserManagementHeader title={`Student Information`} />

      <div className="w-full p-2 space-y-3 bg-white shadow-sm">
        {/* Tabs Header */}
        <div className="flex space-x-6 border-b">
          <button
            className={`px-4 py-2 text-sm font-semibold ${
              activeTab === "information"
                ? "text-teal-600 border-b-2 border-teal-600"
                : "text-gray-600"
            }`}
            onClick={() => setActiveTab("information")}
          >
            Information
          </button>
          <button
            className={`px-4 py-2 text-sm font-semibold ${
              activeTab === "course"
                ? "text-teal-600 border-b-2 border-teal-600"
                : "text-gray-600"
            }`}
            onClick={() => setActiveTab("course")}
          >
            Course
          </button>
          <button
            className={`px-4 py-2 text-sm font-semibold ${
              activeTab === "lecturesAttended"
                ? "text-teal-600 border-b-2 border-teal-600"
                : "text-gray-600"
            }`}
            onClick={() => setActiveTab("lecturesAttended")}
          >
            Lectures Attended
          </button>
          <button
            className={`px-4 py-2 text-sm font-semibold ${
              activeTab === "registeredStudents"
                ? "text-teal-600 border-b-2 border-teal-600"
                : "text-gray-600"
            }`}
            onClick={() => setActiveTab("registeredStudents")}
          >
            Registered Students
          </button>
        </div>

        {/* Content Section */}
        <div className="p-6">{renderContent()}</div>
      </div>
    </div>
  );
}

export default AdminStudentInformation;
