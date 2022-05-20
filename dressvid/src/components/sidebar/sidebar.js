import { Link } from "react-router-dom";
import { SidebarData } from "./sidebar.data";
import "./sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      {SidebarData.map((ele, index) => {
        return (
          <div key={index} className="sideBar-text">
            <Link className="sidebar-link" to={ele.path}>
              {ele.icon} <span className="sidebar-title">{ele.title}</span>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Sidebar;
