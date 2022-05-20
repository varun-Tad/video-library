import { GiHamburgerMenu } from "react-icons/gi";
import { BsDisplay } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import { FaRegUserCircle } from "react-icons/fa";
import { useSidebar } from "../../context/sidebarContext";

import "./navbar.css";

const Navbar = () => {
  const { sidebarState, setSidebarState } = useSidebar();

  const sidebarHandler = () => {
    setSidebarState(!sidebarState);
  };

  return (
    <div className="navbar">
      <div className="left-side-nav">
        <div className="burger-menu-container">
          <GiHamburgerMenu className="burger-menu" onClick={sidebarHandler} />
        </div>
        <div className="logo-name-container">
          <BsDisplay className="logo" />
          <span className="logo-text">Dressvid</span>
        </div>
      </div>

      <div className="search-area">
        <input type="search" placeholder="Search" />
        <button type="button">
          <BsSearch />
        </button>
      </div>

      <div className="signIn-btn-container">
        <button>
          <FaRegUserCircle /> Sign In
        </button>
      </div>
    </div>
  );
};

export default Navbar;
