import React from "react";
import style from "./loading.module.css";

const Loading = () => {
  return (
    <div className="relative top-0 left-0 w-screen h-screen gap-10 flex flex-col items-center justify-center bg-white z-[101]">
      <div class={style.loading_spinner}></div>
      Loading
    </div>
  );
};

export default Loading;
