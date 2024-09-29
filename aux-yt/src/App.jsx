import { useState } from "react";
import Unit from "./components/Unit";

const App = () => {
    const [imageUrl, setImageUrl] = useState("");
    const [name, setName] = useState("");
    const [city, setCity] = useState("");
    const [position, setPosition] = useState("");
    const [myData, setMyData] = useState([]);

    console.log(myData);

    return (
        <div className="main__container">
            <div className="main__left">
                <input
                    type="text"
                    value={imageUrl}
                    onChange={(e) => {
                        e.preventDefault();
                        setImageUrl(e.target.value);
                    }}
                />
                <input
                    type="text"
                    value={name}
                    onChange={(e) => {
                        e.preventDefault();
                        setName(e.target.value);
                    }}
                />
                <input
                    type="text"
                    value={city}
                    onChange={(e) => {
                        e.preventDefault();
                        setCity(e.target.value);
                    }}
                />
                <input
                    type="text"
                    value={position}
                    onChange={(e) => {
                        e.preventDefault();
                        setPosition(e.target.value);
                    }}
                />
                <button
                    onClick={() => {
                        setMyData((pre) => [
                            ...pre,
                            {
                                image: imageUrl,
                                name,
                                city,
                                position,
                            },
                        ]);
                        setImageUrl((pre) => (pre.length > 0 ? "" : pre));
                        setName((pre) => (pre.length > 0 ? "" : pre));
                        setCity((pre) => (pre.length > 0 ? "" : pre));
                        setPosition((pre) => (pre.length > 0 ? "" : pre));
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
    );
};

export default App;
