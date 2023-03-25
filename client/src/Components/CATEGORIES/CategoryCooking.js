import React from "react";
import "./Categories.css";
import { Link } from "react-router-dom";
function Categories() {
  return (
    <div className="categories">
      <div className="searchBar">
        <h1 className="heading"> COOKING </h1>
        {/* <div>
            <input type='text' placeholder='search' />
            <button>
              <img src={'icons/search.svg'} alt='searchbutton' />
            </button>
          </div> */}
      </div>
      <div className="categories">
        <div className="first-row">
       <Link to ='/vegan' > 
       <div className="image-container">
            <img src={"./images/Vegan.jpg"} alt="vegan" />
            <div className="overlay-text">
              <p className="text">Vegan</p>
            </div>
          </div>
          </Link>

          <Link to ='/nonveg'>
          <div className="image-container">
            <img src={"./images/nonveg.jpg"} alt="nonveg" />
            <div className="overlay-text">
              <p className="text"> Non - Veg</p>
            </div>
          </div>
          </Link>

          <Link to = '/chinese'>
          <div className="image-container">
            <img src={"./images/chinese.jpeg"} alt="chinese" />
            <div className="overlay-text">
              <p className="text">Chinese</p>
            </div>
          </div>
          </Link>

        </div>
        <div className="second-row">

          <Link to ='/thai'>
          <div className="image-container">
            <img src={"./images/thai.jpg"} alt="thai" />
            <div className="overlay-text">
              <p className="text"> Thai Food</p>
            </div>
          </div>
          </Link>

          <Link to = '/southindian'>
          <div className="image-container">
            <img src={"./images/southindian.jpeg"} alt="southindian" />
            <div className="overlay-text">
              <p className="text">South - Indian</p>
            </div>
          </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Categories;
