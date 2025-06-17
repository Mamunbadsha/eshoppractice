import React from "react";
import { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

const Price = () => {
  const [isOpen, setisOpen] = useState(false);

  const toggle = () => {
    setisOpen(!isOpen);
  };

  const [minval, setMinval] = useState(0);
  const [maxval, setMaxval] = useState(1000);

  const updateSlider = (type, value) => {
    if (type == "min") {
      const newMin = Math.min(parseInt(value), maxval);
      setMinval(newMin);
    } else {
      const newMax = Math.max(parseInt(value), minval);
      setMaxval(newMax);
    }
  };

  const minPercent = (minval / 1000) * 100;
  const maxPercent = (maxval / 1000) * 100;

  return (
    <div className="py-[50px]">
      <div
        onClick={toggle}
        className="text-[30px] font-bold ml-6 py-3 flex justify-between mb-[24px]"
      >
        Price
        <span className="mt-2 mr-6">
          {isOpen ? <FaAngleDown /> : <FaAngleUp />}
        </span>
      </div>

      {isOpen && (
        <div>
          <div className="flex justify-center gap-[11px]">
            <span>
              <input
                type="number"
                min={0}
                onChange={(e) => setMinval(e.target.value)}
                value={`${minval}`}
                className="w-[124px] h-[74px] border  rounded-[10px] text-center"
              />
            </span>
            <span>
              <input
                type="number"
                max={1000}
                onChange={(e) => setMaxval(e.target.value)}
                value= {`${maxval}`}
                className="w-[124px] h-[74px] border  rounded-[10px] text-center"
              />
            </span>
          </div>
          <div className="w-[90%] h-1  bg-gray-300 relative rounded ml-3 mt-10">
            <div
              className="absolute h-full bg-[#FF624C] "
              style={{
                left: `${minPercent}%`,
                width: `${maxPercent - minPercent}%`,
              }}
            ></div>
            <input
              type="range"
              min={0}
              max={1000}
              value={minval}
              step={10}
              className="w-full  h-2.5 rounded absolute pointer-events-none appearance-none"
              onChange={(e) => updateSlider("min", e.target.value)}
            />
            <input
              type="range"
              min={0}
              max={1000}
              value={maxval}
              step={10}
              className="w-full h-2.5 rounded absolute pointer-events-none appearance-none"
              onChange={(e) => updateSlider("max", e.target.value)}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Price;
