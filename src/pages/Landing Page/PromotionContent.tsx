// import React from 'react'
import PromotionalVideo from '../../components/LandingPageComponent/Promotional Content/PromotionalVideo'
import PromotionalReels from '../../components/LandingPageComponent/Promotional Content/PromotionalReels'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

function PromotionContent() {
  return (
    <>
    <Navbar/>
    <div className='px-4 py-4 lg:px-10'>
      <h1 className='text-3xl font-bold text-center'>Promotional Content</h1>
      <div className='grid grid-cols-1 gap-4 mt-3 md:grid-cols-2 lg:grid-cols-4'>
      <PromotionalVideo/>
      <PromotionalVideo/>
      <PromotionalVideo/>
      <PromotionalVideo/>
      <PromotionalVideo/>
      <PromotionalVideo/>
      <PromotionalVideo/>
      <PromotionalVideo/>
      </div>
      <div className='grid grid-cols-1 gap-4 p-2 mt-3 md:grid-cols-2 lg:grid-cols-5'>
        <PromotionalReels/>
        <PromotionalReels/>
        <PromotionalReels/>
        <PromotionalReels/>
        <PromotionalReels/>
      </div>
      <div className='grid grid-cols-1 gap-4 mt-3 md:grid-cols-2 lg:grid-cols-4'>
      <PromotionalVideo/>
      <PromotionalVideo/>
      <PromotionalVideo/>
      <PromotionalVideo/>
      </div>

    </div>
    <Footer/>
    </>
  )
}

export default PromotionContent
