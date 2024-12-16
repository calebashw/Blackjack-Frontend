// Login.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "./style/register_login_style.css";

function Login({ setAuthenticated }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // Send login request to Flask backend
      await axios.post(`${process.env.REACT_APP_API_URL}/login`, {
        username,
        password,
      }, { withCredentials: true });

      // If successful, setAuthenticated to true and redirect to game
      setAuthenticated(true);
      alert('Logged in successfully!');
      navigate('/game');
    } catch (error) {
      console.error('Login failed:', error);
      alert('Login failed. Please check your credentials.');
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <div className="login-form">
        <h2>Welcome Back</h2>
        <div className="inputs">
          <label className="username-label" htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            aria-label="username"
            placeholder="e.g. yourusername123"
            className="login-input"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            aria-label="password"
            placeholder="password123"
            className="login-input"
            id="password-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="register-login-button" type="submit">Sign in</button>

        {/* <p id="new-user">New User?</p>
        <p id="sign-up-paragraph">Sign up <a href="/register">here</a> </p> */}
        <a id="sign-up-paragraph" href="/register">Don't have an account?</a>
        
      </div>
    </form>
  );
}

export default Login;
