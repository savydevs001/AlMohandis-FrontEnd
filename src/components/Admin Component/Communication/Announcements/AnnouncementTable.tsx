import React, { useState } from "react";
import DeletePopup from "../Messages/DeletePopup";
import ViewMessagesPopup from "../Messages/ViewMessagePopup";




interface RowData {
  id: string;
  name: string;
  assistant: string;
//   startDate: string;
  status: string;
}

const AnnouncementTable: React.FC = () => {
  const [showDeletePopup, setShowDeletePopup] = useState<boolean>(false);
  const [showViewPopup, setShowViewPopup] = useState<boolean>(false);
  const [selectedRow, setSelectedRow] = useState<number | null>(null);
  const [viewContent, setViewContent] = useState<string | null>(null);
  const [data, setData] = useState<RowData[]>([
    { id: "School Closure Notice", name: 'Student', assistant: "2023-09-10", status: "Send" },
    { id: "School Closure Notice", name: 'Student', assistant: "2023-09-10", status: "Send" },
    { id: "School Closure Notice", name: 'Student', assistant: "2023-09-10", status: "Send" },
    { id: "School Closure Notice", name: 'Student', assistant: "2023-09-10", status: "Send" },
    { id: "School Closure Notice", name: 'Student', assistant: "2023-09-10", status: "Send" },
    { id: "School Closure Notice", name: 'Student', assistant: "2023-09-10", status: "Send" },
    // Add more rows as needed
  ]);

  const handleDeleteClick = (index: number) => {
    setSelectedRow(index);
    setShowDeletePopup(true);
  };

  const handleDeleteConfirm = () => {
    if (selectedRow !== null) {
      setData((prevData) => prevData.filter((_, idx) => idx !== selectedRow)); // Remove selected row
      setSelectedRow(null); // Reset selectedRow
    }
    setShowDeletePopup(false);
  };

  const handleCloseDeletePopup = () => {
    setShowDeletePopup(false);
    setSelectedRow(null); // Reset selectedRow
  };

  const handleViewClick = (row: RowData) => {
    setViewContent(`Recipient: ${row.id}\nSubject: ${row.name}\nDate: ${row.assistant}\nReads:  ${row.status}`);
    setShowViewPopup(true);
  };

  const handleCloseViewPopup = () => {
    setShowViewPopup(false);
    setViewContent(null); // Reset content
  };

  return (
    <div className="overflow-x-auto">
      <div>
        <table className="w-full text-center border-collapse">
          <thead>
            <tr className="text-white bg-primary">
              <th className="px-4 py-2 border border-black">Subject</th>
              <th className="px-4 py-2 border border-black">Recipient</th>
              <th className="px-4 py-2 border border-black">Date</th>
              <th className="px-4 py-2 border border-black">Status</th>
              <th className="px-4 py-2 border border-black">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-[#D1D6D6]">
            {data.map((row, index) => (
              <tr key={index}>
                <td className="px-4 py-2 border border-black">{row.id}</td>
                <td className="px-4 py-2 border border-black">{row.name}</td>
                <td className="px-4 py-2 border border-black">{row.assistant}</td>
                <td className="px-4 py-2 border border-black">{row.status}</td>
                {/* <td className="px-4 py-2 border border-black">{row.status}</td> */}
                <td className="px-4 py-2 border border-black">
                  <span
                    onClick={() => handleViewClick(row)}
                    className="text-pink-500 border-b border-pink-500 cursor-pointer"
                  >
                    View
                  </span>{" "}
                  |{" "}
                  <span
                    onClick={() => handleDeleteClick(index)}
                    className="text-red-500 border-b border-red-500 cursor-pointer"
                  >
                    Delete
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Delete Confirmation Popup */}
      <DeletePopup
        show={showDeletePopup}
        onClose={handleCloseDeletePopup}
        onDelete={handleDeleteConfirm}
      />

      {/* View Details Popup */}
      <ViewMessagesPopup
        show={showViewPopup}
        onClose={handleCloseViewPopup}
        content={viewContent}
      />
    </div>
  );
};

export default AnnouncementTable;



