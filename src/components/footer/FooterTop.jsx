import React from "react";
import Container from "../Container";
import Button from "../Button";

const FooterTop = () => {
  return (
    <Container>
      <div className="bg-[linear-gradient(90deg,rgba(244,244,244,1)_29%,rgba(217,217,217,1)_43%)] py-[115px] px-[100px] rounded-[24px] ">
        <h3 className='font-["Poppins"] font-semibold text-4xl'>
          Get Our Updates
        </h3>
        <p className='font-["Poppins"] font-normal text-xl max-w-[474px] leading-[30px] mt-4 mb-8'>
          Browse our wide selection of electronics and find the perfect promo
          for you from newsletter.
        </p>
       <input
              type="text"
              placeholder="Enter your email address ..."
              className="w-[494px] bg-white border border-gray-400 py-[18px] px-6 rounded-lg mr-[0px] mb-4"
            />
            <br/>
          <Button text="subscribe"/>
      </div>
    </Container>
  );
};

export default FooterTop;
