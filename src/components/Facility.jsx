import React from "react";
import Container from "./Container";

const Facility = () => {
  return (
    <div>
      <Container>
        <div className="flex justify-between items-center">
          <div className="flex gap-[24px] justify-center items-center ">
            <div>
              <img src="images/hp.png" alt="hp" />
            </div>

            <div className="">
              <p className="font-['Monstrerrat'] font-[700] text-[16px]">
                Responsive
              </p>
              <span className="font-['Monstrerrat'] font-[400] text-[16px]">
                Customer service available 24/7
              </span>
            </div>
          </div>
          <div className="flex gap-[24px] justify-center items-center ">
            <div>
              <img src="images/se.png" alt="se" />
            </div>

            <div className="">
              <p className="font-['Monstrerrat'] font-[700] text-[16px]">
               Secure
              </p>
              <span className="font-['Monstrerrat'] font-[400] text-[16px]">
              Certified marketplace since 2017
              </span>
            </div>
          </div>
          <div className="flex gap-[24px] justify-center items-center ">
            <div>
              <img src="images/de.png" alt="de" />
            </div>

            <div className="">
              <p className="font-['Monstrerrat'] font-[700] text-[16px]">
               Shipping
              </p>
              <span className="font-['Monstrerrat'] font-[400] text-[16px]">
               Free, fast, and reliable worldwide
              </span>
            </div>
          </div>
          <div className="flex gap-[24px] justify-center items-center ">
            <div>
              <img src="images/re.png" alt="re" />
            </div>

            <div className="">
              <p className="font-['Monstrerrat'] font-[700] text-[16px]">
              Transparent
              </p>
              <span className="font-['Monstrerrat'] font-[400] text-[16px]">
              Hassle-free return policy
              </span>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Facility;
