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
          <div className="  justify-center mt-[100px]">
            <h1 className="text-[56px] font-['Poppins'] font-[700]">
              Spring Sale
            </h1>
            <div className="flex w-[402px] justify-between">
              <div>
                <div className=" text-[50px] font-[700] text-[#e53b2c] justify-center flex">
                  {timerLeft.days <= 9 ? `0${timerLeft.days}` : timerLeft.days}
                  <span>:</span>
                </div>
                <span className="text-[#303030] font-['Montserrat'] font-normal text-base leading-4 block">
                  Days
                </span>
              </div>
              <div>
                <span className=" text-[50px] font-[700] text-[#e53b2c] justify-center flex ">
                  {timerLeft.hours <= 9
                    ? `0${timerLeft.hours}`
                    : timerLeft.hours}
                  :
                </span>
                <span className="text-[#303030] font-['Montserrat'] font-normal text-base leading-4 block">
                  hours
                </span>
              </div>
              <div>
                <span className=" text-[50px] font-[700] text-[#e53b2c] justify-center flex">
                  {timerLeft.minutes <= 9
                    ? `0${timerLeft.minutes}`
                    : timerLeft.minutes}
                  :
                </span>

                <span className="text-[#303030] font-['Montserrat'] font-normal text-base leading-4 block">
                  mitutes
                </span>
              </div>
              <div>
                <span className=" text-[50px] font-[700] text-[#e53b2c] justify-center ">
                  {timerLeft.seconds <= 9
                    ? `0${timerLeft.seconds}`
                    : timerLeft.seconds}
                </span>
                <span className="text-[#303030] font-['Montserrat'] font-normal text-base leading-4 block">
                  seconds
                </span>
              </div>
            </div>
            <button className="py-[16px] px-[40px] bg-[#FF624C] text-white rounded-[10px] mt-[72px] font-['Montserrat'] font-[700] text-[20px]">
              Shop now
            </button>

            <img className="mt-[90px]" src="images/dots.png" alt="dots" />
          </div>
          <div className=" max-w-[902px]">
            <Slider {...settings}>
              <ProductLayout
                percentTag={true}
                category="LAPTOP"
                title=" S21 Laptop Ultra HD LED Screen Feature 2023 ..."
                rating="5"
                totalrating="100"
                price="2,199.00"
                stock={false}
                stockAmount="50"
                v2={true}
                image={true}
                spring={true}
                correctprice="$118.00"
                discounted={true}
                isstock={true}
              />
              <ProductLayout
                percentTag={true}
                category="LAPTOP"
                title=" S21 Laptop Ultra HD LED Screen Feature 2023 ..."
                rating="3"
                totalrating="100"
                price="2,199.00"
                stock={true}
                stockAmount="50"
                v2={true}
                image={true}
                spring={true}
                correctprice="$118.00"
                discounted={true}
                isstock={true}
              />
              <ProductLayout
                percentTag={true}
                category="LAPTOP"
                title=" S21 Laptop Ultra HD LED Screen Feature 2023 ..."
                rating="2"
                totalrating="100"
                price="2,199.00"
                stock={true}
                stockAmount="50"
                v2={true}
                image={true}
                spring={true}
                correctprice="$118.00"
                discounted={true}
                isstock={true}
              />
              <ProductLayout
                percentTag={true}
                category="LAPTOP"
                title=" S21 Laptop Ultra HD LED Screen Feature 2023 ..."
                rating="4"
                totalrating="100"
                price="2,199.00"
                stock={true}
                stockAmount="50"
                v2={true}
                image={true}
                spring={true}
                correctprice="$118.00"
                discounted={true}
                isstock={true}
              />
              <ProductLayout
                percentTag={true}
                category="LAPTOP"
                title=" S21 Laptop Ultra HD LED Screen Feature 2023 ..."
                rating="1"
                totalrating="100"
                price="2,199.00"
                stock={false}
                stockAmount="50"
                v2={true}
                image={true}
                spring={true}
                correctprice="$118.00"
                discounted={true}
                isstock={true}
              />
            </Slider>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SpringSale;
