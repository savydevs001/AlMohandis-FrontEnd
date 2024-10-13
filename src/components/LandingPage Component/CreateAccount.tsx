// import React from 'react'
import { NavLink } from 'react-router-dom'
// import logo from '../../assets/FooterLogo.png'
import frame from '../../assets/Frame 106.png'
import CustomNavbar from '../Navbar'
import Footer from '../Footer'

function CreateAccount() {
  return (
<>
<CustomNavbar/>
    <div className='flex flex-col justify-between w-full gap-3 lg:gap-0 p-7 h-fit lg:flex-row'>
      
      <div className='form-data w-full lg:w-[45%] h-fit p-6 bg-[#F7EFE2] rounded-lg '>
          <form  className='flex flex-col space-y-6'>
            <div className='flex flex-col items-center justify-between w-full gap-3 lg:flex-row'>
                  <div className='flex flex-col w-full gap-1'>
                        <label className='font-semibold ' htmlFor="">First Name</label>
                        <input className='py-2 rounded-md px-7' type="text" name="" id=""  placeholder='Enter your First Name' required/>
                  </div>
                  <div className='flex flex-col w-full gap-1'>
                        <label className='font-semibold' htmlFor="">Last Name</label>
                        <input className='py-2 rounded-md px-7' type="text" name="" id=""  placeholder='Enter your Last Name' required/>
                  </div>
            </div>
            <div className='flex flex-col items-center justify-between gap-3 lg:flex-row'>
            <NavLink to="/student" className='py-3 font-semibold text-center text-white rounded-md w-full lg:w-[19vw] bg-primary'>
              As a Student
            </NavLink>
                  <NavLink to={"/guardian"} className=' py-3 font-semibold text-center text-black border rounded-md bg-txtColor border-primary w-full lg:w-[19vw]'>As a Guardian</NavLink>
            </div>
            <div className='flex flex-col gap-2'>
                  <label className='font-semibold' htmlFor="">Phone Number</label>
                  <input  className='w-full py-2 rounded-md'  type="text" placeholder='Enter your Mobile Number' />
            </div>
            <div className='flex flex-col items-center justify-between gap-3 lg:flex-row'>
                  <NavLink to="/verification" className='py-3 font-semibold text-center text-white rounded-md w-full lg:w-[19vw] bg-primary'>Verification Via Text</NavLink>
                  <NavLink to={"/verification"} className=' py-3 font-semibold text-center text-black border rounded-md bg-txtColor border-primary w-full lg:w-[19vw]'>Verification Via Whatsapp</NavLink>
            </div>
            <div className='flex items-center justify-end gap-3 transform -translate-y-5'>
                  <p className='font-semibold text-secondary'>Send Code</p>
                  <p className='font-semibold'>Resend Code</p>
            </div>
            <div className='flex justify-center gap-4 item-center'>
                  <input className='w-12 px-1 py-3 text-center rounded-lg' type="number" disabled />
                  <input className='w-12 px-1 py-3 text-center rounded-lg' type="number" disabled/>
                  <input className='w-12 px-1 py-3 text-center rounded-lg' type="number" disabled/>
                  <input className='w-12 px-1 py-3 text-center rounded-lg' type="number" disabled/>
            </div>
            <div className='flex items-center gap-1'>
                  <input className='w-4 h-4 border-primary' type="checkBox" />
                  <p>I agree to Terms and Condition</p>
            </div>
            <button className='w-full px-4 py-3 text-lg font-semibold rounded-lg bg-primary text-txtColor'>SignUp</button>
            <div className='flex items-center justify-center gap-2'>
                  <p className='text-sm font-semibold'>Already have an account?</p>
                  <NavLink to={"/Login"} className='font-semibold text-primary'>Login</NavLink>
            </div>
            </form>  
      </div>
      <div className='form-data w-full  lg:w-[45%] h-[40%] '>
           <img src={frame} alt="logo" />
      </div>
    </div>
      <Footer/>
</>
  )
}

export default CreateAccount
