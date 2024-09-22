import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";

const ContextTextComponent = () => {
    const { theme } = useContext(GlobalContext);
    return (
        <h1
            style={{
                fontSize: theme === "light" ? "50px" : "100px",
                backgroundColor: theme === "light" ? "#fff" : "#000",
                color: theme === "light" ? "blue" : "orange",
            }}
        >
            Vidusha Wijekoon
        </h1>
    );
};

export default ContextTextComponent;
