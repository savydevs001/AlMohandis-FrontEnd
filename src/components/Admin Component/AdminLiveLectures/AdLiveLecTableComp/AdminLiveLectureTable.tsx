import { useState } from 'react';
import AdminLiveLectureAttachmentPopUp from '../AdPenApprovlComp/AdminLiveLectureAttachmentPopUp';

function AdminLiveLectureTable() {
  const [isArrowPopupVisible, setIsArrowPopupVisible] = useState(false);





  const handleArrowClick = () => {
    setIsArrowPopupVisible(true);
  };

  const handleCloseArrowPopup = () => {
    setIsArrowPopupVisible(false);
  };

  const dataRows = [
    { id: '8809H78', name: 'Basic of Science', email: 'John Daniel', typeClass: '28-03-2021', joiningDate: '2:30 PM', coursesEnrolled: 230, duration:'02:00:00' },
    { id: '8809H78', name: 'Basic of Science', email: 'John Daniel', typeClass: '28-03-2021', joiningDate: '2:30 PM', coursesEnrolled: 230, duration:'02:00:00' },
    { id: '8809H78', name: 'Basic of Science', email: 'John Daniel', typeClass: '28-03-2021', joiningDate: '2:30 PM', coursesEnrolled: 230, duration:'02:00:00' },
    { id: '8809H78', name: 'Basic of Science', email: 'John Daniel', typeClass: '28-03-2021', joiningDate: '2:30 PM', coursesEnrolled: 230, duration:'02:00:00' },
    { id: '8809H78', name: 'Basic of Science', email: 'John Daniel', typeClass: '28-03-2021', joiningDate: '2:30 PM', coursesEnrolled: 230, duration:'02:00:00' },
    { id: '8809H78', name: 'Basic of Science', email: 'John Daniel', typeClass: '28-03-2021', joiningDate: '2:30 PM', coursesEnrolled: 230, duration:'02:00:00' },
    { id: '8809H78', name: 'Basic of Science', email: 'John Daniel', typeClass: '28-03-2021', joiningDate: '2:30 PM', coursesEnrolled: 230, duration:'02:00:00' },
  ];

  return (
    <div className="overflow-x-auto">
      <div className="">
        <table className="w-full text-center border-collapse">
          <thead>
            <tr className="text-white bg-primary">
              <th className="px-4 py-2 border border-black">ID</th>
              <th className="px-4 py-2 border border-black">Title</th>
              <th className="px-4 py-2 border border-black">Teacher</th>
              <th className="px-4 py-2 border border-black">Date</th>
              <th className="px-4 py-2 border border-black">Time</th>
              <th className="px-4 py-2 border border-black">Attendees</th>
              <th className="px-4 py-2 border border-black">Duration</th>
              <th className="px-4 py-2 border border-black">Actions</th>
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
                <td className="px-4 py-2 border border-black">{row.duration}</td>
                <td className="px-4 py-2 border border-black">
                  <span
                    className="text-pink-500 border-b border-pink-500 cursor-pointer"
                    onClick={handleArrowClick}
                  >
                    View
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

            {isArrowPopupVisible && <AdminLiveLectureAttachmentPopUp onClose={handleCloseArrowPopup} show  />}
    </div>
  );
}

export default AdminLiveLectureTable;


;


