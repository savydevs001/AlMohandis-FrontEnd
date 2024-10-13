// import React from 'react'
import { NavLink } from 'react-router-dom'
// import logo from '../../assets/FooterLogo.png'
import frame from '../../assets/LoginImg.png'
import CustomNavbar from '../Navbar'
import Footer from '../Footer'


function Login() {
  return (
<>
<CustomNavbar/>
      <div className='flex flex-col justify-between w-full gap-3 lg:gap-0 p-7 h-fit lg:flex-row'>
            
      <div className='form-data w-full lg:w-[45%] h-fit py-16 px-6 bg-[#F7EFE2] rounded-lg '>
          <form  className='flex flex-col space-y-4'>
            
            <div className='flex flex-col gap-2'>
                  <label className='font-semibold' htmlFor="">Phone Number</label>
                  <input  className='w-full py-2 rounded-md'  type="text" placeholder='Enter your Mobile Number' />
            </div>
          
            <div className='flex items-center justify-end gap-3 transform -translate-y-4'>
                  <p className='font-semibold text-tertiary'>Forget Password</p>
            </div>
          
            <div className='flex flex-col gap-1'>
                  <label className='font-semibold' htmlFor="">Password</label>
                  <input className='w-full rounded-md ' type="password" placeholder='Enter Your Password' />
                 
            </div>
            <button className='w-full px-4 py-3 text-lg font-semibold rounded-lg bg-primary text-txtColor '>Login</button>
            <div className='flex items-center justify-center gap-2'>
                  <p className='text-sm font-semibold'>Already have an account?</p>
                  <NavLink to={"/login"} className='font-semibold text-primary'>SignUp</NavLink>
            </div>
            </form>  
      </div>
      <div className='form-data w-full  lg:w-[45%]'>
           <img className='w-full h-[90%]' src={frame} alt="" />
      </div>
    </div>
      <Footer/>
</>
  )
}

export default Login
