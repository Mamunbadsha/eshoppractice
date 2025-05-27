import React, { useEffect, useState } from "react";
import ProductLayout from "./ProductLayout";
import Container from "./Container";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaAngleRight } from "react-icons/fa6";

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

const SpringSale = () => {
  const [timerLeft, setTimerLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const saleEndDate = new Date("May 30,2025 10:00 AM +06").getTime();
    const now = new Date().getTime();
    const difference = saleEndDate - now;

    if (difference < 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      ),
      minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((difference % (1000 * 60)) / 1000),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimerLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    autoplay: true,
  };
  return (
    <div className="mt-[80px]" style={{ background: "url('images/bg.png')" }}>
      <Container>
        <div className="flex justify-between">
          <div className="  justify-center mt-[200px]">
            <h1 className="text-[56px] font-['Poppins'] font-[700]">
              Spring Sale
            </h1>
            <div className=" text-[40px] font-[700] text-[#FF624C] justify-center">
              <span>{timerLeft.days}</span>: <span>{timerLeft.hours}</span>:{" "}
              <span>{timerLeft.minutes}</span>: <span>{timerLeft.seconds}</span>
            </div>
            <button className="py-[7px] px-[20px] bg-[#FF624C] text-white rounded-[10px] mt-[32px]">
              Shop now
            </button>
          </div>
          <div className=" max-w-[902px]">
            {" "}
            <Slider {...settings}>
              <ProductLayout
                percentTag={false}
                category="LAPTOP"
                title=" S21 Laptop Ultra HD LED Screen Feature 2023 ..."
                rating="5"
                totalrating="100"
                price="2,199.00"
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
                stock={true}
                stockAmount="50"
              />
              <ProductLayout
                percentTag={false}
                category="LAPTOP"
                title=" S21 Laptop Ultra HD LED Screen Feature 2023 ..."
                rating="2"
                totalrating="100"
                price="2,199.00"
                stock={true}
                stockAmount="50"
              />
              <ProductLayout
                percentTag={false}
                category="LAPTOP"
                title=" S21 Laptop Ultra HD LED Screen Feature 2023 ..."
                rating="4"
                totalrating="100"
                price="2,199.00"
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
                stock={false}
                stockAmount="50"
              />
            </Slider>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SpringSale;
