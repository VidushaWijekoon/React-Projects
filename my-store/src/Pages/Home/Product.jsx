import { IconButton } from "@mui/material";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "./style.css";

// import required modules
import { Grid, Pagination, Mousewheel, Keyboard } from "swiper/modules";

const productArr = [
  {
    imageUrl:
      "https://wallpapers.com/images/featured/nature-2ygv7ssy2k0lxlzu.jpg",
    price: "100",
    productTitle: "product title 1",
  },
  {
    imageUrl:
      "https://wallpapers.com/images/featured/nature-2ygv7ssy2k0lxlzu.jpg",
    price: "100",
    productTitle: "product title 2",
  },
  {
    imageUrl:
      "https://wallpapers.com/images/featured/nature-2ygv7ssy2k0lxlzu.jpg",
    price: "100",
    productTitle: "product title 3",
  },
  {
    imageUrl:
      "https://wallpapers.com/images/featured/nature-2ygv7ssy2k0lxlzu.jpg",
    price: "100",
    productTitle: "product title 4",
  },
  {
    imageUrl:
      "https://wallpapers.com/images/featured/nature-2ygv7ssy2k0lxlzu.jpg",
    price: "100",
    productTitle: "product title 5",
  },
  {
    imageUrl:
      "https://wallpapers.com/images/featured/nature-2ygv7ssy2k0lxlzu.jpg",
    price: "100",
    productTitle: "product title 6",
  },
  {
    imageUrl:
      "https://wallpapers.com/images/featured/nature-2ygv7ssy2k0lxlzu.jpg",
    price: "100",
    productTitle: "product title 7",
  },
  {
    imageUrl:
      "https://wallpapers.com/images/featured/nature-2ygv7ssy2k0lxlzu.jpg",
    price: "100",
    productTitle: "product title 8",
  },
  {
    imageUrl:
      "https://wallpapers.com/images/featured/nature-2ygv7ssy2k0lxlzu.jpg",
    price: "100",
    productTitle: "product title 9",
  },
  {
    imageUrl:
      "https://wallpapers.com/images/featured/nature-2ygv7ssy2k0lxlzu.jpg",
    price: "100",
    productTitle: "product title 10",
  },
];

const Product = ({ title, rowsCount, slidesPerView }) => {
  return (
    <section className="w-full mt-5">
      <h1 className="text-lg font-bold mb-3">{title}</h1>
      <Swiper
        slidesPerView={Number(slidesPerView)}
        grid={{
          rows: Number(rowsCount),
        }}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        mousewheel={true}
        keyboard={true}
        modules={[Grid, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        {productArr.map(({ imageUrl, price, productTitle }, index) => (
          <SwiperSlide key={index}>
            <ProductUnit
              imageUrl={imageUrl}
              price={price}
              productTitle={productTitle}
              id={index}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Product;

const ProductUnit = ({ imageUrl, price, productTitle, id }) => (
  <IconButton
    sx={{
      padding: "4px",
      borderRadius: "5px",
      margin: "3px",
      marginBottom: "30px",
    }}
  >
    <div className="w-full">
      <img
        src={imageUrl}
        alt={`product_unit ${id}`}
        className="w-full object-contain"
      />
      <h3 className="text-sm font-semibold text-stone-900">{productTitle}</h3>
      <h3 className="text-stone-900 font-bold text-lg">Rs.{price}</h3>
    </div>
  </IconButton>
);
