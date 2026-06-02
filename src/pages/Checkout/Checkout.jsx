import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useCart } from "../../context/CartContext.jsx";
import "./Checkout.css";

function Checkout() {
  const navigate = useNavigate();
  const { cartItems, totalPrice, clearCart } = useCart();
  const shipping = totalPrice > 99 || totalPrice === 0 ? 0 : 9.99;
  const total = totalPrice + shipping;

  const [form, setForm] = useState({
    fullName: "", email: "", address: "", city: "", zip: "", country: "",
    cardName: "", cardNumber: "", expiry: "", cvc: "",
  });
  const [error, setError] = useState("");

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    // Very basic validation — beginner level.
    const required = ["fullName", "email", "address", "city", "zip", "country", "cardName", "cardNumber", "expiry", "cvc"];
    for (let key of required) {
      if (!form[key]) {
        setError("Please fill in all fields before placing your order.");
        return;
      }
    }
    setError("");
    clearCart();
    navigate("/thank-you");
  }

  if (cartItems.length === 0) {
    return (
      <section className="section">
        <div className="container empty-cart">
          <h1>Nothing to checkout</h1>
          <p>Your cart is empty.</p>
          <Link to="/shop" className="btn-primary">Browse Products</Link>
        </div>
      </section>
    );
  }

  return (
    <section className="section">
      <div className="container">
        <h1 className="section-title">Checkout</h1>
        <p className="section-subtitle">Complete your order — secure and fast.</p>

        <div className="checkout-layout">
          <form className="checkout-form" onSubmit={handleSubmit}>
            {error && <div className="form-error">{error}</div>}

            <fieldset>
              <legend>Billing Information</legend>
              <div className="form-row">
                <label>
                  <span>Full Name</span>
                  <input name="fullName" value={form.fullName} onChange={handleChange} />
                </label>
                <label>
                  <span>Email</span>
                  <input name="email" type="email" value={form.email} onChange={handleChange} />
                </label>
              </div>
              <label>
                <span>Address</span>
                <input name="address" value={form.address} onChange={handleChange} />
              </label>
              <div className="form-row form-row-3">
                <label>
                  <span>City</span>
                  <input name="city" value={form.city} onChange={handleChange} />
                </label>
                <label>
                  <span>ZIP / Postal</span>
                  <input name="zip" value={form.zip} onChange={handleChange} />
                </label>
                <label>
                  <span>Country</span>
                  <input name="country" value={form.country} onChange={handleChange} />
                </label>
              </div>
            </fieldset>

            <fieldset>
              <legend>Payment Details</legend>
              <label>
                <span>Cardholder Name</span>
                <input name="cardName" value={form.cardName} onChange={handleChange} />
              </label>
              <label>
                <span>Card Number</span>
                <input name="cardNumber" value={form.cardNumber} onChange={handleChange} placeholder="1234 5678 9012 3456" />
              </label>
              <div className="form-row">
                <label>
                  <span>Expiry (MM/YY)</span>
                  <input name="expiry" value={form.expiry} onChange={handleChange} placeholder="12/27" />
                </label>
                <label>
                  <span>CVC</span>
                  <input name="cvc" value={form.cvc} onChange={handleChange} placeholder="123" />
                </label>
              </div>
            </fieldset>

            <button type="submit" className="btn-primary place-order">
              Place Order — ${total.toFixed(2)}
            </button>
          </form>

          <aside className="checkout-summary">
            <h3>Order Summary</h3>
            <ul className="summary-items">
              {cartItems.map((item) => (
                <li key={item.id}>
                  <img src={item.image} alt={item.title} />
                  <div>
                    <h4>{item.title}</h4>
                    <span>Qty: {item.quantity}</span>
                  </div>
                  <strong>${(item.price * item.quantity).toFixed(2)}</strong>
                </li>
              ))}
            </ul>
            <div className="summary-row"><span>Subtotal</span><span>${totalPrice.toFixed(2)}</span></div>
            <div className="summary-row"><span>Shipping</span><span>{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</span></div>
            <div className="summary-row total"><span>Total</span><span>${total.toFixed(2)}</span></div>
          </aside>
        </div>
      </div>
    </section>
  );
}

export default Checkout;
