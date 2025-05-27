import React, { useState } from "react";
import Container from "../Container";
import AccordianItem from "./AccordianItem";
import Button from "../Button";

const Faq = () => {
  let [openIndex, setOpenIndex] = useState(null);

  let accordianData = [
    {
      title: "what is your name ?",
      content: "lorem ghnjgh khmjhokuokj jhyk",
    },
    {
      title: "what is your age ?",
      content: "lorem ghnjgh khmjhokuokj jhyk",
    },
    {
      title: "what is your fathername ?",
      content: "lorem ghnjgh khmjhokuokj jhyk",
    },
    {
      title: "what is your mothername ?",
      content: "lorem ghnjgh khmjhokuokj jhyk",
    },
  ];
  return (
    <div
      className="mt-[80px] py-[64px] mb-[80px]"
      style={{ background: "url('images/bg.png')" }}
    >
      <Container>
        <div className="flex">
          <div className="flex justify-between">
            <div className="w-[902px]">
              {accordianData.map((item, index) => (
                <AccordianItem
                  key={index}
                  title={item.title}
                  content={item.content}
                  onToggle={() => {
                    setOpenIndex(openIndex === index ? null : index);
                    console.log(openIndex, index);
                  }}
                  isopen={openIndex === index}
                />
              ))}
            </div>
          </div>
          <div className="mt-[180px] ml-[112px]">
            <h2 className="w-[306px] text-[36px] font-['Poppins'] font-semibold">
              Frequently Asked Questions
            </h2>
            <p className="w-[400px] text-[20px] font-['Montserrat'] mb-[40px] mt-[20px]">
              Questions that get asked the most by our clients. Get any burning
              questions?
            </p>
            <button className="py-[16px] px-[40px] bg-[#FF624C] text-white font-semibold rounded-[10px]">
              Ask A Question
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Faq;
