import React from "react";
import "./Categories.css";
import kathak1 from "../images/kathak1.jpg";
import tapdance from "../images/tapdance.jpeg";
import hiphop from "../images/hiphop.jpg";
import contemporary from "../images/contemporary.jpg";
import jazzdance from "../images/jazzdance.jpg";
import { Link } from "react-router-dom";

function Categorymain() {
  return (
    <div>
      <div id="block">
        <div className="dance-categories1">
          <Link id="text" to="/kathak" style={{ boxShadow:'10px 2px 2px black' }}>
            {" "}
            <div
              className="blurry-background"
              style={{ backgroundImage: `url(${kathak1})` }}
            >
              <h2>Kathak</h2>
            </div>{" "}
          </Link>
          <div className="blurry-background" style={{backgroundImage: `url(${hiphop})`}}>
            <h2> HIP-HOP</h2>
            </div>
          {/* <div style={{ position: "relative" }}>
            <img
              style={{ position: "absolute", zIndex: 1,width:'5000px' }}
              src={hiphop}
              alt="hiphop"
            />
            <h2 style={{ position: "absolute", top: 0, left: 0, zIndex: 2 }}>
              HIP-HOP
            </h2>
          </div> */}

          <div
            className="blurry-background"
            style={{ backgroundImage: `url(${tapdance})` }}
          >
            <h2>Tap Dance</h2>
          </div>
          <div
            className="blurry-background"
            style={{ backgroundImage: `url(${contemporary})` }}
          >
            <h2>Contemporary</h2>
          </div>
        </div>

        <div className="dance-categories2">
          <div
            className="blurry-background2"
            style={{ backgroundImage: `url(${jazzdance})` }}
          >
            <h2>Jazz Dance</h2>
          </div>
          <div
            className="blurry-background2"
            style={{ backgroundImage: `url(${jazzdance})` }}
          >
            <h2>Jazz Dance</h2>
          </div>
          <div
            className="blurry-background2"
            style={{ backgroundImage: `url(${jazzdance})` }}
          >
            <h2>Jazz Dance</h2>
          </div>
          <div
            className="blurry-background2"
            style={{ backgroundImage: `url(${jazzdance})` }}
          >
            <h2>Jazz Dance</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Categorymain;
