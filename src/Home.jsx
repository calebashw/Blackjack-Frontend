import React from "react";
import { Link } from "react-router-dom";
import "./style/homeStyle.css";

function Home() {
  return (
    <div className="home-container">
      <div className="directory-cover">
        <h2>Welcome to CashJack</h2>
        <p>Please log in or register to start playing.</p>
        
        {/* Buttons Container */}
        <div className="button-container">
          <Link to="/login">
            <button className="login-button">Login</button>
          </Link>
          <Link to="/register">
            <button className="register-button">Register</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
