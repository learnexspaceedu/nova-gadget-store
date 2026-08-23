import React from "react";
import "./Menu.css";
import { navLinks } from "../../common/nav-links";
import { NavLink, Link } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";
import { useAuth } from "../../context/AuthContext";
import ThemeToggle from "../ThemeToggle/ThemeToggle.jsx";

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

        {auth.isAuthenticated ? (
          <button
            onClick={() => {
              logout();
              close();
            }}
            className="link-con logout-btn"
          >
            Logout
          </button>
        ) : (
          <>
            <NavLink to="/signin" className="link-con" onClick={close}>
              Sign In
            </NavLink>
            <NavLink to="/signup" className="link-con" onClick={close}>
              Sign Up
            </NavLink>
          </>
        )}
        <ThemeToggle />
      </section>
      <div className={`overlay ${open && "overlay-open"} `} onClick={close} />
    </>
  );
};

export default Menu;
