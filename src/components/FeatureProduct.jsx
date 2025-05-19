import React from "react";
import ProductLayout from "./ProductLayout";
import Container from "./Container";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const FeatureProduct = () => {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "gray" }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "blue" }}
        onClick={onClick}
      />
    );
  }
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    autoplay: true,
    autoplaySpeed: 1000,
  };
  return (
    <Container>
      <Slider {...settings}>
        <ProductLayout
          percentTag={true}
          category="LAPTOP"
          title=" S21 Laptop Ultra HD LED Screen Feature 2023 ..."
          rating="5"
          totalrating="100"
          price="2,199.00"
          bg="yellow"
          stock={false}
          stockAmount="50"
        />
        <ProductLayout
          percentTag={false}
          category="LAPTOP"
          title=" S21 Laptop Ultra HD LED Screen Feature 2023 ..."
          rating="3"
          totalrating="100"
          price="2,199.00"
          bg="pink"
          stock={true}
          stockAmount="50"
        />
        <ProductLayout
          percentTag={true}
          category="LAPTOP"
          title=" S21 Laptop Ultra HD LED Screen Feature 2023 ..."
          rating="2"
          totalrating="100"
          price="2,199.00"
          bg="gray"
          stock={true}
          stockAmount="50"
        />
        <ProductLayout
          percentTag={true}
          category="LAPTOP"
          title=" S21 Laptop Ultra HD LED Screen Feature 2023 ..."
          rating="4"
          totalrating="100"
          price="2,199.00"
          bg="orange"
          stock={true}
          stockAmount="50"
        />
        <ProductLayout
          percentTag={false}
          category="LAPTOP"
          title=" S21 Laptop Ultra HD LED Screen Feature 2023 ..."
          rating="1"
          totalrating="100"
          price="2,199.00"
          bg="green"
          stock={false}
          stockAmount="50"
        />
      </Slider>
    </Container>
  );
};

export default FeatureProduct;
