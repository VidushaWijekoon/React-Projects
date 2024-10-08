import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Contact = () => {
    const [mainData, setMainData] = useState();

    useEffect(() => {
        const dataFetching = async () => {
            const res = await fetch(
                "https://jsonplaceholder.typicode.com/posts"
            );
            const data = await res.json();

            if (data) {
                setMainData(data);
            }
        };
        dataFetching();
    }, []);
    return (
        <div>
            {mainData?.map(({ id, title }, index) => (
                <Link to={`/contact/${id}`} key={index}>
                    <div className="">
                        <h4>{title}</h4>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default Contact;
