import { Link } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  return (
    <section className="section not-found-section">
      <div className="container">
        <div className="not-found-panel" aria-labelledby="not-found-title">
          <div className="not-found-icon" aria-hidden="true">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="80"
              height="80"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M8 8V6a4 4 0 0 1 8 0v2" />
              <rect x="4" y="8" width="16" height="14" rx="2" />
              <path d="M10 14a3 3 0 1 0 4 0" />
              <path d="M12 12v3" />
            </svg>
          </div>

          <p className="not-found-code">404</p>
          <h1 id="not-found-title">Page not found</h1>
          <p className="not-found-description">
            The Nova tech gadget page you are looking for is unavailable or has
            been moved. Return home or continue browsing the latest gear.
          </p>

          <div className="not-found-actions">
            <Link to="/home" className="not-found-primary">
              Back to Home
            </Link>
            <Link to="/shop" className="not-found-secondary">
              Browse Gadgets
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
