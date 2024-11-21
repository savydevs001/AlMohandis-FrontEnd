// import React from 'react'

function PrivacyPolicy() {
  return (
    <div>
        <div className='flex flex-col items-center justify-center w-[90%] lg:max-w-xl mx-auto mt-6'>
          <div className='flex flex-col items-center justify-center space-y-3'>
          <h3 className='text-2xl font-bold text-center text-black'>Privacy Policy</h3>
            <p className='text-[#717171]'>At <span className='font-bold text-primary'>ALMUHNDES</span> ALMUHNDES, we are committed to safeguarding the privacy of our users. This Privacy Policy outlines how we collect, use, and protect your information when you use our platform.</p>
          </div>
          <div className='flex flex-col mt-12 space-y-3'>
          <h6 className='text-xl font-semibold text-[#717171]'>1. Information We Collect: </h6>
          <p className='text-[#717171]'>We collect the following types of information:</p>
            <div className='flex flex-col space-y-2'>
            <li className='text-[#717171]'> Personal Information: When you sign up or interact with our services, we may collect personal details such as your name, email address, contact information, and payment details.</li>
            <li className='text-[#717171]'>Usage Data: We collect information on how you access and use our platform, including your IP address, browser type, and usage statistics.</li>
            <li className='text-[#717171]'>Cookies: We use cookies and similar technologies to enhance your user experience, remember your preferences, and track website usage.</li>
            </div>
          </div>
          <div className='flex flex-col mt-12 space-y-3'>
          <h6
           className='text-xl font-semibold text-[#717171]'>2. How We Use Your Information: 
</h6>
            <p className='text-[#717171]'>We use your data to:</p>
            <div className='flex flex-col space-y-2'>
            <li className='text-[#717171]'>Provide and maintain our educational services.</li>
            <li className='text-[#717171]'>Improve our platform's functionality and user experience.</li>
            <li className='text-[#717171]'>Personalize your experience based on your preferences.</li>
            <li className='text-[#717171]'>Process payments and manage subscriptions</li>
            <li className='text-[#717171]'>Communicate with you about updates, courses, and promotional materials.</li>
            </div>
          </div>
          <div className='flex flex-col mt-12 space-y-3'>
          <h6 className='text-xl font-semibold text-[#717171]'>3. Sharing Your Information:</h6>
          <p className='text-[#717171]'>We do not sell your personal data. We may share your information with:</p>
            <div className='flex flex-col space-y-2'>
            <li className='text-[#717171]'> Service Providers: Third-party vendors who help us operate our platform (e.g., payment processors, hosting services).</li>
            <li className='text-[#717171]'>Legal Obligations: When required by law or to protect the rights and safety of our users or platform.</li>
            </div>
          </div>
          <div className='flex flex-col mt-12 space-y-3'>
          <h6 className='text-xl font-semibold text-[#717171]'>4. Data Security:</h6>
          <p className='text-[#717171] text-md'>We take your security seriously. We use industry-standard encryption and              other safeguards to protect your personal information from unauthorized access, alteration, or disclosure.</p>   
          </div>

          <div className='flex flex-col mt-12 mr-32 space-y-3'>
          <h6
           className='text-xl font-semibold text-[#717171]'>5. Your Rights 
</h6>
            <p className='text-[#717171]'>You have the right to:</p>
            <div className='flex flex-col space-y-2'>
            <li className='text-[#717171]'>Access the personal data we hold about you.</li>
            <li className='text-[#717171]'>Request correction of any inaccuracies in your data.</li>
            <li className='text-[#717171]'>Request the deletion of your data, subject to legal obligations.</li>
            <li className='text-[#717171]'>Opt-out of marketing communications at any time.</li>
            {/* <li className='text-[#717171]'>Communicate with you about updates, courses, and promotional materials.</li> */}
            </div>
          </div>
         
          <div className='flex flex-col mt-12 space-y-3'>
          <h6 className='text-xl font-semibold text-[#717171]'>6. Changes to This Privacy Policy:</h6>
            <p className='text-[#717171]'>We may update our Privacy Policy from time to time. Changes will be posted on this page, and the updated version will be effective as soon as it is published.</p>
          </div>
        
          <div className='flex flex-col mt-12 space-y-3'>
          <h3 className='text-xl font-semibold text-[#717171]'>Contact Us</h3>
            <p className='text-[#717171]'>If you have any questions or concerns about this Privacy Policy, please contact us at: 
            [Email Address] <br />[Phone Number] <br />[Physical Address]</p>
          </div>
      </div>
    </div>
  )
}

export default PrivacyPolicy
