import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  const [mainData, setMainData] = useState({});

  useEffect(() => {
    const dataFetching = async () => {
      const res = await fetch(`https://jsonplaceholder.typicode.com/posts/`);
      const data = await res.json();
      if (data) {
        setMainData(data);
      }
    };
    dataFetching();
  }, []);

  return (
    <>
      Contact Page
      <div>
        {mainData?.map(({ id, title }) => (
          <Link to={`/contact/${id}`} key={id}>
            <div>
              <h3>{title}</h3>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Contact;
