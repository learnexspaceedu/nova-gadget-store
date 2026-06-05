import { Link } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  return (
    <section className="section not-found-section">
      <div className="container">
        <div className="not-found-panel" aria-labelledby="not-found-title">
          <div className="not-found-icon" aria-hidden="true">
            <svg viewBox="0 0 64 64" role="img">
              <path d="M32 14v36" />
              <path d="M14 32h36" />
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
