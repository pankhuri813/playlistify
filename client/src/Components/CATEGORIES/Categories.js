import React from "react";
import "./Categories.css";
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
          <div className="image-container">
            <img src={"./images/Kathak.jpeg"} alt="kathak" />
            <div className="overlay-text">
              <p className="text">KATHAK</p>
            </div>
          </div>
          <div className="image-container">
            <img src={"./images/hipHop.jpeg"} alt="hipHop" />
            <div className="overlay-text">
              <p className="text">HIP-HOP</p>
            </div>
          </div>
          <div className="image-container">
            <img src={"./images/tapDance.jpeg"} alt="hipHop" />
            <div className="overlay-text">
              <p className="text">TAP-DANCE</p>
            </div>
          </div>
        </div>
        <div className="second-row">
          <div className="image-container">
            <img src={"./images/contemporary.jpg"} alt="contemporary" />
            <div className="overlay-text">
              <p className="text">Contemporary</p>
            </div>
          </div>
          <div className="image-container">
            <img src={"./images/jazz.jpeg"} alt="jazz" />
            <div className="overlay-text">
              <p className="text">JAZZ</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Categories;
