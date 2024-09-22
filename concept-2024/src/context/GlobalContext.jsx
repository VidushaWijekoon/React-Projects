import { createContext, useState } from "react";

// create the context
export const GlobalContext = createContext(null);

// create the global state that receipe component as a children
const GlobalState = ({ children }) => {
    const [theme, setTheme] = useState("light");

    const handleChangeThemeOnButtonClick = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    return (
        <GlobalContext.Provider
            value={{ theme, handleChangeThemeOnButtonClick }}
        >
            {children}
        </GlobalContext.Provider>
    );
};

export default GlobalState;
