import { useCallback, useEffect, useState } from "react";

const App = () => {
  const [imageUrl, setImageUrl] = useState("");
  const [name, setName] = useState("");
  const [result, setResult] = useState("");

  const myFunction = useCallback(
    () =>
      (num = 2) => {
        let data = 0;
        for (let i = 0; i < 10; i++) {
          data = Number(data + i + num);
        }
        return Number(data);
      },
    []
  );

  console.log(result);

  useEffect(() => {
    console.log("effect");
    console.log(myFunction(3));
    setResult(myFunction(3));
  }, [myFunction]);

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
      </div>
    </div>
  );
};

export default App;
