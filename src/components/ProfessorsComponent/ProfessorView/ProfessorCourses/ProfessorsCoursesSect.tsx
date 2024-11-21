// import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProfessorCourseCard from "./ProfessorCourseCard";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";

// Define the types for the arrow props
interface ArrowProps {
  onClick?: () => void;
}

// Custom Arrow Components
const NextArrow: React.FC<ArrowProps> = ({ onClick }) => {
  return (
    <div
      className="absolute right-0 z-10 hidden p-1 text-3xl transform -translate-y-1/2 rounded-full cursor-pointer lg:block -top-6 bg-cardBg"
      onClick={onClick}
      style={{ right: '10px' }}
    >
      <RiArrowRightSLine />
    </div>
  );
};

const PrevArrow: React.FC<ArrowProps> = ({ onClick }) => {
  return (
    <div
      className="absolute left-[90%] z-10 hidden p-1 text-3xl transform -translate-y-1/2 rounded-full cursor-pointer lg:block -top-6 bg-cardBg"
      onClick={onClick}
      style={{ left: '[50px]' }}
    >
      <RiArrowLeftSLine />
    </div>
  );
};

function ProfessorsCoursesSect() {
  // Adjust the slider settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="space-y-3">
      <div className="max-w-[59rem] relative">
        <h3 className="text-3xl font-semibold">Lessons</h3>

        <Slider {...settings} className="w-full mt-6 bg-white">
          <div className="gap-4">
            <ProfessorCourseCard />
          </div>
          <div className="gap-4">
            <ProfessorCourseCard />
          </div>
          <div className="gap-4">
            <ProfessorCourseCard />
          </div>
          <div className="gap-4">
            <ProfessorCourseCard />
          </div>
          <div className="gap-4">
            <ProfessorCourseCard />
          </div>
          <div className="gap-4">
            <ProfessorCourseCard />
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default ProfessorsCoursesSect;
