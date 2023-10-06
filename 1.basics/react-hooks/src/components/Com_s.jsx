import { useContext } from "react";
import Com_t from "./Com_t";
import { userAuth } from "../UseContext";

const Com_s = () => {
  const { username } = useContext(userAuth);
  return (
    <>
      <p>Com_f {username}</p>
      <Com_t />
    </>
  );
};

export default Com_s;
