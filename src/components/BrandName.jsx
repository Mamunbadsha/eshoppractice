import React from "react";
import Container from "./Container";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const BrandName = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <Container>
      <Slider {...settings} className="mb-[80px] justify-center">
        <div>
          <img src="images/brand1.png" alt="" />
        </div>
        <div>
          {" "}
          <img src="images/brand2.png" alt="" />
        </div>
        <div>
          {" "}
          <img src="images/brand3.png" alt="" />
        </div>
        <div>
          {" "}
          <img src="images/brand4.png" alt="" />
        </div>
        <div>
          {" "}
          <img src="images/brand1.png" alt="" />
        </div>
      </Slider>
    </Container>
  );
};

export default BrandName;
