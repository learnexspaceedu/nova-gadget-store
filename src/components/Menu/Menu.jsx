import React from "react";
import "./Menu.css";
import { navLinks } from "../../common/nav-links";
import { NavLink } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";
import { useAuth } from "../../context/AuthContext";
const Menu = ({ open, close }) => {
  const { theme, toggleTheme } = useTheme();
  const { auth, logout } = useAuth();
  return (
    <>
      <section className={`menu-links-con ${open && "open"} `}>
        <button className="close-btn" onClick={close}>
          X
        </button>
        <h1 className="heading">Nova Tech</h1>
        {navLinks.map((item) => (
          <NavLink
            to={item.href}
            key={item.label}
            className={"link-con"}
            onClick={close}
          >
            {item.label}
          </NavLink>
        ))}

        <button onClick={toggleTheme} className="link-con theme-btn">
          {theme} mode
        </button>
        {auth.isAuthenticated && (
          <button
            onClick={() => {
              logout();
              close();
            }}
            className="link-con logout-btn"
          >
            Logout
          </button>
        )}
      </section>
      <div className={`overlay ${open && "overlay-open"} `} onClick={close} />
    </>
  );
};

export default Menu;
