import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { categorySelector } from "../../Store/ReduxSlice/categorySlice";
import { Rating, ListItemButton } from "@mui/material";

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
    <div className="sm:px-12 md:px-[120px] px-5 py-[100px] w-full h-screen overflow-y-scroll">
      <h1 className="text-lg md:text-2xl font-bold mt-2 ml-2 mb-3">
        {categoryTitle.title}
      </h1>
      <div className="w-full grid grid-cols-2 grid-rows-[auto] gap-4 sm:grid-cols-3">
        {categoryItemArr.map(({ imageUrl, title }, index) => (
          <CategoryUnitItems key={index} imageUrl={imageUrl} title={title} />
        ))}
      </div>
    </div>
  );
};

export default CategoryItems;

const CategoryUnitItems = ({ imageUrl, title }) => (
  <ListItemButton
    sx={{
      padding: "0",
      margin: "0",
      boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px ",
      borderRadius: "6px",
    }}
  >
    <div className="w-full mx-1 mb-2 md:mx-2">
      <div className="w-full">
        <img src={imageUrl} alt={title} className="w-full object-contain" />
        <h3 className="text-left text-sm font-bold text-black">{title}</h3>
        <Rating
          name={imageUrl}
          value={3.5}
          precision={0.5}
          size="small"
          readOnly
        />
      </div>
    </div>
  </ListItemButton>
);
