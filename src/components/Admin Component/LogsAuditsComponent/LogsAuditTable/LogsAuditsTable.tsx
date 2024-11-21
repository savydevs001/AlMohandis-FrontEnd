import  { useState } from "react";
import LogAuditsViewPopUp from "./LogAuditsViewPopUp";



function LogsAuditsTable() {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [selectedRow, setSelectedRow] = useState<{
    id: string;
    name: string;
    email: string;
    typeClass: string;
    joiningDate: string;
  } | null>(null);

  const rows = [
    { id: "EVT-1001", name: "User Role Change", email: "John Doe", typeClass: "2024-09-02", joiningDate: "Success" },
    { id: "EVT-1002", name: "User Login", email: "Jane Smith", typeClass: "2024-09-01", joiningDate: "Failure" },
    // Add more rows as needed
  ];

  const handleViewClick = (row: typeof rows[0]) => {
    setSelectedRow(row);
    setIsPopupVisible(true);
  };

  const handleClosePopup = () => {
    setIsPopupVisible(false);
    setSelectedRow(null);
  };

  return (
    <div className="overflow-x-auto">
      <div>
        <table className="w-full text-center border-collapse">
          <thead>
            <tr className="text-white bg-primary">
              <th className="px-4 py-2 border border-black">Event Id</th>
              <th className="px-4 py-2 border border-black">Action Type</th>
              <th className="px-4 py-2 border border-black">User</th>
              <th className="px-4 py-2 border border-black">Date</th>
              <th className="px-4 py-2 border border-black">Status</th>
              <th className="px-4 py-2 border border-black">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-[#D1D6D6]">
            {rows.map((row, index) => (
              <tr key={index}>
                <td className="px-4 py-2 border border-black">{row.id}</td>
                <td className="px-4 py-2 border border-black">{row.name}</td>
                <td className="px-4 py-2 border border-black">{row.email}</td>
                <td className="px-4 py-2 border border-black">{row.typeClass}</td>
                <td className="px-4 py-2 border border-black">{row.joiningDate}</td>
                <td className="px-4 py-2 border border-black">
                  <span
                    className="text-pink-500 border-b border-pink-500 cursor-pointer"
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

      {/* Popup */}
      <LogAuditsViewPopUp
        isVisible={isPopupVisible}
        onClose={handleClosePopup}
        details={selectedRow}
      />
    </div>
  );
}

export default LogsAuditsTable;
