import { useState } from "react";
import { NavLink } from "react-router-dom";
import img from "../../../../src/assets/book.webp";
import EditSubjectModal from "./EditSubject"; // Import the modal component

function AdminRegisteredSubCard({ subject }: any) {
  const [isEditModalOpen, setEditModalOpen] = useState(false);

  const openEditModal = () => setEditModalOpen(true);
  const closeEditModal = () => setEditModalOpen(false);

  return (
    <div className="flex flex-col items-start justify-between p-3 space-y-6 bg-white border shadow-sm lg:items-center rounded-xl lg:flex-row lg:space-y-0">
      <div className="flex flex-col items-center gap-4 lg:flex-row">
        <div className="lg:w-[17%] w-[80%]">
          <img className="rounded-lg" src={img} alt="Subject Thumbnail" />
        </div>
        <div className="space-y-1">
          <h1 className="text-xl font-semibold">{subject.title}</h1>
          <p className="text-lg font-semibold text-pTag">
            Duration: <span className="font-normal">{subject.duration} weeks</span>
          </p>
          <p className="text-sm font-semibold text-pTag">
            Teacher: <span className="font-normal">{subject.teacherName}</span>
          </p>
          <p
            className="text-sm font-semibold text-[#FF008C] w-fit bg-[#FF47AC4F] px-2 rounded-xl py-1 cursor-pointer"
            onClick={openEditModal}
          >
            Edit
          </p>
        </div>
      </div>
      <div className="flex flex-col lg:w-[25%] w-[100%] items-start gap-2 lg:border-l-4 border-BgColor px-4">
        <button className="w-full px-4 py-2 text-sm font-semibold text-white rounded-lg bg-red-500">
          Delete Subject
        </button>
      </div>

      {/* Render the Edit Subject Modal */}
      {isEditModalOpen && (
        <EditSubjectModal
          subject={subject}
          onClose={closeEditModal}
          onUpdate={() => {
            closeEditModal();
            // Refresh data or trigger re-fetching after editing
          }}
        />
      )}
    </div>
  );
}

export default AdminRegisteredSubCard;
