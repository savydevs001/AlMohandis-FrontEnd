// import React from 'react'
import HomeLandingPage from '../../components/LandingPage Component/HomeLandingPage'
import HomeFacilities from '../../components/LandingPage Component/HomeFacilities'
import HomeCourses from '../../components/LandingPage Component/HomeCourses'
import HomeFeatures from '../../components/LandingPage Component/HomeFeatures'
import ReviewSection from '../../components/LandingPage Component/ReviewSection'

function Home() {
  return (
    <div>
     <HomeLandingPage/>
     <HomeFacilities/>
     <HomeCourses/>
     <HomeFeatures/>
     <ReviewSection/>
    </div>
  )
}

export default Home
