import React, { useState } from "react";
import Plan_Card from "./Plan_Card";

const Plan = () => {
  const [toggle, setToggle] = useState(true);

  function filterByMonth() {
    setToggle(true);
  }

  function filterByYear() {
    setToggle(false);
  }

  return (
    <div className="h-[691px]">
      <div className="h-[577px] w-[1090px] mx-auto flex flex-col justify-center items-center">
        <div className="head w-[455px] h-[166px] flex flex-col justify-between items-center">
          <p className="text-[32px] font-bold">Choose your plan</p>
          <p className="text-[14px] font-normal text-center">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's{" "}
          </p>
          <div className="toggle w-[151px] h-[37px] rounded-[10px] shadow-[0px_10px_30px_0px_#9A949440]">
            <div className="flex justify-evenly h-full items-center text-[14px] cursor-default">
              <div
                onClick={filterByMonth}
                className={
                  toggle
                    ? "rounded-[10px] p-[3px_9px] transition-all duration-300 bg-[#E1A6FF66]"
                    : "rounded-[10px] p-[3px_9px] transition-all duration-300"
                }
              >
                monthly
              </div>
              <div
                onClick={filterByYear}
                className={
                  toggle
                    ? "rounded-[10px] p-[3px_9px] transition-all duration-300"
                    : "rounded-[10px] p-[3px_9px] transition-all duration-300 bg-[#E1A6FF66]"
                }
              >
                yearly
              </div>
            </div>
          </div>
        </div>
        <div className="h-[357px] flex gap-[90px] justify-between mt-[54px]">
          <Plan_Card
            priceColor={"tcolor"}
            textColor={"black"}
            bgColor={"white"}
          />
          <Plan_Card
            priceColor={"white"}
            textColor={"white"}
            bgColor={"tcolor"}
          />
          <Plan_Card
            priceColor={"tcolor"}
            textColor={"black"}
            bgColor={"white"}
          />
        </div>
      </div>
      <div className="absolute top-[-11%] -z-10">
        <img src="img/Group 79.png" alt="" />
      </div>
    </div>
  );
};

export default Plan;
