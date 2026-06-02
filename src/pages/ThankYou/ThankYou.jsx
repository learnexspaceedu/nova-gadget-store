import { Link } from "react-router-dom";
import "./ThankYou.css";

function ThankYou() {
  // Generate a fake order number for visual flair.
  const orderNumber = "NT-" + Math.floor(100000 + Math.random() * 900000);

  return (
    <section className="section thank-you-section">
      <div className="container thank-you">
        <div className="check-circle">✓</div>
        <h1>Thank you for your order!</h1>
        <p className="thank-sub">
          Your order has been placed successfully. We've sent a confirmation
          email with all the details.
        </p>

        <div className="order-info">
          <div>
            <span>Order Number</span>
            <strong>{orderNumber}</strong>
          </div>
          <div>
            <span>Estimated Delivery</span>
            <strong>3–5 business days</strong>
          </div>
          <div>
            <span>Payment</span>
            <strong>Card ending ••••</strong>
          </div>
        </div>

        <div className="thank-actions">
          <Link to="/shop" className="btn-primary">Continue Shopping</Link>
          <Link to="/home" className="btn-ghost">Back to Home</Link>
        </div>
      </div>
    </section>
  );
}

export default ThankYou;
