// import React, { useState } from 'react';
import img from '../../../../../../assets/book.webp';
import ChangePassword from './ChangePassword';

function GeneralInformationForm() {


  return (
    <div className="p-3 space-y-4">
      <span className="px-2 py-1 text-xs text-[#FF008C] bg-[#FF47AC4F] rounded-lg">Edit</span>
      <div className="flex items-center justify-between">
        <div className="w-20 h-20 bg-red-400 rounded-full">
          <img className="w-full h-full rounded-full" src={img} alt="" />
        </div>
        <div className="flex flex-col items-start gap-2">
          <button className="px-4 py-1 font-semibold border rounded-md border-primary text-primary">Remove</button>
          <button className="px-4 py-1 font-semibold border rounded-md border-primary text-primary">Freeze</button>
        </div>
      </div>
      <div>
        <span className="px-2 py-1 text-xs text-[#098E02] bg-[#098E0221] rounded-lg">Active</span>
      </div>
      <div className="space-y-2">
        <h6>University of Engineering and Technology</h6>
        <form className="flex flex-col space-y-3">
          {[
            { label: 'Name', placeholder: 'Ahmad', type: 'text' },
            { label: 'ID', placeholder: '20-CS-38', type: 'text' },
            { label: 'Type', placeholder: 'Internal', type: 'text' },
            { label: 'Department', placeholder: 'Computer Science', type: 'text' },
            { label: 'Gender', placeholder: 'Male', type: 'text' },
            { label: 'Enrollment', placeholder: '20-CS-36', type: 'text' },
            { label: 'Email', placeholder: 'Email Address', type: 'email' },
            { label: 'Date of Birth', placeholder: '24-02-2005', type: 'text' },
            { label: 'Phone', placeholder: '+923897902', type: 'text' },
          ].map((field, index) => (
            <div className="flex flex-col items-center gap-2 lg:flex-row lg:gap-8" key={index}>
              <label className="font-semibold text-[#333] lg:w-[15%] w-full" htmlFor={field.label}>{field.label}</label>
              <input
                className="lg:w-[50%] w-full max-w-md py-2 border rounded-lg border-slate-300"
                type={field.type}
                placeholder={field.placeholder}
              />
            </div>
          ))}
        </form>
      </div>

      {/* Change Password Section */}
<div>
      <ChangePassword/>
</div>
    </div>
  );
}

export default GeneralInformationForm;
