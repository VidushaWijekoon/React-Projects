import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";

const ContextButtonComponent = () => {
    const { theme, handleChangeThemeOnButtonClick } = useContext(GlobalContext);
    return (
        <button onClick={handleChangeThemeOnButtonClick}>Change Theme</button>
    );
};

export default ContextButtonComponent;
