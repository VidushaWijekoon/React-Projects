import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const User = () => {
    const { id } = useParams();
    const [data, setData] = useState();

    useEffect(() => {
        const getData = async () => {
            const res = await fetch(
                `https://jsonplaceholder.typicode.com/posts/${id}`
            );
            const data = await res.json();
            if (data) {
                setData(data);
            }
            // data ? setData(data) : null;
        };
        getData();
    }, [id]);
    return (
        <>
            {data ? (
                <div className="">
                    <h2>{data.title}</h2>
                    <p>{data.body}</p>
                </div>
            ) : null}
            <Link to={"/contact"}>Back to Contact</Link>
        </>
    );
};

export default User;
