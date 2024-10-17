// import React from 'react';
import ReviewBox from './ReviewBox';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ReviewSection() {
  // Adjust the slider settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Show one card at a time
    slidesToScroll: 1, // Scroll one card at a time
    arrows: false, // Enable arrow navigation if you want (optional)
    responsive: [
      {
        breakpoint: 1024, // Adjust the settings for different screen sizes
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className='w-full bg-primary'>
      <div className='max-w-5xl p-6 mx-auto'>
        <h3 className='text-2xl font-semibold text-txtColor'>Our Students Feedback</h3>
        {/* Apply the settings and ensure ReviewBox components are inside */}
        <Slider {...settings} className='w-full'>
          <div className='w-[30%] gap-6'>
            <ReviewBox />
          </div>
          <div className='gap-6 '>
            <ReviewBox />
          </div>
          <div className='gap-6 '>
            <ReviewBox />
          </div>
          <div className='gap-6 '>
            <ReviewBox />
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default ReviewSection;
