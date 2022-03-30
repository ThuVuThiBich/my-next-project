import React from "react";
import Slider from "react-slick";
import { images } from "../../constants/image";
export default function VerticalMultiSlide() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
  };
  return (
    <div className="mt-5 md:mt-20">
      <Slider {...settings}>
        {images?.map((each, index) => (
          <div
            key={index}
            className="flex h-[180px] w-full justify-center px-2 "
          >
            <img
              src={each}
              alt={""}
              className="mx-auto h-full object-cover shadow-xl"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
