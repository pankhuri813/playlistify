import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import cd from "../images/cd.jpeg";
import musiclove from "../images/musiclove.jpeg";
import dance2 from "../images/dance2.jpg";
import group from "../images/group.jpeg";
import caset from "../images/caset.jpeg";
import "./Navbar.css";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
};

const Carousel = () => {
  return (
    <Slider {...settings}>
      <div>
        <img className="carousel-image" src={dance2} alt="dance2" />
      </div>
      <div>
        <img className="carousel-image" src={cd} alt="cd" />
      </div>
      <div>
        <img className="carousel-image" src={musiclove} alt="musiclove" />
      </div>
      <div>
        <img className="carousel-image" src={group} alt="group" />
      </div>
      <div>
        <img className="carousel-image" src={caset} alt="caset" />
      </div>
    </Slider>
  );
};

export default Carousel;
