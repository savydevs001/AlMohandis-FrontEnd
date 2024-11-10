// import React from 'react'

import { NavLink } from "react-router-dom"

function Lessonoverview() {
  return (
      <div className="overflow-x-auto"> {/* Added overflow-x-auto for horizontal scrolling */}
      <div className="">
        <table className="w-full text-center border-collapse">
          <thead>
            <tr className="text-white bg-primary">
              <th className="px-4 py-2 border border-black">Lesson No</th>
              <th className="px-4 py-2 border border-black">Chapter</th>
              <th className="px-4 py-2 border border-black">Title</th>
              <th className="px-4 py-2 border border-black">Status</th>
              <th className="px-4 py-2 border border-black">Watch  Date</th>
              <th className="px-4 py-2 border border-black">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-[#D1D6D6]">
            {[
              { id: '1', name: 'Chapter Name', assistant: 'Basic Science',startDate: '29-02-2021', status: 'Watched',  },  
              { id: '1', name: 'Chapter Name', assistant: 'Basic Science',startDate: '29-02-2021', status: 'Watched',  },  
              { id: '1', name: 'Chapter Name', assistant: 'Basic Science',startDate: '29-02-2021', status: 'Watched',  },  
              { id: '1', name: 'Chapter Name', assistant: 'Basic Science',startDate: '29-02-2021', status: 'Watched',  },  
              { id: '1', name: 'Chapter Name', assistant: 'Basic Science',startDate: '29-02-2021', status: 'Watched',  },  
              
            ].map((row, index) => (
              <tr key={index}>
                <td className="px-4 py-2 border border-black">{row.id}</td>
                <td className="px-4 py-2 border border-black">{row.name}</td>
                <td className="px-4 py-2 border border-black">{row.assistant}</td>
                <td className="px-4 py-2 text-green-600 border border-black">{row.status}</td>
                <td className="px-4 py-2 border border-black">{row.startDate}</td>
               
                <td className="px-4 py-2 border border-black">
                 <NavLink to='' className="text-pink-500 border-b border-pink-500 cursor-pointer"> View</NavLink>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div> 
  )
}

export default Lessonoverview
