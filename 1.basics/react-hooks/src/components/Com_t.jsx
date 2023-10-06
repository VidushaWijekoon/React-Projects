import { useContext } from "react";
import { userAuth } from "../UseContext";

const Com_t = () => {
  const { setUserame } = useContext(userAuth);
  return (
    <>
      <input
        type="text"
        placeholder="enter the username"
        onChange={(e) => setUserame(e.target.value)}
      />
    </>
  );
};

export default Com_t;
