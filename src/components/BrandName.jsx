import React from "react";
import Container from "./Container";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const BrandName = () => {
  //   var settings = {
  //     dots: false,
  //     infinite: true,
  //     speed: 500,
  //     slidesToShow: 4,
  //     slidesToScroll: 1,
  //     nextArrow: <SampleNextArrow />,
  //     prevArrow: <SamplePrevArrow />,
  //     autoplay: true,
  //     autoplaySpeed: 1000,
  //   };

  return (
    <div>
      <Container>
        <div className="flex justify-between py-[100px]">
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
        </div>
      </Container>
    </div>
  );
};

export default BrandName;
