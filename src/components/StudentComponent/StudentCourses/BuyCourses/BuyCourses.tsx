import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import StudentSidebar from "../../StudentSidebar";
import BuyCoursePage from "./BuyCoursePage";
import EnrollCourse from "./EnrollCourse/EnrollCourse";
import {QrReader} from "react-qr-reader"; 
import Cookies from "js-cookie";

function BuyCourses() {
  const token = Cookies.get("token");
  const [qrData, setQrData] = useState<string | null>(null); // State to store QR code data
  const [error, setError] = useState<string | null>(null); // State to store error message

  const handleScan = async (data: string | null): Promise<void> => {
    if (data) {
      setQrData(data);

      try {
        const response = await fetch("http://localhost:5000/api/student/enroll-qrcode", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ qrData: data }),
        });

        if (!response.ok) {
          const errMessage = await response.json();
          throw new Error(errMessage.message || "Enrollment failed");
        }

        alert("Enrollment successful!");
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message || "Error enrolling in the course");
        } else {
          setError("An unknown error occurred.");
        }
      }
    }
  };

  const handleError = (err: Error): void => {
    console.error(err);
    setError("Error scanning QR code");
  };

  return (
    <div className="flex flex-col min-h-screen lg:flex-row">
      <StudentSidebar />
      
      <div className="flex-1 w-[90%] lg:p-6 lg:flex bg-gray-50 mt-3 lg:mt-0 mx-auto">
        <Routes>
          {/* Main BuyCoursePage route */}
          <Route path="/" element={<BuyCoursePage />} />
          {/* EnrollCourse route */}
          <Route path="enrollCourse" element={<EnrollCourse />} />
        </Routes>

        {/* Button to trigger QR code scan */}
        <div className="mt-4">
          <button
            onClick={() => setQrData(null)} // Reset QR data on button click
            className="bg-blue-500 text-white p-2 rounded-lg"
          >
            Scan QR Code to Enroll
          </button>
        </div>

        {/* QR Code scanner */}
        {qrData === null && (
          <div className="mt-4">
            <QrReader
              delay={300}
              onError={handleError}
              onScan={handleScan}
              style={{ width: "100%" }}
            />
          </div>
        )}

        {/* Display error if exists */}
        {error && <p className="mt-4 text-red-500">{error}</p>}
        {/* Display QR data if exists */}
        {qrData && <p className="mt-4 text-gray-700">Scanned Data: {qrData}</p>}
      </div>
    </div>
  );
}

export default BuyCourses;
