import React from 'react';

type GradesPopupProps = {
  onClose: () => void;
};

const GradesPopup: React.FC<GradesPopupProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
      <div className="bg-white rounded-xl shadow-lg w-full  md:w-[85%] p-5">
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
        <div className="flex justify-end mt-4">
          <button
            onClick={onClose}
            className="px-4 py-2 text-teal-700 border border-teal-700 rounded-lg hover:bg-teal-100"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default GradesPopup;
