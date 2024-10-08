import { useEffect, useState } from "react";

const App = () => {
    const [appId, setAppId] = useState("1");
    const [data, setData] = useState({});
    const [search, setSearch] = useState(1);

    useEffect(() => {
        if (appId > 0) {
            const apiCall = async () => {
                const res = await fetch(
                    `https://jsonplaceholder.typicode.com/posts/${appId}`
                );
                const data = await res.json();

                if (data) {
                    setData(data);
                }
            };

            if (Number(appId) > 0 && Number(appId) <= 100) {
                apiCall();
            }
        }

        // return () => {
        //     console.log("Clean Up");
        //     apiCall();
        // };

        //eslint-disable-next-line
    }, [search]);

    return (
        <div>
            <input
                style={{ border: "1px solid red" }}
                type="text"
                value={appId}
                onChange={(e) => {
                    e.preventDefault();
                    setAppId(e.target.value);
                }}
                placeholder="enter ID"
            />
            <button onClick={() => setSearch((pre) => (pre === 0 ? 1 : 0))}>
                Search
            </button>
            {data && (
                <div className="">
                    <h2>{data.title}</h2>
                    <p>{data.body}</p>
                </div>
            )}
        </div>
    );
};

export default App;
