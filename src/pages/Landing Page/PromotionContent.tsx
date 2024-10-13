// import React from 'react'
import PromotionalVideo from '../../components/LandingPage Component/Promotional Content/PromotionalVideo'
import PromotionalReels from '../../components/LandingPage Component/Promotional Content/PromotionalReels'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

function PromotionContent() {
  return (
    <>
    <Navbar/>
    <div className='px-4 py-4 lg:px-10'>
      <h1 className='text-3xl font-bold text-center'>Promotional Content</h1>

      <div className='flex flex-wrap items-center w-full mx-auto lg:gap-6'>
      <PromotionalVideo/>
      <PromotionalVideo/>
      <PromotionalVideo/>
      <PromotionalVideo/>
      <PromotionalVideo/>
      <PromotionalVideo/>
      <PromotionalVideo/>
      <PromotionalVideo/>
      </div>
      <div className='flex flex-wrap w-full lg:gap-8 item-center'>
        <PromotionalReels/>
        <PromotionalReels/>
        <PromotionalReels/>
        <PromotionalReels/>
        <PromotionalReels/>
      </div>
      <div className='flex flex-wrap items-center w-full gap-6 mx-auto'>
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
