import React from "react";
import "./Categories.css";
import { Link } from "react-router-dom";
function Categories() {
  return (
    <div className="categories">
      <div className="searchBar">
        <h1 className="heading"> Drwaing </h1>
        {/* <div>
            <input type='text' placeholder='search' />
            <button>
              <img src={'icons/search.svg'} alt='searchbutton' />
            </button>
          </div> */}
      </div>
      <div className="categories">
        <div className="first-row">
       <Link to ='/acrylic' > 
       <div className="image-container">
            <img src={"./images/acrylic.jpg"} alt="acrylic" />
            <div className="overlay-text">
              <p className="text">Acrylic</p>
            </div>
          </div>
          </Link>

          <Link to ='/architecture'>
          <div className="image-container">
            <img src={"./images/architecture.jpg"} alt="architecture" />
            <div className="overlay-text">
              <p className="text"> Architecture</p>
            </div>
          </div>
          </Link>

          <Link to = '/cartoon'>
          <div className="image-container">
            <img src={"./images/cartoon.jpeg"} alt="cartoon" />
            <div className="overlay-text">
              <p className="text">Cartoon</p>
            </div>
          </div>
          </Link>

        </div>
        <div className="second-row">

          <Link to ='/potrait'>
          <div className="image-container">
            <img src={"./images/potrait.jpeg"} alt="potrait" />
            <div className="overlay-text">
              <p className="text"> Potrait</p>
            </div>
          </div>
          </Link>

          <Link to = '/caricature'>
          <div className="image-container">
            <img src={"./images/caricature.jpeg"} alt="caricature" />
            <div className="overlay-text">
              <p className="text"> Caricature</p>
            </div>
          </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Categories;
