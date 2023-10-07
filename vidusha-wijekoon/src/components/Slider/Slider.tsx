// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

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
        <SwiperSlide>
          <img
            src="https://www.weblankan.com/wp-content/uploads/2022/09/website-developer-40-1.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://www.weblankan.com/wp-content/uploads/2022/09/website-developer-40-1.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://www.weblankan.com/wp-content/uploads/2022/09/website-developer-40-1.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://www.weblankan.com/wp-content/uploads/2022/09/website-developer-40-1.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://www.weblankan.com/wp-content/uploads/2022/09/website-developer-40-1.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://www.weblankan.com/wp-content/uploads/2022/09/website-developer-40-1.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://www.weblankan.com/wp-content/uploads/2022/09/website-developer-40-1.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://www.weblankan.com/wp-content/uploads/2022/09/website-developer-40-1.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://www.weblankan.com/wp-content/uploads/2022/09/website-developer-40-1.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://www.weblankan.com/wp-content/uploads/2022/09/website-developer-40-1.png"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
