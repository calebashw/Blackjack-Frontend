import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./style/register_login_style.css";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      // Send registration request to Flask backend
      await axios.post(`${process.env.REACT_APP_API_URL}/register`, {
        username,
        password,
      });
      alert("Registration successful! Please log in.");
      navigate("/login"); // Redirect to login after successful registration
    } catch (error) {
      console.error("Registration failed:", error);
      alert("Registration failed. Try a different username.");
    }
  };

  return (
    <form onSubmit={handleRegister}>
      <div className="login-form">
        <h2>Register</h2>
        <div className="inputs">
          {/* Username Input */}
          <label className="username-label" htmlFor="username">
            Username
          </label>
          <div className="input-container">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="icon-username"
              viewBox="0 0 16 16"
            >
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
              <path
                fillRule="evenodd"
                d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
              />
            </svg>
            <input
              type="text"
              id="username"
              aria-label="username"
              placeholder="e.g. yourusername123"
              className="login-input"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          {/* Password Input */}
          <label className="password-label" htmlFor="password-input">
            Password
          </label>
          <div className="input-container">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="icon-password"
              viewBox="0 0 16 16"
            >
              <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2m3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2" />
            </svg>
            <input
              type="password"
              id="password-input"
              aria-label="password"
              placeholder="password123"
              className="login-input"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>

        {/* Submit Button */}
        <button className="register-login-button" type="submit">
          Join Today
        </button>

        {/* Redirect to Login */}
        <a id="sign-up-paragraph" href="/login">
          Already have an account? Log in.
        </a>
      </div>
    </form>
  );
}

export default Register;
