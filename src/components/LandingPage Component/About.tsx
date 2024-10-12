// import React from 'react'

function About() {
  return (
    <div>
      <div className='flex items-center justify-center w-full p-8 text-center iten h-60 bg-primary'>
            <h3 className='text-3xl font-semibold text-neutral-50 w-full lg:w-[65%] leading-0'>Empowering Learners Everywhere with Innovative, World-Class Education.</h3>
      </div>
      <div className='flex flex-col items-center justify-center w-[90%] lg:max-w-xl mx-auto mt-6'>
          <div className='flex flex-col items-center justify-center space-y-3'>
          <h3 className='text-2xl font-semibold text-center text-black'>About</h3>
            <p className='text-[#717171]'>At Al Mohandes Educational Institution, our mission is to empower learners and educators with the tools and support they need to succeed. We are dedicated to creating a dynamic, interactive, and accessible learning environment that fosters growth, innovation, and collaboration.
            With years of experience in the field of education, we pride ourselves on delivering high-quality programs tailored to meet the diverse needs of our students. Our courses are designed by industry experts, ensuring that learners are equipped with practical skills and knowledge that are relevant in today’s ever-evolving world.</p>
          </div>
          <div className='flex flex-col items-center justify-center mt-12 space-y-3'>
          <h3 className='text-2xl font-semibold text-center text-black'>our Vision</h3>
            <p className='text-[#717171]'>We envision a world where education is accessible, personalized, and innovative, helping every student reach their fullest potential.</p>
          </div>
          <div className='flex flex-col items-center justify-center mt-12 space-y-3'>
          <h3 className='text-2xl font-semibold text-center text-black'>our Mission</h3>
            <p className='text-[#717171]'>Our mission is to provide top-tier education and continuous support, enabling students to thrive academically and professionally in a competitive global landscape.</p>
          </div>
          <div className='flex flex-col items-center justify-center mt-12 space-y-3'>
          <h3 className='text-2xl font-semibold text-center text-black'>Why Choose Us?</h3>
            <div className='flex flex-col space-y-2'>
            <li className='text-[#717171]'><span className='text-tertiary'>Experienced Educators: </span> Learn from professionals with real-world experience.</li>
            <li><span>Cutting-Edge Tools: </span> Benefit from interactive lessons, live lectures, and AI-powered analytics.</li>
            <li className='text-[#717171]'><span className='text-tertiary'>Supportive Environment:</span> Learn from professionals with real-world experience.</li>
            <li className='text-[#717171]'><span className='text-tertiary'>Flexible Learning:</span> Our programs are tailored to fit the unique needs of each learner, allowing for progress at your own pace.</li>
            <li className='text-[#717171]'><span className='text-tertiary'>Career-Focused:</span> We equip students with the skills and knowledge necessary for success in their future careers.</li>
            </div>
          </div>
          <div className='flex flex-col items-center justify-center mt-12 space-y-3'>
          <h3 className='text-2xl font-semibold text-center text-black'>Join Us</h3>
            <p className='text-[#717171]'>Be part of a community that is committed to your success. Whether you’re a student aiming to excel academically or an educator looking to make a difference, Al Mohandes Educational Institution is here to support you every step of the way.</p>
          </div>
      </div>
    </div>
  )
}

export default About
