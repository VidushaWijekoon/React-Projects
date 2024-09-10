import { useState } from "react";
import "./app.css";
import Main from "./Components/Main";
import myData from "./Data/myData";

const pageTitle = "Vidusha React Basic Project";
const appName = "Vidusha Wijekoon React First App";

// import { myData } from "./Data/myData2";
// import { myData2 } from "./Data/myData2";

// const NewBlock = () => {
//   return (
//     <>
//       {myData.map(({ name, city, position, id }) => {
//         return <Main key={id} name={name} city={city} position={position} />;
//       })}
//     </>
//   );
// };

const App = () => {
  // const [myVar, setMyVar] = useState("Please Click the Button to See Amaze");
  const [myVar, setMyVar] = useState({
    name: "Please Click the Button to See Amaze",
    city: "Kandy Sri Lanka",
    position: "React Developer",
  });

  const [myDataState, setMyDataState] = useState(myData);
  const [inputVal, setInputVal] = useState("");

  const clickEvent = () => {
    // setMyVar("Vidusha Wijekoon");
    setMyVar({
      ...myVar,
      name: "Vidusha Wijekoon",
    });
    // console.log(myVar);

    setMyDataState([
      ...myDataState,
      {
        id: 5,
        name: "My Data State Change",
        city: "Sharjah",
        position: "React Native Developer",
        img: "https://i.pinimg.com/736x/3b/a0/a9/3ba0a9a04b63e293c571886b21ff3d28.jpg",
      },
    ]);
  };

  const inputChangeHandler = (event, data) => {
    event.preventDefault();
    console.log(data);
    setInputVal(event.target.value);
  };

  const MainBlock = myDataState.map(
    ({ name, city, position, img, id }, index) => {
      return (
        <Main
          key={index}
          name={name}
          city={city}
          position={position}
          img={img}
        />
      );
    }
  );

  return (
    <>
      <div className="container">
        <div className="w-100 d-flex justify-content-center text-center mb-3">
          <div className="">
            {pageTitle}
            <h1>{pageTitle}</h1>
            <h3>{appName}</h3>
            <p>{inputVal}</p>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row">{MainBlock}</div>
        <button
          style={{
            fontSize: "16px",
            border: "1px solid red",
            backgroundColor: "red",
            color: "white",
          }}
          className="btn btn-sm mt-5 d-flex mx-auto"
          onClick={clickEvent}
        >
          Submnt
        </button>
      </div>

      <div className="container">
        <div className="row m-5">
          <div className="col-md-5">
            <div className="form-group">
              <input
                type="text"
                className="form-control form-control-sm"
                placeholder="Please Type Something"
                onChange={(e) => {
                  e.preventDefault();
                  setInputVal(e.target.value);
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row m-5">
          <div className="col-md-5">
            <div className="form-group">
              <input
                type="text"
                className="form-control form-control-sm"
                placeholder="Please Type Something"
                onChange={(e) => {
                  inputChangeHandler(e, inputVal);
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* <NewBlock /> */}

      {/* <Main name="Vidusha" city="Kandy" position="Web Developer" />
      <Main>
        <h5>Learning Basic React JS</h5>
      </Main>
      <Main name="Vidusha" city="Kandy" position="Software Developer" /> */}
    </>
  );
};

export default App;
