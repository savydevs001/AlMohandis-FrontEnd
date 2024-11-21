import React from 'react';
import AddDropDwoninPopUp from './AddDropDwoninPopUp';

interface GradesAddPopupProps {
  show: boolean;
  onClose: () => void;
}

const GradesAddPopup: React.FC<GradesAddPopupProps> = ({ show, onClose }) => {
  if (!show) return null; // Don't render if not visible

  return (
      <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50"
    >
      <div
        className="bg-white rounded-xl shadow-lg w-full md:w-[85%] p-5 max-h-[95vh] overflow-y-auto"
      >
        <AddDropDwoninPopUp />
        <table className="w-full text-center border-collapse">
          <thead>
            <tr className="text-white bg-primary">
              <th className="px-4 py-2 border border-black">Exam</th>
              <th className="px-4 py-2 border border-black">Total Marks</th>
              <th className="px-4 py-2 border border-black">Obtained Marks</th>
            </tr>
          </thead>
          <tbody className="bg-[#D1D6D6]">
            {[
              { exam: 'Exam Type 1', total: 100, obtained: 90 },
              { exam: 'Assignment 1', total: 50, obtained: 50 },
              { exam: 'Exam Type 2', total: 100, obtained: 90 },
              { exam: 'Mid Term', total: 50, obtained: 45 },
              { exam: 'Exam Type 3', total: 100, obtained: 90 },
              { exam: 'Assignment 1', total: 90, obtained: 90 },
              { exam: 'Exam Type 4', total: 90, obtained: 90 },
              { exam: 'Exam Type 5', total: 90, obtained: 90 },
              { exam: 'Final Exam', total: 90, obtained: 90 },
            ].map((row, index) => (
              <tr key={index}>
                <td className="px-4 py-2 border border-black">{row.exam}</td>
                <td className="px-4 py-2 border border-black">{row.total}</td>
                <td className="px-4 py-2 border border-black">{row.obtained}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-end gap-3 mt-4">
          <button
            onClick={onClose}
            className="px-4 py-2 text-white rounded-lg bg-primary "
          >
            Save
          </button>
          <button
            onClick={onClose}
            className="px-4 py-2 text-teal-700 border border-teal-700 rounded-l"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
    
  );
};

export default 


GradesAddPopup;
