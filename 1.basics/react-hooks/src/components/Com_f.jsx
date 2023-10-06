import { useContext } from "react";
import Com_s from "./Com_s";
import { userAuth } from "../UseContext";

const Com_f = () => {
  const { username } = useContext(userAuth);
  return (
    <>
      <p>Com_f {username}</p>
      <Com_s />
    </>
  );
};

export default Com_f;
