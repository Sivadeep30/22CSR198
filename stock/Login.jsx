import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    
    try {
      const res = await axios.post("http://localhost:3000/api/login", form);
    } catch (err) {
      setError(err.response?.data?.message || "Login failed. Please check your credentials.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <h1 className="auth-title">Welcome Back</h1>
          <p className="auth-subtitle">Sign in to your account to continue</p>
        </div>

        {error && <div className="auth-error">{error}</div>}

        <form onSubmit={handleLogin} className="auth-form">
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <div className="input-with-icon">
              <Mail className="input-icon" size={18} />
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
            </div>
          </div>

          <div className="form-group">
            <div className="label-with-link">
              <label htmlFor="password">Password</label>
              <Link to="/forgot-password" className="forgot-link">
                Forgot password?
              </Link>
            </div>
            <div className="input-with-icon">
              <Lock className="input-icon" size={18} />
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                required
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
              />
             </div>
          </div>

          <button 
            type="submit" 
            className={`auth-button ${isLoading ? "loading" : ""}`}
            disabled={isLoading}
          >
            {isLoading ? "Signing in..." : "Sign In"}
          </button>

          <div className="auth-divider">
            <span>Don't have an account?</span>
          </div>

          <Link to="/register" className="auth-secondary-button">
            Create an Account
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
