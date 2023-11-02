import { useRef } from "react";
import { IconButton } from "@mui/material";

const itemImageArr = [
  "https://e0.pxfuel.com/wallpapers/966/252/desktop-wallpaper-nature-water.jpg",
  "https://e0.pxfuel.com/wallpapers/966/252/desktop-wallpaper-nature-water.jpg",
  "https://e0.pxfuel.com/wallpapers/966/252/desktop-wallpaper-nature-water.jpg",
  "https://wallpapers.com/images/featured/nature-2ygv7ssy2k0lxlzu.jpg",
];

const ItemPage = () => {
  const mainImageRef = useRef();
  const subImagesRef = useRef([]);

  return (
    <div className="px-5 py-[100px] w-full h-screen overflow-y-scroll">
      <h1 className="text-lg font-bold px-3 mb-7">Item Title</h1>
      <img
        ref={mainImageRef}
        src={itemImageArr[0]}
        alt="main item"
        className="w-full object-contain rounded-md"
      />
      <div className="w-full mt-5 grid grid-cols-4 text-center grid-rows-1 gap-3">
        {itemImageArr.map((ele, index) => (
          <IconButton
            sx={{
              padding: "0px",
              borderRadius: "2px",
            }}
            onClick={() => {
              subImagesRef.current[index].style.border = "2px solid gold";
              mainImageRef.current.src = subImagesRef.current[index].src;
              for (let i = 0; i < itemImageArr.length; i++) {
                if (i !== index) {
                  subImagesRef.current[i].style.border = "none";
                }
              }
            }}
            key={index}
          >
            <img
              ref={(refEle) => (subImagesRef.current[index] = refEle)}
              name={`item name ref : ${index}`}
              src={ele}
              alt={ele}
              className="w-full object-contain rounded-sm "
            />
          </IconButton>
        ))}
      </div>
    </div>
  );
};

export default ItemPage;
