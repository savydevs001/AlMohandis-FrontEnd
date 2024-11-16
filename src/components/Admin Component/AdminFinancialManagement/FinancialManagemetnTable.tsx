import { useState } from "react";

import RefundPopup from "./RefundPopup"; // Import RefundPopup
import FinancialViewPopup from "./FinancialViewPopUp";

// Define the row type
interface RowData {
  id: string;
  name: string;
  assistant: string;
  startDate: string;
  status: string;
}

function FinancialManagementTable() {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [isRefundPopupVisible, setIsRefundPopupVisible] = useState(false);
  const [selectedRow, setSelectedRow] = useState<RowData | null>(null);

  const handleViewClick = (row: RowData) => {
    setSelectedRow(row);
    setIsPopupVisible(true);
  };

  const handleRefundClick = (row: RowData) => {
    setSelectedRow(row);
    setIsRefundPopupVisible(true);
  };

  const handleClosePopup = () => {
    setIsPopupVisible(false);
    setSelectedRow(null);
  };

  const handleCloseRefundPopup = () => {
    setIsRefundPopupVisible(false);
    setSelectedRow(null);
  };

  const rows: RowData[] = [
    { id: "John Dow", name: "Math 101", assistant: "75$", startDate: "29-2-2021", status: "Paid" },
    { id: "Jane Doe", name: "Science 202", assistant: "85$", startDate: "12-3-2021", status: "Pending" },
    { id: "Alice Smith", name: "History 303", assistant: "90$", startDate: "5-4-2021", status: "Paid" },
  ];

  return (
    <div className="overflow-x-auto">
      <div>
        <table className="w-full text-center border-collapse">
          <thead>
            <tr className="text-white bg-primary">
              <th className="px-4 py-2 border border-black">Student Name</th>
              <th className="px-4 py-2 border border-black">Course Name</th>
              <th className="px-4 py-2 border border-black">Amount</th>
              <th className="px-4 py-2 border border-black">Date</th>
              <th className="px-4 py-2 border border-black">Status</th>
              <th className="px-4 py-2 border border-black">Invoice</th>
              <th className="px-4 py-2 border border-black">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-[#D1D6D6]">
            {rows.map((row, index) => (
              <tr key={index}>
                <td className="px-4 py-2 border border-black">{row.id}</td>
                <td className="px-4 py-2 border border-black">{row.name}</td>
                <td className="px-4 py-2 border border-black">{row.assistant}</td>
                <td className="px-4 py-2 border border-black">{row.startDate}</td>
                <td
                  className={`px-4 py-2 border border-black ${
                    row.status === "Paid" ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {row.status}
                </td>
                <td className="px-4 py-2 text-pink-500 border border-black">
                  <button
                    className="border-b border-pink-500"
                    onClick={() => handleViewClick(row)}
                  >
                    View
                  </button>
                </td>
                <td className="px-4 py-2 border border-black">
                  <button
                    onClick={() => handleRefundClick(row)}
                    className="text-red-500 border-b border-red-500 cursor-pointer"
                  >
                    Refund
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {isPopupVisible && selectedRow && (
        <FinancialViewPopup row={selectedRow} onClose={handleClosePopup} />
      )}
      {isRefundPopupVisible && selectedRow && (
        <RefundPopup row={selectedRow} onClose={handleCloseRefundPopup} />
      )}
    </div>
  );
}

export default FinancialManagementTable;
