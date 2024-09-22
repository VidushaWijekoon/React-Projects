import { Link } from "react-router-dom";
import "./sidebar.scss";

const Sidebar = () => {
    return (
        <nav id="sidebar" className="sidebar">
            <div className="sidebar-content">
                <Link className="sidebar-brand" to="#">
                    <span className="align-middle">React Dashboard</span>
                </Link>

                <ul className="sidebar-nav">
                    <li className="sidebar-header">Pages</li>
                    <li className="sidebar-item active">
                        <a className="sidebar-link" href="index.html">
                            <i className="align-middle" data-feather="sliders"></i>
                            <span className="align-middle">Dashboard</span>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Sidebar;
