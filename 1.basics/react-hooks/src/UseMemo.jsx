import { useEffect, useMemo, useState } from "react";

// make app  slow down
const inputHandle = (inputValue) => {
  let data;
  for (let i = 0; i < 1000000; i++) {
    data = i;
  }
  console.log("input handle running");
  return [inputValue, "Vidusha"];
};

const App = () => {
  const [imageUrl, setImageUrl] = useState("");
  const [name, setName] = useState("");
  //   const [imageData, setImageData] = useState("");

  const imageData = useMemo(() => inputHandle(imageUrl), [imageUrl]);
  //   const imageData = inputHandle(imageUrl);

  //   let imageData = "Vidusha";

  const consoleData = (imageData) => {
    console.log(imageData);
  };

  useEffect(() => {
    consoleData(imageData);
  }, [imageData]);

  useMemo(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => response.json())
      .then((json) => console.log(json));
  }, []);

  return (
    <div className="">
      <input
        type="text"
        onChange={(e) => setImageUrl(e.target.value)}
        placeholder="Enter Image Url"
      />
      <input
        type="text"
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter Name"
      />
      <input type="text" placeholder="Enter City" />
      <input type="text" placeholder="Enter Position" />
      <button>Set Data</button>
      <div>
        <p>{imageUrl}</p>
        <p>{name}</p>
        <p>{imageData}</p>
      </div>
    </div>
  );
};

export default App;
