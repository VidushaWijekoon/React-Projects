import React, { useEffect, useState } from "react";

const App = () => {
  const [apiID, setApiID] = useState("1");
  const [data, setData] = useState({});
  const [search, setSearch] = useState(0);

  //   console.log(apiID);
  //   console.log(data);

  useEffect(() => {
    console.log("effect start to runing");

    const apiCall = async () => {
      console.log("how many times data running");
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${apiID}`
      );
      const data = await res.json();
      if (data) {
        setData(data);
      }
    };

    if (apiID.length > 0 && Number(apiID) > 0 && Number(apiID) <= 100) {
      console.log("effect start to run after if condition");
      apiCall();
    }

    //   Clean Up Function
    return () => {
      console.log("clean up");
      apiCall();
    };
    // eslint-disable-next-line
  }, [search]);

  return (
    <div>
      <input
        type="text"
        value={apiID}
        onChange={(e) => {
          setApiID(e.target.value);
        }}
        placeholder="Enter ID"
      />
      <button onClick={() => setSearch((pre) => (pre === 0 ? 1 : 0))}>
        Search
      </button>
      {data && (
        <div>
          <h2>{data.title}</h2>
          <p>{data.body}</p>
        </div>
      )}
    </div>
  );
};

export default App;
