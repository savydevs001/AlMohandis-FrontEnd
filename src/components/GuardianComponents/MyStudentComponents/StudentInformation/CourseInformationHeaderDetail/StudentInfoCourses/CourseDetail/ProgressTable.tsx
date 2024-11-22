function ProgressTable() {
      return (
        <div className="overflow-x-auto"> {/* Added overflow-x-auto for horizontal scrolling */}
          <div>
            <table className="w-full text-center border-collapse">
              <thead>
                <tr className="text-white bg-primary">
                  <th className="px-4 py-2 border border-black">Season</th>
                  <th className="px-4 py-2 border border-black">Chapter Name</th>
                  <th className="px-4 py-2 border border-black">Module</th>
                  <th className="px-4 py-2 border border-black">Percentage</th>
                  <th className="px-4 py-2 border border-black">Status</th>
                  <th className="px-4 py-2 border border-black">Difference</th>
                </tr>
              </thead>
              <tbody className="bg-[#D1D6D6]">
                {[
                  { id: '1', name: 'Chapter Name', assistant: 'Lesson 1', startDate: '100%', status: 'Completed', progress: 'NA' },
                  { id: '2', name: 'Chapter Name', assistant: 'Lesson 2', startDate: '80%', status: 'In Progress', progress: '20%' },
                  { id: '3', name: 'Chapter Name', assistant: 'Lesson 3', startDate: '60%', status: 'In Progress', progress: '40%' },
                  { id: '4', name: 'Chapter Name', assistant: 'Lesson 4', startDate: '100%', status: 'Completed', progress: 'NA' },
                ].map((row, index) => (
                  <tr
                    key={index}
                    className={
                      index % 2 === 0
                        ? "bg-[#11C1114D] text-black" // Green for even rows
                        : "bg-[#ED1C244D] text-black" // Red for odd rows
                    }
                  >
                    <td className="px-4 py-2 border border-black">{row.id}</td>
                    <td className="px-4 py-2 border border-black">{row.name}</td>
                    <td className="px-4 py-2 border border-black">{row.assistant}</td>
                    <td className="px-4 py-2 border border-black">{row.startDate}</td>
                    <td className="px-4 py-2 border border-black">{row.status}</td>
                    <td className="px-4 py-2 border border-black">{row.progress}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );
    }
    
    export default ProgressTable;
    