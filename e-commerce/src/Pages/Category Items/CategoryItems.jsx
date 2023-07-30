import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { categorySelector } from "../../Store/ReduxSlice/categorySlice";
import { IconButton, Rating } from "@mui/material";

const categoryItemArr = [
  {
    imageUrl: "https://wallpaperaccess.com/full/267434.jpg",
    title: "Category title 1",
  },
  {
    imageUrl: "https://wallpaperaccess.com/full/267434.jpg",
    title: "Category title 2",
  },
  {
    imageUrl: "https://wallpaperaccess.com/full/267434.jpg",
    title: "Category title 3",
  },
  {
    imageUrl: "https://wallpaperaccess.com/full/267434.jpg",
    title: "Category title 4",
  },
  {
    imageUrl: "https://wallpaperaccess.com/full/267434.jpg",
    title: "Category title 5",
  },
  {
    imageUrl: "https://wallpaperaccess.com/full/267434.jpg",
    title: "Category title 6",
  },
];

const CategoryItems = () => {
  const category = useSelector(categorySelector);
  console.log(category);
  const { categoryId } = useParams();
  const [categoryTitle] = category.filter((ele) => ele.id === categoryId);

  return (
    <div className="pt-[100px] p-5 w-full h-screen overflow-y-scroll">
      <h1 className="ml-2 mt-2 mb-3 font-bold text-lg">
        {categoryTitle.title}
      </h1>
      <div className="w-full grid grid-cols-3 grid-rows-[auto] gap-4">
        {categoryItemArr.map(({ imageUrl, title }, index) => (
          <CategoryItemUnit key={index} imageUrl={imageUrl} title={title} />
        ))}
      </div>
    </div>
  );
};

export default CategoryItems;

const CategoryItemUnit = ({ imageUrl, title }) => (
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
      className="w-full"
    >
      <img src={imageUrl} alt={title} className="w-full object-contain" />
      <h3 className="w-full inline-block text-left ml-2 text-sm font-bold text-black">
        {title}
      </h3>
      <Rating
        name={imageUrl}
        readOnly
        value={3.5}
        precision={0.1}
        size="small"
      />
    </div>
  </IconButton>
);
