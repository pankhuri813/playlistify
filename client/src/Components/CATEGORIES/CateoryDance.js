import React from "react";
import "./Categories.css";
import { Link } from "react-router-dom";
function Categories() {
  return (
    <div className="categories">
      <div className="searchBar">
        <h1 className="heading">DANCE - STYLES</h1>
        {/* <div>
            <input type='text' placeholder='search' />
            <button>
              <img src={'icons/search.svg'} alt='searchbutton' />
            </button>
          </div> */}
      </div>
      <div className="categories">
        <div className="first-row">
       <Link to ='/kathak' > 
       <div className="image-container">
            <img src={"./images/Kathak.jpeg"} alt="kathak" />
            <div className="overlay-text">
              <p className="text">KATHAK</p>
            </div>
          </div>
          </Link>

          <Link to ='/hiphop'>
          <div className="image-container">
            <img src={"./images/hipHop.jpeg"} alt="hipHop" />
            <div className="overlay-text">
              <p className="text">HIP-HOP</p>
            </div>
          </div>
          </Link>

          <Link to = '/tapdance'>
          <div className="image-container">
            <img src={"./images/tapDance.jpeg"} alt="hipHop" />
            <div className="overlay-text">
              <p className="text">TAP-DANCE</p>
            </div>
          </div>
          </Link>

        </div>
        <div className="second-row">

          <Link to ='/cotemporary'>
          <div className="image-container">
            <img src={"./images/contemporary.jpg"} alt="contemporary" />
            <div className="overlay-text">
              <p className="text">Contemporary</p>
            </div>
          </div>
          </Link>

          <Link to = '/jazz'>
          <div className="image-container">
            <img src={"./images/jazz.jpeg"} alt="jazz" />
            <div className="overlay-text">
              <p className="text">JAZZ</p>
            </div>
          </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Categories;
