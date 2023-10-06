import { useState, createContext } from "react";
import Com_f from "./components/Com_f";

export const userAuth = createContext({});

const App = () => {
  const [username, setUserame] = useState("");

  return (
    <userAuth.Provider value={{ username, setUserame }}>
      <h1>App {username}</h1>
      <Com_f />
    </userAuth.Provider>
  );
};

export default App;
