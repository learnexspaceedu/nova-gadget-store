import { Link } from "react-router-dom";
import "./Footer.css";
import { useAuth } from "../../context/AuthContext.jsx";

function Footer() {
  const { logout } = useAuth();
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <Link to="/home" className="footer-logo">
            <span className="logo-dot" />
            NovaTech
          </Link>
          <p className="footer-text">
            Premium tech gadgets for creators, gamers and everyday explorers.
          </p>
        </div>

        <div>
          <h4>Shop</h4>
          <ul>
            <li>
              <Link to="/shop">All Products</Link>
            </li>
            <li>
              <Link to="/categories">Categories</Link>
            </li>
            <li>
              <Link to="/cart">Cart</Link>
            </li>
          </ul>
        </div>

        <div>
          <h4>Company</h4>
          <ul>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        <div>
          <h4>Account</h4>
          <ul>
            <li>
              <Link to="/signin">Sign In</Link>
            </li>
            <li>
              <Link to="/signup">Sign Up</Link>
            </li>
            <li>
              <button onClick={() => logout()} className="logout-btn">
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
