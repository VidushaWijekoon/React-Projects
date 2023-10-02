import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const adsElement = [
  {
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRFUR6CMpA6Dqxx-SEaYdTUUSwEBWBJgSCqA&usqp=CAU",
  },
  {
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRFUR6CMpA6Dqxx-SEaYdTUUSwEBWBJgSCqA&usqp=CAU",
  },
  {
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRFUR6CMpA6Dqxx-SEaYdTUUSwEBWBJgSCqA&usqp=CAU",
  },
  {
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRFUR6CMpA6Dqxx-SEaYdTUUSwEBWBJgSCqA&usqp=CAU",
  },
  {
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRFUR6CMpA6Dqxx-SEaYdTUUSwEBWBJgSCqA&usqp=CAU",
  },
];

const Ads = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay]}
        className="rounded-lg overflow-hidden"
      >
        {adsElement.map(({ imageUrl }, index) => (
          <SwiperSlide key={index}>
            <AdUnit imageUrl={imageUrl} id={index} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Ads;

const AdUnit = ({ imageUrl, id }) => (
  <SwiperSlide>
    <img
      src={imageUrl}
      alt={`ad-${id}`}
      className="w-full object-contain rounded-lg"
    />
  </SwiperSlide>
);
