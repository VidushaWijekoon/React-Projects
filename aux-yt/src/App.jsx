import { Fragment, useState } from "react";
import Unit from "./components/Unit";
import Header from "./components/Header";

const App = () => {
    const [inputData, setInputData] = useState({
        imageUrl: "",
        name: "",
        city: "",
        position: "",
    });

    console.log(inputData);
    const [myData, setMyData] = useState([]);

    return (
        <Fragment>
            <Header />
            <div className="main__container">
                <div className="main__left">
                    <input
                        type="text"
                        value={inputData.imageUrl}
                        onChange={(e) => {
                            e.preventDefault();
                            setInputData((previousInputData) => ({
                                ...previousInputData,
                                imageUrl: e.target.value,
                            }));
                        }}
                        placeholder="Please Image URL"
                    />
                    <input
                        type="text"
                        value={inputData.name}
                        onChange={(e) => {
                            e.preventDefault();
                            setInputData((previousInputData) => ({
                                ...previousInputData,
                                name: e.target.value,
                            }));
                        }}
                        placeholder="Please Enter Name"
                    />
                    <input
                        type="text"
                        value={inputData.city}
                        onChange={(e) => {
                            e.preventDefault();
                            setInputData((previousInputData) => ({
                                ...previousInputData,
                                city: e.target.value,
                            }));
                        }}
                        placeholder="Please Enter City"
                    />
                    <input
                        type="text"
                        value={inputData.position}
                        onChange={(e) => {
                            e.preventDefault();
                            setInputData((previousInputData) => ({
                                ...previousInputData,
                                position: e.target.value,
                            }));
                        }}
                        placeholder="Please Enter Postion"
                    />
                    <button
                        style={{
                            padding: "7px 15px",
                            backgroundColor: "green",
                            color: "white",
                        }}
                        onClick={() => {
                            setMyData((pre) => [
                                ...pre,
                                {
                                    image: inputData.imageUrl,
                                    name: inputData.name,
                                    city: inputData.city,
                                    position: inputData.position,
                                },
                            ]);
                            setInputData((pre) =>
                                pre.imageUrl.length > 0
                                    ? {
                                          ...pre,
                                          imageUrl: "",
                                      }
                                    : pre
                            );
                            setInputData((pre) =>
                                pre.name.length > 0
                                    ? {
                                          ...pre,
                                          name: "",
                                      }
                                    : pre
                            );
                            setInputData((pre) =>
                                pre.city.length > 0
                                    ? {
                                          ...pre,
                                          city: "",
                                      }
                                    : pre
                            );
                            setInputData((pre) =>
                                pre.position.length > 0
                                    ? {
                                          ...pre,
                                          position: "",
                                      }
                                    : pre
                            );
                        }}
                    >
                        Submit
                    </button>
                </div>
                <div className="main__right">
                    {myData?.map(({ image, name, city, position }, index) => (
                        <Unit
                            key={index}
                            image={image}
                            name={name}
                            city={city}
                            position={position}
                        />
                    ))}
                </div>
            </div>
        </Fragment>
    );
};

export default App;
