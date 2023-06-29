import { IconButton } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const categoryArr = [
  {
    imageUrl: "https://wallpaperaccess.com/full/267434.jpg",
    title: "Category title 1",
    categoryId: "category1",
  },
  {
    imageUrl: "https://wallpaperaccess.com/full/267434.jpg",
    title: "Category title 2",
    categoryId: "category1",
  },
  {
    imageUrl: "https://wallpaperaccess.com/full/267434.jpg",
    title: "Category title 3",
    categoryId: "category1",
  },
  {
    imageUrl: "https://wallpaperaccess.com/full/267434.jpg",
    title: "Category title 4",
    categoryId: "category1",
  },
  {
    imageUrl: "https://wallpaperaccess.com/full/267434.jpg",
    title: "Category title 5",
    categoryId: "category1",
  },
  {
    imageUrl: "https://wallpaperaccess.com/full/267434.jpg",
    title: "Category title 6",
    categoryId: "category1",
  },
];

const Category = () => {
  return (
    <div className="pt-[100px] p-5 w-full h-screen overflow-y-scroll">
      <section>
        <div
          style={{
            boxShadow: "rgba(0, 0, 0, 0.24)0px 3px 8px",
          }}
          className="w-full p-2"
        >
          <h1 className="text-lg font-bold mt-2 ml-2 mb-3">Main Categories</h1>
          <div className="grid grid-cols-3 grid-rows-[auto] gap-5">
            {categoryArr.map(({ imageUrl, title, categoryId }, index) => (
              <CategoryItems
                key={index}
                imageUrl={imageUrl}
                title={title}
                id={index}
                categoryId={categoryId}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Category;

const CategoryItems = ({ imageUrl, title, index, categoryId }) => (
  <Link to={`/category/${categoryId}`}>
    <IconButton
      sx={{
        color: "gray",
        padding: "1px",
        borderRadius: "6px",
      }}
    >
      <div
        style={{
          boxShadow: "rgba(0, 0, 0, 0.24)0px 3px 8px",
        }}
        className="m-1 w-full py-6 px-3 rounded-md border-2 flex flex-col items-center"
      >
        <img
          src={imageUrl}
          alt={`category title ${index}`}
          className="rounded-full w-[50px] h-[50px]"
        />
        <h2 className="text-[10px] text-black font-bold mt-3">{title}</h2>
      </div>
    </IconButton>
  </Link>
);
