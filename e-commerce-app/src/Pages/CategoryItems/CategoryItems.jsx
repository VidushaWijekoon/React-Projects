import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { categorySelector } from "../../Store/ReduxSlice/categorySlice";
import { IconButton, Rating } from "@mui/material";

const categoryItemArr = [
  {
    id: 1,
    imageUrl:
      "https://e0.pxfuel.com/wallpapers/966/252/desktop-wallpaper-nature-water.jpg",
    title: "Category Title 1",
  },
  {
    id: 2,
    imageUrl:
      "https://e0.pxfuel.com/wallpapers/966/252/desktop-wallpaper-nature-water.jpg",
    title: "Category Title 2",
  },
  {
    id: 3,
    imageUrl:
      "https://e0.pxfuel.com/wallpapers/966/252/desktop-wallpaper-nature-water.jpg",
    title: "Category Title 3",
  },
  {
    id: 4,
    imageUrl:
      "https://e0.pxfuel.com/wallpapers/966/252/desktop-wallpaper-nature-water.jpg",
    title: "Category Title 4",
  },
  {
    id: 5,
    imageUrl:
      "https://e0.pxfuel.com/wallpapers/966/252/desktop-wallpaper-nature-water.jpg",
    title: "Category Title 5",
  },
];

const CategoryItems = () => {
  const category = useSelector(categorySelector);

  // Page Location
  const { categoryId } = useParams();

  const [categoryTitle] = category.filter((ele) => ele.id === categoryId);

  return (
    <div className="px-5 py-[100px] w-full h-screen overflow-y-scroll">
      <h1 className="ml-2 mb-3 mt-2 font-bold text-xl ">
        {categoryTitle.title}
      </h1>
      <div className="w-full grid grid-cols-3 grid-rows-[auto] gap-4">
        {categoryItemArr.map(({ imageUrl, title }, index) => (
          <CategoryUnitItems key={index} imageUrl={imageUrl} title={title} />
        ))}
      </div>
    </div>
  );
};

export default CategoryItems;

const CategoryUnitItems = ({ imageUrl, title }) => (
  <IconButton
    sx={{
      color: "gray",
      borderRadius: "6px",
      padding: "1px",
    }}
  >
    <div
      style={{
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px ",
      }}
      className="w-full"
    >
      <img src={imageUrl} alt={title} className="w-full object-contain" />
      <h3 className="ml-2 mr-1 inline-block text-sm font-bold text-stone-900">
        {title}
      </h3>
      <Rating
        name={imageUrl}
        value={3.5}
        precision={0.5}
        size="small"
        readOnly
      />
    </div>
  </IconButton>
);
