import "./loading.css";

const Loading = () => {
  return (
    <div className="relative top-0 left-0 w-screen h-screen flex flex-col gap-2 items-center justify-center bg-white z-[101]">
      <div className="dots"></div>
      Loading
    </div>
  );
};

export default Loading;
