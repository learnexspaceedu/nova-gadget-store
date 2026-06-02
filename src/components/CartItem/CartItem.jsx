import { useCart } from "../../context/CartContext.jsx";
import "./CartItem.css";

function CartItem({ item }) {
  const { increaseQty, decreaseQty, removeFromCart } = useCart();

  return (
    <div className="cart-item">
      <img src={item.image} alt={item.title} className="cart-item-image" />
      <div className="cart-item-info">
        <h4>{item.title}</h4>
        <span className="cart-item-cat">{item.category}</span>
        <span className="cart-item-price">${item.price.toFixed(2)}</span>
      </div>
      <div className="cart-item-actions">
        <div className="qty">
          <button onClick={() => decreaseQty(item.id)} aria-label="Decrease quantity">−</button>
          <span>{item.quantity}</span>
          <button onClick={() => increaseQty(item.id)} aria-label="Increase quantity">+</button>
        </div>
        <span className="line-total">
          ${(item.price * item.quantity).toFixed(2)}
        </span>
        <button className="remove" onClick={() => removeFromCart(item.id)}>
          Remove
        </button>
      </div>
    </div>
  );
}

export default CartItem;
