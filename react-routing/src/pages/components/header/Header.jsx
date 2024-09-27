import React from "react";

const Header = () => {
    return (
        <div>
            <header>
                <ul style={{ display: "flex", gap: "15px" }}>
                    <li>Recipe</li>
                    <li>Commnents</li>
                </ul>
            </header>
        </div>
    );
};

export default Header;
