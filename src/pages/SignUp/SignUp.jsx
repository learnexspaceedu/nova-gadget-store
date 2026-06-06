import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Auth.css";
import { useAuth } from "../../context/AuthContext";

function SignUp() {
  const { signup } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
  });
  const [error, setError] = useState("");

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!form.name) return setError("Please enter your name.");
    if (!form.email.includes("@"))
      return setError("Please enter a valid email.");
    if (form.password.length < 6)
      return setError("Password must be 6+ characters.");
    if (form.password !== form.confirm)
      return setError("Passwords don't match.");
    setError("");
    signup(form.name, form.email, form.password);
    navigate("/");
  }

  return (
    <section className="auth-section">
      <div className="auth-card">
        <h1>Create Account</h1>
        <p className="auth-sub">Join NovaTech and shop the future today.</p>

        {error && <div className="form-error">{error}</div>}

        <form onSubmit={handleSubmit} className="auth-form">
          <label>
            <span>Full name</span>
            <input
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              placeholder="Jane Doe"
            />
          </label>
          <label>
            <span>Email</span>
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
            />
          </label>
          <label>
            <span>Password</span>
            <input
              name="password"
              type="password"
              value={form.password}
              onChange={handleChange}
              placeholder="••••••••"
            />
          </label>
          <label>
            <span>Confirm password</span>
            <input
              name="confirm"
              type="password"
              value={form.confirm}
              onChange={handleChange}
              placeholder="••••••••"
            />
          </label>
          <button type="submit" className="btn-primary">
            Create Account
          </button>
        </form>

        <p className="auth-switch">
          Already a member? <Link to="/signin">Sign in</Link>
        </p>
      </div>
    </section>
  );
}

export default SignUp;
