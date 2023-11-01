// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay } from "swiper/modules";

const adsElement = [
  {
    imageUrl:
      "https://e0.pxfuel.com/wallpapers/966/252/desktop-wallpaper-nature-water.jpg",
  },
  {
    imageUrl:
      "https://e0.pxfuel.com/wallpapers/966/252/desktop-wallpaper-nature-water.jpg",
  },
  {
    imageUrl:
      "https://e0.pxfuel.com/wallpapers/966/252/desktop-wallpaper-nature-water.jpg",
  },
  {
    imageUrl:
      "https://e0.pxfuel.com/wallpapers/966/252/desktop-wallpaper-nature-water.jpg",
  },
  {
    imageUrl:
      "https://e0.pxfuel.com/wallpapers/966/252/desktop-wallpaper-nature-water.jpg",
  },
  {
    imageUrl:
      "https://e0.pxfuel.com/wallpapers/966/252/desktop-wallpaper-nature-water.jpg",
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
        modules={[Autoplay]}
        className="rounded-lg overflow-hidden"
      >
        {adsElement.map(({ imageUrl }, index) => (
          <SwiperSlide key={index}>
            <AdUnit key={index} imageUrl={imageUrl} id={index} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Ads;

const AdUnit = ({ imageUrl, id }) => (
  <img
    src={imageUrl}
    alt={`ad${id}`}
    className="w-full object-contain rounded-lg"
  />
);
