import "./Button.css";

// Simple reusable button used across forms and CTAs.
function Button({ children, type = "button", variant = "primary", onClick, fullWidth }) {
  const classes = `btn btn-${variant} ${fullWidth ? "btn-full" : ""}`;
  return (
    <button type={type} className={classes} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
