import React, { useState } from "react";

import TicketViewPopUP from "./TicketViewPopUP";




interface RowData {
  id: string;
  name: string;
  assistant: string;
  startDate: string;
  status: string;
  issueType: string
}

const TicketTable: React.FC = () => {
  const [showViewPopup, setShowViewPopup] = useState<boolean>(false);
  const [viewContent, setViewContent] = useState<string | null>(null);
  const [data,] = useState<RowData[]>([
    { id: "#123", name: '2024-09-09', assistant: "John Dow", startDate: "Student", issueType: "Login issue", status: 'open' },
    { id: "#123", name: '2024-09-09', assistant: "John Dow", startDate: "Student", issueType: "Login issue", status: 'open' },
    { id: "#123", name: '2024-09-09', assistant: "John Dow", startDate: "Student", issueType: "Login issue", status: 'open' },
    { id: "#123", name: '2024-09-09', assistant: "John Dow", startDate: "Student", issueType: "Login issue", status: 'open' },
    { id: "#123", name: '2024-09-09', assistant: "John Dow", startDate: "Student", issueType: "Login issue", status: 'open' },
  ]);



  const handleViewClick = (row: RowData) => {
    setViewContent(`Recipient: ${row.id}\nSubject: ${row.name}\nDate: ${row.assistant}\nReads: ${row.startDate}\nUnread: ${row.issueType}\nUnread: ${row.status}`);
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
              <th className="px-4 py-2 border border-black">Number</th>
              <th className="px-4 py-2 border border-black">Date</th>
              <th className="px-4 py-2 border border-black">User Name</th>
              <th className="px-4 py-2 border border-black">User Role</th>
              <th className="px-4 py-2 border border-black">Issue Type</th>
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
                <td className="px-4 py-2 border border-black">{row.startDate}</td>
                <td className="px-4 py-2 border border-black">{row.issueType}</td>
                <td className="px-4 py-2 border border-black">{row.status}</td>
                <td className="px-4 py-2 border border-black">
                  <span
                    onClick={() => handleViewClick(row)}
                    className="text-pink-500 border-b border-pink-500 cursor-pointer"
                  >
                    View
                  </span>{" "}
                  
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* View Details Popup */}
      <TicketViewPopUP
        show={showViewPopup}
        onClose={handleCloseViewPopup}
        content={viewContent}
      />
    </div>
  );
};

export default TicketTable;




