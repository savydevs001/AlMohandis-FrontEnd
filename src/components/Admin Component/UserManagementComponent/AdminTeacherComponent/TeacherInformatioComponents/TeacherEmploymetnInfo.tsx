// import React from 'react'

function TeacherEmploymetnInfo() {
      return (
          <div className="flex flex-col items-center bg-white border rounded-md lg:flex-row">
          <div className="lg:w-[30%] w-full">
           <h1 className="text-lg font-semibold text-center">Employment Information</h1>
          </div>
          <div className="lg:w-[70%] w-full border p-4">
     {/* <GeneralInformationForm/> */}
     <form className="flex flex-col space-y-3">
              {[
                    { label: 'Joining', placeholder: '20-04-2022', type: 'text' },
                { label: 'Level', placeholder: 'Professor', type: 'text' },
                { label: 'Department', placeholder: 'CS', type: 'text' },
                { label: 'EmployeeStatus', placeholder: 'Active', type: 'text' },
                { label: 'Experience', placeholder: '4 Year', type: 'text' }
              ].map((field, index) => (
                <div className="flex flex-col gap-2 lg:items-center lg:gap-8 lg:flex-row" key={index}>
                  <label className="font-semibold text-[#333] lg:w-[15%]" htmlFor={field.label}>{field.label}</label>
                  <input
                    className="lg:w-[50%] w-full max-w-md py-2 border rounded-lg border-slate-300"
                    type={field.type}
                    placeholder={field.placeholder}
                  />
                </div>
              ))}
            </form>
          </div>
         </div>
      )
    }
    
    export default TeacherEmploymetnInfo
    


