

function TeacherLiveLectureTable() {
  
  const dataRows = [
    { id: 'Basic of Python', name: '230', email: '20-1-2024', typeClass: '1 hr 30 min' },
    { id: 'Basic of Python', name: '230', email: '20-1-2024', typeClass: '1 hr 30 min' },
    { id: 'Basic of Python', name: '230', email: '20-1-2024', typeClass: '1 hr 30 min' },
    { id: 'Basic of Python', name: '230', email: '20-1-2024', typeClass: '1 hr 30 min' },
    { id: 'Basic of Python', name: '230', email: '20-1-2024', typeClass: '1 hr 30 min' },
  ];

  return (
    <div className="overflow-x-auto">
      <div className="">
        <table className="w-full text-center border-collapse">
          <thead>
            <tr className="text-white bg-primary">
              <th className="px-4 py-2 border border-black">Title</th>
              <th className="px-4 py-2 border border-black">Attendance</th>
              <th className="px-4 py-2 border border-black">Date</th>
              <th className="px-4 py-2 border border-black">Duration</th>
            </tr>
          </thead>
          <tbody className="bg-[#D1D6D6]">
            {dataRows.map((row, index) => (
              <tr key={index}>
                <td className="px-4 py-2 border border-black">{row.id}</td>
                <td className="px-4 py-2 border border-black">{row.name}</td>
                <td className="px-4 py-2 border border-black">{row.email}</td>
                <td className="px-4 py-2 border border-black">{row.typeClass}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
}

export default TeacherLiveLectureTable;




