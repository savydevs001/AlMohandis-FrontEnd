// import React from 'react'
import HomeLandingPage from '../../components/LandingPage Component/HomeLandingPage'
import HomeFacilities from '../../components/LandingPage Component/HomeFacilities'
import HomeCourses from '../../components/LandingPage Component/HomeCourses'
import HomeFeatures from '../../components/LandingPage Component/HomeFeatures'
import ReviewSection from '../../components/LandingPage Component/ReviewSection'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'


function Home() {
  return (
    <div>
      <Navbar/>
     <HomeLandingPage/>
     <HomeFacilities/>
     <HomeCourses/>
     <HomeFeatures/>
     <ReviewSection/>
     <Footer/>
    </div>
  )
}

export default Home
