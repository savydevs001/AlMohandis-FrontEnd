import { useState } from 'react';
import LectureDetailsPopup from './LectureDetailsPopup';

function LiveLectureTable() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedData, setSelectedData] = useState(null);

  const handleViewClick = (data: any) => {
    setSelectedData(data);
    setIsPopupOpen(true);
  };


  const closePopup = () => {
    setIsPopupOpen(false);
    setSelectedData(null);
  };

  const dataRows = [
    { id: 'Basic of Python', name: 'John Daniel', email: 'NA', typeClass: '28-03-2021', joiningDate: '2:30:00', coursesEnrolled: 230 },
    { id: 'Basic of Python', name: 'John Daniel', email: 'NA', typeClass: '28-03-2021', joiningDate: '2:30:00', coursesEnrolled: 230 },
    { id: 'Basic of Python', name: 'John Daniel', email: 'NA', typeClass: '28-03-2021', joiningDate: '2:30:00', coursesEnrolled: 230 },
    { id: 'Basic of Python', name: 'John Daniel', email: 'NA', typeClass: '28-03-2021', joiningDate: '2:30:00', coursesEnrolled: 230 },
    { id: 'Basic of Python', name: 'John Daniel', email: 'NA', typeClass: '28-03-2021', joiningDate: '2:30:00', coursesEnrolled: 230 },
  ];

  return (
    <div className="overflow-x-auto">
      <div className="">
        <table className="w-full text-center border-collapse">
          <thead>
            <tr className="text-white bg-primary">
              <th className="px-4 py-2 border border-black">Title</th>
              <th className="px-4 py-2 border border-black">Teacher</th>
              <th className="px-4 py-2 border border-black">Assistant</th>
              <th className="px-4 py-2 border border-black">Date</th>
              <th className="px-4 py-2 border border-black">Duration</th>
              <th className="px-4 py-2 border border-black">Attendance</th>
              <th className="px-4 py-2 border border-black">Attachment</th>
            </tr>
          </thead>
          <tbody className="bg-[#D1D6D6]">
            {dataRows.map((row, index) => (
              <tr key={index}>
                <td className="px-4 py-2 border border-black">{row.id}</td>
                <td className="px-4 py-2 border border-black">{row.name}</td>
                <td className="px-4 py-2 border border-black">{row.email}</td>
                <td className="px-4 py-2 border border-black">{row.typeClass}</td>
                <td className="px-4 py-2 border border-black">{row.joiningDate}</td>
                <td className="px-4 py-2 border border-black">{row.coursesEnrolled}</td>
                <td className="px-4 py-2 border border-black">
                  <span
                    className="text-blue-500 cursor-pointer"
                    onClick={() => handleViewClick(row)}
                  >
                    View
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Popup Component */}
      {isPopupOpen && selectedData && (
        <LectureDetailsPopup onClose={closePopup} data={selectedData} />
      )}
    </div>
  );
}

export default LiveLectureTable;
