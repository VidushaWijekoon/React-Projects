import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// import required modules
import { Autoplay } from "swiper";

const adsElement = [
  {
    imageUrl:
      "https://wallpapers.com/images/featured/nature-2ygv7ssy2k0lxlzu.jpg",
  },
  {
    imageUrl:
      "https://wallpapers.com/images/featured/nature-2ygv7ssy2k0lxlzu.jpg",
  },
  {
    imageUrl:
      "https://wallpapers.com/images/featured/nature-2ygv7ssy2k0lxlzu.jpg",
  },
  {
    imageUrl:
      "https://wallpapers.com/images/featured/nature-2ygv7ssy2k0lxlzu.jpg",
  },
  {
    imageUrl:
      "https://wallpapers.com/images/featured/nature-2ygv7ssy2k0lxlzu.jpg",
  },
];

const Ads = () => {
  return (
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
  );
};

export default Ads;

const AdUnit = ({ imageUrl, id }) => (
  <SwiperSlide>
    <img
      src={imageUrl}
      alt={`id${id}`}
      className="w-full object-contain rounded-lg"
    />
  </SwiperSlide>
);
