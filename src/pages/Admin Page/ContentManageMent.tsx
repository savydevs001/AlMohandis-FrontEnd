// import React from 'react'

import { Route, Routes } from "react-router-dom";
import AdminSidebar from "../../components/Admin Component/AdminSidebar";
import AdminLandingPage from "../../components/Admin Component/Landing/AdminLandingPage";
import AdminAboutUS from "../../components/Admin Component/AboutUs/AdminAboutUS";

import AdminPrivacyPolicy from "../../components/Admin Component/Privacy/AdminPrivacyPolicy";
import AdminTermsConidtion from "../../components/Admin Component/AdminTermsComp/TermsConidtion";
import AdminServiceAgrement from "../../components/Admin Component/ServiceAgrement/ServiceAgrement";
import AdminContectUs from "../../components/Admin Component/ContactUs/AdminContectUs";

function ContentManageMent() {
  return (
      <div className="flex flex-col min-h-screen lg:flex-row">
      <AdminSidebar/>
      <div className="flex-1 w-[90%] lg:p-6 lg:flex bg-gray-50 mt-3 lg:mt-0 mx-auto">
        {/* <StudentCardContent /> */}
      {/* <UserManagementComponentPages /> */}
     <Routes>
<Route path="/" element={<AdminLandingPage/>}/>      
<Route path="AdminAboutUs" element={<AdminAboutUS/>}/>      
<Route path="AdminContactUs" element={<AdminContectUs/>}/>      
<Route path="AdminPrivacyPolicy" element={<AdminPrivacyPolicy/>}/>      
<Route path="AdminTermsConditions" element={<AdminTermsConidtion/>}/>      
<Route path="AdminServiceAgrement" element={<AdminServiceAgrement/>}/>      
     </Routes>
      </div>
    </div>
  )
}

export default ContentManageMent
