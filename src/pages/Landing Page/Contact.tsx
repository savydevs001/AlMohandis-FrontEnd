// import React from 'react'
import { PiPhoneCallFill } from "react-icons/pi";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import CustomNavbar from "../../components/Navbar";
import Footer from "../../components/Footer";


function Contact() {
  return (
    <div className='w-full h-fit '>
<CustomNavbar/>
      
     <center className='mt-12'>
     <h1 className='text-3xl font-bold'>Contact Us</h1>
     <p className='text-paraColor'>Any question or remarks? Just write us a message!</p>
     </center>
     <div className='flex flex-col max-w-6xl p-4 mx-auto mt-12 bg-neutral-100 h-fit lg:flex-row' >
<div className='bg-primary w-full lg:w-[40%] text-white'>
  <div className='p-8 space-y-3'>
    <h3 className='text-2xl font-semibold text-txtColor'>Contact Information</h3>
    <p className=' text-[#C9C9C9]'>Say something to start a live chat!</p>
  </div>
  <div className='flex flex-col px-6 py-12 space-y-8'>
    <div className='flex items-center gap-4'>
    <PiPhoneCallFill className='text-xl font-bold' />
    <p>+1012 3456 789</p>
    </div>
    <div className='flex items-center gap-4'>
    <MdEmail className='text-xl font-bold'  />
    <p>abc@xyz.com</p>
    </div>
    <div className='flex items-center gap-4'>
    <FaLocationDot className='text-xl font-bold' />
    <p>ABC Street, XYZ City</p>
    </div>
  </div>
  <div>

  </div>
</div>
<div className='p-4 lg:p-8 w-full lg:w-[60%]'>
  <form action="" className='space-y-8 '>
  <div className='flex flex-col items-center justify-between w-full gap-6 lg:gap-4 lg:flex-row'>
                  <div className='flex flex-col w-full gap-1'>
                        <label className='text-sm ' htmlFor="">First Name</label>
                        <input className='border-neutral-100 py-2 px-0  text-sm bg-neutral-100 outline-none border-b border-b-black w-[100%]' type="text" name="" id=""  placeholder='Enter your First Name' required/>
                  </div>
                  <div className='flex flex-col w-full gap-2 space-x-2'>
                        <label className='text-sm' htmlFor="">Last Name</label>
                        <input className='border-neutral-100 py-2 px-0   bg-neutral-100 text-sm outline-none border-b border-b-black w-[100%]' type="text" name="" id=""  placeholder='Enter your Last Name' required/>
                  </div>
            </div>
  <div className='flex flex-col items-center justify-between w-full gap-6 lg:gap-3 lg:flex-row'>
                  <div className='flex flex-col w-full gap-1'>
                        <label className='text-sm ' htmlFor="">Email</label>
                        <input className='border-neutral-100 py-2 px-0 bg-neutral-100 text-sm outline-none border-b border-b-black w-[100%]' type="email" name="" id=""  placeholder='Enter your Email' required/>
                  </div>
                  <div className='flex flex-col w-full gap-2 space-x-2'>
                        <label className='text-sm' htmlFor="">Phone Number</label>
                        <input className='border-neutral-100 py-2 px-0 bg-neutral-100 outline-none border-b border-b-black w-[100%] text-sm' type="text" name="" id=""  placeholder='+9278575687' required/>
                  </div>
            </div>
<div className='space-y-3'>
  <h5 className='font-semibold'>Select Subject?</h5>
  <div className='flex flex-wrap items-center gap-5 p-1'>
 
  <div className='flex items-center gap-3'>
    <input type="checkbox" className='w-3 h-3 rounded-full text-primary' />
    <p className='text-[2.1vw] lg:text-[1vw]'>General Inquiry</p>
  </div>
  <div className='flex items-center gap-3'>
    <input type="checkbox" className='w-3 h-3 rounded-full text-primary' />
    <p className='text-[2.1vw] lg:text-[1vw]'>General Inquiry</p>
  </div>
  <div className='flex items-center gap-3'>
    <input type="checkbox" className='w-3 h-3 rounded-full text-primary' />
    <p className='text-[2.1vw] lg:text-[1vw]'>General Inquiry</p>
  </div>
  <div className='flex items-center gap-3'>
    <input type="checkbox" className='w-3 h-3 rounded-full text-primary' />
    <p className='text-[2.1vw] lg:text-[1vw]'>General Inquiry</p>
  </div>
  </div>
</div>

<div className='flex flex-col'>
  <label className='text-sm' htmlFor="">Message</label>
<textarea className='px-0 py-2 text-sm border-b outline-none border-neutral-100 border-b-black bg-neutral-100' name="" id="" placeholder='Write your Message.....'></textarea>
</div>
<div className='flex justify-end item-center'>
<button className='px-6 py-2 font-semibold text-white rounded-md bg-primary'>Send Message</button>
</div>
  </form>
</div>
     </div>

     <Footer/>
    </div>
  )
}

export default Contact
