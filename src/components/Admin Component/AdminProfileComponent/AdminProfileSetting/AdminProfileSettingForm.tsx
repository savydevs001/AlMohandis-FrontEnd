// import React, { useState } from 'react';
import img from '../../../../assets/book.webp';
import ChangePassword from '../../UserManagementComponent/StudentComponents/AdminStudentInformation/StudentGeneralInformation/ChangePassword';

function AdminProfileSettingForm() {
  return (
    <div className="p-6 space-y-2">
      {/* Profile Picture Section */}
      <div className="flex items-center">
        <div className="flex w-20 h-20 gap-4 bg-red-400 rounded-full">
          <img className="w-full h-full rounded-full" src={img} alt="Profile" />
          <span className="px-2 py-1 text-sm border-b border-black h-fit w-fit">Change</span>
        </div>
      </div>

      {/* Name Section */}
      <div>
        <h1 className="text-xl font-semibold">Ahmad Ali</h1>
      </div>

      {/* Information Form Section */}
      <div className="space-y-2">
        <h6>University of Engineering and Technology</h6>
        <form className="flex flex-col space-y-3">
          {[
            { placeholder: 'ahmadali@gmail.com', type: 'email', button: 'Edit' },
            { placeholder: 'System Administrator', type: 'text', button: 'Edit' },
            { placeholder: '+923897902', type: 'text', button: 'Edit' },
          ].map((field, index) => (
            <div className="flex items-center gap-2 lg:flex-row lg:gap-2" key={index}>
              <input
                className="lg:w-[50%] w-[90%] max-w-md py-1 border rounded-lg border-slate-300"
                type={field.type}
                placeholder={field.placeholder}
              />
              <button className="border-b border-black ">
                {field.button}
              </button>
            </div>
          ))}
        </form>
      </div>

      {/* Change Password Section */}
      <div>
        <ChangePassword />
      </div>
    </div>
  );
}

export default AdminProfileSettingForm;
