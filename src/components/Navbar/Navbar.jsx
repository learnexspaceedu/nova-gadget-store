import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { useCart } from "../../context/CartContext.jsx";
import "./Navbar.css";

function Navbar() {
  const { totalItems } = useCart();
  const [open, setOpen] = useState(false);

  function closeMenu() {
    setOpen(false);
  }

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <Link to="/home" className="logo" onClick={closeMenu}>
          <span className="logo-dot" />
          NovaTech
        </Link>

        <nav className={`nav-links ${open ? "open" : ""}`}>
          <NavLink to="/home" onClick={closeMenu}>Home</NavLink>
          <NavLink to="/shop" onClick={closeMenu}>Shop</NavLink>
          <NavLink to="/categories" onClick={closeMenu}>Categories</NavLink>
          <NavLink to="/about" onClick={closeMenu}>About</NavLink>
          <NavLink to="/contact" onClick={closeMenu}>Contact</NavLink>
        </nav>

        <div className="nav-actions">
          <Link to="/cart" className="cart-btn" onClick={closeMenu}>
            <span className="cart-icon">🛒</span>
            {totalItems > 0 && <span className="cart-count">{totalItems}</span>}
          </Link>
          <Link to="/signin" className="btn-ghost" onClick={closeMenu}>Sign In</Link>
          <Link to="/signup" className="btn-primary" onClick={closeMenu}>Sign Up</Link>

          <button
            className="menu-toggle"
            aria-label="Toggle menu"
            onClick={() => setOpen(!open)}
          >
            ☰
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
