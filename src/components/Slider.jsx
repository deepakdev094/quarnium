import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Web3Slider = () => {
  const images = [
    "slide3.jpg",
    "/slide2.jpg"
  ];

  const ArrowBtn = ({ className, onClick, icon }) => (
    <div
      className={`${className} relative text-white text-3xl bg-[#7f5af0aa] hover:bg-[#7f5af0] rounded-full p-2 z-10 transition-all shadow-[0_0_15px_#7f5af0]`}
      onClick={onClick}
    >
      {icon}
    </div>
  );

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    nextArrow: <ArrowBtn icon={<FaChevronRight />} />,
    prevArrow: <ArrowBtn icon={<FaChevronLeft />} />,
  };

  return (
    <div className="w-full z-20  max-w-5xl mx-auto my-10 px-4">
      <Slider {...settings}>
        {images.map((url, i) => (
          <div key={i}>
            <img
              src={url}
              alt={`slide-${i}`}
              className="w-full h-[400px] object-cover rounded-xl shadow-xl"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Web3Slider;
