import { useRef, useState } from "react";

const App = () => {
  const [myData, setMyData] = useState({
    image: "",
    name: "",
    city: "",
    position: "",
  });
  //   const [name, setName] = useState("");
  const imageUrlRef = useRef();
  const nameRef = useRef();
  const cityRef = useRef();
  const positionRef = useRef();

  console.log("rendering");
  console.log(imageUrlRef.current);
  //   useEffect(() => {
  //     console.log("use Effct");
  //     // setName(imageUrl);
  //     imageUrlRef.current = imageUrl;
  //   });

  const setDataHandle = () => {
    setMyData({
      image: imageUrlRef.current.value,
      name: nameRef.current.value,
      city: cityRef.current.value,
      position: positionRef.current.value,
    });

    nameRef.current.focus();
  };

  return (
    <div className="">
      <input type="text" ref={imageUrlRef} placeholder="Enter Image Url" />
      <input type="text" ref={nameRef} placeholder="Enter Name" />
      <input type="text" ref={cityRef} placeholder="Enter City" />
      <input type="text" ref={positionRef} placeholder="Enter Position" />
      <button onClick={setDataHandle}>Set Data</button>
      <div>
        <p>{myData?.image}</p>
        <p>{myData?.name}</p>
        <p>{myData?.city}</p>
        <p>{myData?.position}</p>
      </div>
    </div>
  );
};

export default App;
