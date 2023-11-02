// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { IconButton, Rating } from "@mui/material";

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
      "https://e0.pxfuel.com/wallpapers/966/252/desktop-wallpaper-nature-water.jpg",
    price: 100,
    productTitle: "Product Title 1",
  },
  {
    imageUrl:
      "https://e0.pxfuel.com/wallpapers/966/252/desktop-wallpaper-nature-water.jpg",
    price: 100,
    productTitle: "Product Title 2",
  },
  {
    imageUrl:
      "https://e0.pxfuel.com/wallpapers/966/252/desktop-wallpaper-nature-water.jpg",
    price: 100,
    productTitle: "Product Title 3",
  },
  {
    imageUrl:
      "https://e0.pxfuel.com/wallpapers/966/252/desktop-wallpaper-nature-water.jpg",
    price: 100,
    productTitle: "Product Title 4",
  },
  {
    imageUrl:
      "https://e0.pxfuel.com/wallpapers/966/252/desktop-wallpaper-nature-water.jpg",
    price: 100,
    productTitle: "Product Title 5",
  },
  {
    imageUrl:
      "https://e0.pxfuel.com/wallpapers/966/252/desktop-wallpaper-nature-water.jpg",
    price: 100,
    productTitle: "Product Title 6",
  },
  {
    imageUrl:
      "https://e0.pxfuel.com/wallpapers/966/252/desktop-wallpaper-nature-water.jpg",
    price: 100,
    productTitle: "Product Title 7",
  },
  {
    imageUrl:
      "https://e0.pxfuel.com/wallpapers/966/252/desktop-wallpaper-nature-water.jpg",
    price: 100,
    productTitle: "Product Title 8",
  },
  {
    imageUrl:
      "https://e0.pxfuel.com/wallpapers/966/252/desktop-wallpaper-nature-water.jpg",
    price: 100,
    productTitle: "Product Title 9",
  },
];

const Product = ({ title }) => {
  return (
    <section
      style={{
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px ",
      }}
      className="w-full mt-5 p-2 mb-4"
    >
      <h1 className="text-lg font-bold mb-3 mt-2 ml-2">{title}</h1>
      <Swiper
        slidesPerView={3}
        grid={{
          rows: 1,
        }}
        spaceBetween={10}
        mousewheel={true}
        keyboard={true}
        pagination={{
          clickable: true,
        }}
        modules={[Grid, Pagination, Mousewheel, Keyboard]}
      >
        {productArr.map(({ imageUrl, productTitle, price }, index) => (
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
      color: "red",
      margin: "3px",
      marginBottom: "30px",
    }}
  >
    <div className="w-full">
      <img
        src={imageUrl}
        alt={`product_unit_${id}`}
        className="w-full object-contain"
      />
      <h3 className="text-sm font-semibold text-stone-900">{productTitle}</h3>
      <Rating
        name={imageUrl}
        value={3.5}
        precision={0.5}
        size="small"
        readOnly
      />
      <h3 className="text-stone-900 font-bold text-lg">Rs.{price}/-</h3>
    </div>
  </IconButton>
);
