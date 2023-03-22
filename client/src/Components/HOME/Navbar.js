import React, { useState, useRef } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  const [showLinks, setShowLinks] = useState(true);
  const linkRef = useRef();
  return (
    <div className="navbar">
      <Link to="/">
        <img src={"./logo/Logo.svg"} alt="logo" />
      </Link>
      {/* {showLinks && ( */}
      <div className="navlinks" ref={linkRef}>
        <Link to="/">
          <p>Home</p>
        </Link>
        <Link to="/categories">
          <p>Explore</p>
        </Link>
        <Link to="/kathak">
          <p>Kathak</p>
        </Link>
        {/* <Link to="/login"> */}
          <img
            className="login-btn"
            src={"./icons/log-in.svg"}
            alt="login"
            onClick={()=>{window.location.pathname='./login'}}
          />
        {/* </Link> */}
      </div>
      {/* )} */}
      <div
        className="hemberg"
        onClick={() => {
          setShowLinks(!showLinks);

          linkRef.current.classList.toggle("active");
          console.log(linkRef.current.classList);
        }}
      >
        <div className="hb-line"></div>
        <div className="hb-line"></div>
        <div className="hb-line"></div>
      </div>
    </div>
  );
}

export default Navbar;
