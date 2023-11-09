import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isMenu, setIsMenu] = useState(false);
  return (
    <nav>
      <div className="nav-center">
        <NavLink to="/">
          <span className="logo">MixMaster</span>
        </NavLink>
        <div className="nav-links">
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>
          <NavLink to="/about" className="nav-link">
            About
          </NavLink>
        </div>
        <div
          className="menu-bar"
          onClick={() => {
            console.log(window.innerWidth);
            if (window.innerWidth < 768) {
              setIsMenu((isMenu) => !isMenu);
            }
          }}
        >
          <i className="fa-solid fa-bars"></i>
        </div>
      </div>
      <div
        className="nav-links-menu"
        style={isMenu ? { display: "flex" } : { display: "none" }}
      >
        <NavLink to="/" className="nav-link">
          Home
        </NavLink>
        <NavLink to="/about" className="nav-link">
          About
        </NavLink>
      </div>
    </nav>
  );
};
export default Navbar;
