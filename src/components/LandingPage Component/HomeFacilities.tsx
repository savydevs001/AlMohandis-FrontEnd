// import React from 'react'

function HomeFacilities() {
  return (
    <div className='max-w-6xl mx-auto mt-10'>
     <div className='flex flex-col items-center justify-center'>
      <h3 className='text-2xl font-bold leading-relaxed text-tertiary'>How are we different?</h3>
      <p className='text-tertiary w-full  lg:w-[50%] text-center'>At <span className='font-medium text-primary'>Al Mohandes</span> Educational Institution, we are more than just an educational platform. We pride ourselves on offering a unique learning experience that sets us apart from the rest</p>
     </div>


     
     <section className="py-16 text-center lg:px-20">
  <div className="relative flex items-center justify-center mt-10">
    {/* Adjusted Curved SVG Line starting on top of the third card */}
    <svg className="absolute w-full h-92" viewBox="0 0 1200 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ top: '-70px' }}>
      <path d="M200,50 C300,0 400,0 600,100 S800,200 1000,100 1150,50" stroke="#CCCCCC" strokeWidth="2" strokeDasharray="5,5" fill="none"/>
    </svg>

    <div className="relative z-10 flex flex-col justify-between w-full max-w-6xl lg:flex-row">
      {[
        { 
          title: "Best Teachers", 
          desc: "We have high skilled teachers with experience", 
          color: "bg-green-200", 
          icon: "📚", 
          position: "-mt-12 lg:ml-12"  // First card position
        },
        { 
          title: "Best Curriculum", 
          desc: "We have made our structure easy and understandable", 
          color: "bg-yellow-200", 
          icon: "📘", 
          position: "lg:-mt-16 mt-3"   // Second card lower
        },
        { 
          title: "1 to 1 support", 
          desc: "We provide our students the opportunity to interact with teachers", 
          color: "bg-red-200", 
          icon: "👥", 
          position: "mt-4"  // Third card adjusted to be lower, closer to SVG
        },
        { 
          title: "100+ Courses", 
          desc: "We have more than 100+ courses", 
          color: "bg-indigo-200", 
          icon: "🎓", 
          position: "lg:-mt-6 lg:mr-12 mt-3"   // Fourth card slightly lower
        }
      ].map((card, index) => (
        <div key={index} className={`flex flex-col items-center ${card.position}`}>
          <div className={`flex items-center justify-center w-16 h-16 mb-4 rounded-full ${card.color}`}>
            <div className="text-3xl">{card.icon}</div> {/* Icon placeholder */}
          </div>
          <h3 className="font-semibold">{card.title}</h3>
          <p className="mt-2 text-sm text-gray-500 w-44">{card.desc}</p>
        </div>
      ))}
    </div>
  </div>
</section>






    </div>
  )
}

export default HomeFacilities
