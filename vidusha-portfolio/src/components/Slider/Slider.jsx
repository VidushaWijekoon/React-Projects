// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./slider.css";

// import required modules
import { Pagination } from "swiper/modules";

const sliderImages = [
  {
    id: 1,
    name: "bootstrap",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1280px-Bootstrap_logo.svg.png",
  },
  {
    id: 2,
    name: "tailwind css",
    imageUrl:
      "https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500",
  },
  {
    id: 3,
    name: "javascript",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/768px-JavaScript-logo.png",
  },
  {
    id: 4,
    name: "typescript",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/512px-Typescript_logo_2020.svg.png?20221110153201",
  },
  {
    id: 5,
    name: "reactjs",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
  },
  {
    id: 6,
    name: "nodejs",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/2560px-Node.js_logo.svg.png",
  },
  {
    id: 7,
    name: "php",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/2560px-PHP-logo.svg.png",
  },
  {
    id: 8,
    name: "laravel",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1969px-Laravel.svg.png",
  },
  {
    id: 9,
    name: "php",
    imageUrl:
      "https://i0.wp.com/www.elearningworld.org/wp-content/uploads/2019/04/MySQL.svg.png?fit=600%2C400&ssl=1",
  },
];

export default function Slider() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {sliderImages.map(({ imageUrl, id }, index) => (
          <SwiperSlide key={index}>
            <img src={imageUrl} alt={`id${id}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
