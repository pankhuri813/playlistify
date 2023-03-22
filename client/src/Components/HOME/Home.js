import React from "react";
import "./Home.css";
function Home() {
  return (
    <div>
      <div className="first-body">
        <div className="phone-container">
          <img
            className="phone"
            src={"./images/phone.svg"}
            alt="phone"
          ></img>
        </div>
        <div className="description">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.Lorem Ipsum has been the industry '
          </p>
          <br />
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration
          </p>
          <div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
      <div className="second-div">
        <div className="image-container">
          <img src={"./images/disc.png"} alt="disc" className="disc" />
        </div>
        <div className="list">
          <p>lorem ipsum is dummy text</p>
          <p>lorem ipsum is dummy text</p>
          <p>lorem ipsum is dummy text</p>
          <p>lorem ipsum is dummy text</p>
        </div>
      </div>
      <div className="third-div">
        <div className="image-container">
          <img src={"./images/image1.png"} className="image " alt="" />
          <div className="overlay-text">
            <p className="text">Dance</p>
          </div>
        </div>
        <div className="image-container">
          <img src={"./images/image2.png"} className="image " alt="" />
          <div className="overlay-text">
            <p className="text">Cooking</p>
          </div>
        </div>
        <div className="image-container">
          <img src={"./images/image3.png"} className="image " alt="" />
          <div className="overlay-text">
            <p className="text">Painting</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
