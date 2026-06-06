import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext.jsx";
import CartItem from "../../components/CartItem/CartItem.jsx";
import "./Cart.css";
import CartIcon from "../../assets/icons/CartIcon.jsx";

function Cart() {
  const { cartItems, totalPrice, clearCart } = useCart();
  const shipping = totalPrice > 99 || totalPrice === 0 ? 0 : 9.99;
  const total = totalPrice + shipping;

  if (cartItems.length === 0) {
    return (
      <section className="section">
        <div className="container empty-cart">
          <div className="empty-icon">
            <CartIcon />
          </div>
          <h1>Your cart is empty</h1>
          <p>Looks like you haven't added anything yet. Let's fix that.</p>
          <Link to="/shop" className="btn-primary">
            Start Shopping
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="section">
      <div className="container">
        <header className="cart-header">
          <h1 className="section-title">Shopping Cart</h1>
          <button className="clear-btn" onClick={clearCart}>
            Clear cart
          </button>
        </header>

        <div className="cart-layout">
          <div className="cart-list">
            {cartItems.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>

          <aside className="cart-summary">
            <h3>Order Summary</h3>
            <div className="summary-row">
              <span>Subtotal</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
            <div className="summary-row">
              <span>Shipping</span>
              <span>{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</span>
            </div>
            <div className="summary-row total">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <Link to="/checkout" className="btn-primary checkout-btn">
              Proceed to Checkout
            </Link>
            <Link to="/shop" className="continue-link">
              ← Continue shopping
            </Link>
          </aside>
        </div>
      </div>
    </section>
  );
}

export default Cart;
