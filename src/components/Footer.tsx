// @ts-ignore
import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/FooterLogo.png'
import { FaFacebookF } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import appleImg from '../assets/apple.png'
import playStoreImg from '../assets/google-play.png'
// import termCondition from './LandingPage Component/TermCondition.tsx'
 
function Footer() {
  return (
    <div className='bg-[#333] w-full mt-8 text-white flex items-center justify-between p-12 flex-wrap'>
      <div>
            <img className='w-[70%]' src={logo} alt="" />
            <div className='flex items-center gap-4 py-5'>
<FaFacebookF className='p-1 text-2xl rounded-lg bg-zinc-700 hover:bg-[#EAA809]'/>
<BsTwitter className='p-1 text-2xl rounded-lg bg-zinc-700 hover:bg-[#EAA809]'/>
<FaYoutube className='p-1 text-2xl rounded-lg bg-zinc-700 hover:bg-[#EAA809]'/>
<RiInstagramFill className='p-1 text-2xl rounded-lg bg-zinc-700 hover:bg-[#EAA809]'/>
            </div>
      </div>
      <div className='flex flex-col items-start gap-2'>
           <NavLink to={'/about'}>About</NavLink>
           <NavLink to={'/contact'}>Contact US</NavLink>
           <NavLink to = {'/termCondition'}>Terms and Conditions</NavLink>
          
      </div>
      <div className='flex flex-col items-start gap-2 mt-4 lg:mt-0'>
           <NavLink to={'/privacyPolicy'}>Privacy Policy</NavLink>
           <NavLink to={'/serviceAggrement'}>Service Agreement</NavLink>
          
          
      </div>
      <div className='mt-4 space-y-3 lg:mt-0'>
            <div className='flex items-center gap-2 p-2 rounded-lg bg-zinc-700'>
                <img className='w-8' src={appleImg} alt="" /> 
                <div><p className='text-[.9vw]'>Download now</p>
                <p>App Store</p>
                </div> 
            </div>
            <div className='flex items-center gap-2 p-2 rounded-lg bg-zinc-700'>
                <img className='w-8' src={playStoreImg} alt="" /> 
                <div><p className='text-[.9vw]'>Download now</p>
                <p>App Store</p>
                </div> 
            </div>
      </div>
      
    </div>
  )
}

export default Footer
