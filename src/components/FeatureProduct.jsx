import React from "react";
import ProductLayout from "./ProductLayout";
import Container from "./Container";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaAngleLeft, FaLongArrowAltRight } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa6";
import { HiArrowLongRight } from "react-icons/hi2";
import { CgArrowLongRight } from "react-icons/cg";

const FeatureProduct = () => {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "transparent",
          fontSize: "20px",
          width: "40px",
          height: "40px",
          borderRadius: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "gray",
          border: "3px solid #3030604c",
        }}
        onClick={onClick}
      >
        <FaAngleRight />
      </div>
    );
  }
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "transparent",
          fontSize: "20px",
          width: "40px",
          height: "40px",
          borderRadius: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "gray",
          border: "3px solid #3030604c",
        }}
        onClick={onClick}
      >
        <FaAngleLeft />
      </div>
    );
  }
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    autoplay: false,
    autoplaySpeed: 1000,
  };
  return (
    <div className="mt-[80px]">
      <Container>
        <div className="flex justify-between mb-[48px]">
          <div>
            <h2 className="font-['Poppins'] font-semibold text-[36px]">
              Featured Products
            </h2>
          </div>
          <div className="flex justify-center items-center gap-[16px]">
            <div>
              <p className="font-['Montserrat'] font-bold text-[16px] text-[#FF624C]">
                View All
              </p>
            </div>
            <div>
              <span>
                <CgArrowLongRight className="text-[#FF624C]" />
              </span>
            </div>
          </div>
        </div>
        <Slider {...settings}>
          <ProductLayout
            // percentTag={true}
            category="LAPTOP"
            title=" S21 Laptop Ultra HD LED Screen Feature 2023 ..."
            rating="5"
            totalrating="100"
            price="2,199.00"
            stock={false}
            stockAmount="50"
            images={true}
          />
          <ProductLayout
            percentTag={true}
            category="A U D I O"
            title=" S21 Laptop Ultra HD LED Screen Feature 2023 ..."
            rating="3"
            totalrating="100"
            price="59.00"
            correctprice="$118.00"
            stock={false}
            stockAmount="50"
            discounted={true}
            images={true}
          />
          <ProductLayout
            // percentTag={true}
            category="P H O N E"
            title=" S21 Laptop Ultra HD LED Screen Feature 2023 ..."
            rating="2"
            totalrating="100"
            price="2,199.00"
            stock={false}
            stockAmount="50"
            images={true}
          />
          <ProductLayout
            // percentTag={true}
            category="T E L E V I S I O N"
            title=" S21 Laptop Ultra HD LED Screen Feature 2023 ..."
            rating="4"
            totalrating="100"
            price="2,199.00"
            stock={false}
            stockAmount="50"
            images={true}
          />
          <ProductLayout
            // percentTag={false}
            category="LAPTOP"
            title=" S21 Laptop Ultra HD LED Screen Feature 2023 ..."
            rating="1"
            totalrating="100"
            price="2,199.00"
            stock={false}
            stockAmount="50"
            images={true}
          />
        </Slider>
      </Container>
    </div>
  );
};

export default FeatureProduct;
