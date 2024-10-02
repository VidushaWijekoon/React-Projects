import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { HiOutlineViewList } from "react-icons/hi";

const Header = () => {
    const [menuClick, setMenuClick] = useState(false);

    return (
        <header className="header__container">
            <h1>Header</h1>
            <nav>
                <ol>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contant</li>
                    <li>Projects</li>
                </ol>
                <HiOutlineViewList
                    className="header__menuClick"
                    style={{
                        width: "30px",
                        cursor: "pointer",
                        fontSize: "35px",
                    }}
                    onClick={() => {
                        setMenuClick((pre) => (!pre ? true : pre));
                    }}
                />
                <ul
                    style={{
                        right: `${menuClick ? "-20px" : "-250px"}`,
                        display: `${menuClick ? "flex" : "none"}`,
                    }}
                >
                    <div className="header__menuClose">
                        <IoMdClose
                            onClick={() =>
                                setMenuClick((pre) => (pre ? false : pre))
                            }
                        />
                    </div>
                    <div className="header__menu">
                        <li>Home</li>
                        <li>About</li>
                        <li>Contant</li>
                        <li>Projects</li>
                    </div>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
