import React from "react";
import "./Welcome.css";
import { Link } from "react-router-dom";

export default function Welcome() {
  return (
    <div
      className="welcome-container"
      style={{ backgroundImage: `url("/images/welcome-bg.jpeg")` }}
    >
      <div className="welcome-main">
        <div className="welcome-body">
          <h1 className="welcome-heading">👋 Welcome!</h1>
          <h3 className="welcome-txt">
            There are many variations of passages of Lorem Ipsum.
          </h3>
        </div>
        <div className="btn-container">
          <Link to="/signup">
            <button className="welcome-btn sign-up">Sign Up</button>
          </Link>
          <Link to="/login">
            <button className="welcome-btn log-in">Log In</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
