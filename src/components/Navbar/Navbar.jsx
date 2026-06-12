import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { useCart } from "../../context/CartContext.jsx";
import "./Navbar.css";
import { useAuth } from "../../context/AuthContext.jsx";
import UserIcon from "../../assets/icons/UserIcon.jsx";
import MenuIcon from "../../assets/icons/MenuIcon.jsx";
import CartIcon from "../../assets/icons/CartIcon.jsx";
import Avatar from "../Avatar/Avatar.jsx";
import ThemeToggle from "../ThemeToggle/ThemeToggle.jsx";
import { navLinks } from "../../common/nav-links.js";
import logo from "../../assets/logo.png";
import Menu from "../Menu/Menu.jsx";
function Navbar() {
  const { auth } = useAuth();
  const { totalItems } = useCart();
  const [open, setOpen] = useState(false);

  function closeMenu() {
    setOpen(false);
  }

  return (
    <>
      <header className="navbar">
        <div className="container navbar-inner">
          <Link to="/home" className="logo" onClick={closeMenu}>
            <img src={logo} alt="logo" className="logo-img" />
            <span className="logo-title">NovaTech</span>
          </Link>

          <nav className={`nav-links`}>
            {navLinks.map((item) => (
              <NavLink to={item.href} onClick={closeMenu} key={item.label}>
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="nav-actions">
            <ThemeToggle />
            <Link to="/cart" className="cart-btn" onClick={closeMenu}>
              <CartIcon />
              {totalItems > 0 && (
                <span className="cart-count">{totalItems}</span>
              )}
            </Link>

            {/* Auth section */}
            {auth.isAuthenticated ? (
              <Avatar />
            ) : (
              <>
                <Link to="/signin" className="btn-ghost" onClick={closeMenu}>
                  Sign In
                </Link>
                <Link to="/signup" className="btn-primary" onClick={closeMenu}>
                  Sign Up
                </Link>
              </>
            )}

            <button
              className="menu-toggle"
              aria-label="Toggle menu"
              onClick={() => setOpen(!open)}
            >
              <MenuIcon />
            </button>
          </div>
        </div>
      </header>
      <Menu open={open} close={closeMenu} />
    </>
  );
}

export default Navbar;
