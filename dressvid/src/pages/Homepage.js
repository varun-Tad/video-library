import Sidebar from "../components/sidebar/sidebar";
import Navbar from "../components/navbar/navbar";
import { useSidebar } from "../context/sidebarContext";

import "./Homepage.css";

const Homepage = () => {
  const { sidebarState } = useSidebar();
  return (
    <div className="home">
      <Navbar className="nav" />
      <div className="fl">
        {sidebarState && <Sidebar className="side" />}
        <div className="fl-1">
          <h1>Hello</h1>
          <h1>Hello</h1>
          <h1>Hello</h1>
          <h1>Hello</h1>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
