// import React from 'react'

import UserManagementHeader from "../UserManagementComponent/UserManagementHeader"
import AdminLandindKeyFeatures from "./AdminLandindKeyFeatures"
import AdminLandingFeatures from "./AdminLandingFeatures"
import AdminLandingHeroPage from "./AdminLandingHeroPage"
import AdminLandingPopularCourse from "./AdminLandingPopularCourse"
import AdminLandingReviews from "./AdminLandingReviews"
import LandingPageBtns from "./LandingPageBtns"

function AdminLandingPage() {
  return (
    <div className="flex-1 space-y-8">
      <UserManagementHeader title="Landing Page"/>
            <LandingPageBtns/>
      <div>
            <AdminLandingHeroPage />
            <AdminLandingFeatures/>
            <AdminLandingPopularCourse/>
            <AdminLandindKeyFeatures/>
            <AdminLandingReviews/>
      </div>
      
    </div>
  )
}

export default AdminLandingPage
