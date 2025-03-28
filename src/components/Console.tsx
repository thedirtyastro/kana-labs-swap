import Image from "next/image";
import React from "react";

import Info from "../../public/images/info.svg";
import Message from "../../public/images/message-question-square.svg";
import KanaButton from "./KanaButton";
import CycleProfitLoss from "./CycleProfitLoss";
import PayoffChart from "./PayoffChart";

const Console = () => {
  return (
    <div className="w-[436px] py-4 flex flex-col gap-4">
      <div>
      <div className="bg-tabs flex text-sm h-14 items-center border border-white/10 rounded-t-2xl ">
        <div className=" h-full items-center px-6 flex justify-center bg-white/[6%] rounded-tl-2xl w-[50%]">
          Long Call OPerps
        </div>
        <div className="py-2 px-6 h-full   flex justify-center items-center w-1/2 rounded-tr-2xl">
          Long Put OPerps
        </div>
      </div>

      <div className="flex flex-col gap-4 p-4 bg-card border border-white/10 rounded-b-2xl">
        <div className="flex flex-col gap-2 p-4 bg-topbarbutton border border-white/10 rounded-2xl">
          <div className="flex flex-col gap-2">
            <div className="flex items-center flex-row gap-2 ">
              <span>Long Call OPerps Token</span>
              <Image src={Info} alt="Info" />
            </div>
            <input
              placeholder="0.00"
              className="border font-bold border-white/10 rounded-lg bg-tabs  outline-none w-full text-xl p-4"
            />
            <div className="flex items-center flex-row gap-2 p-2 text-xs font-bold text-primary ">
              <Image src={Message} alt="Info" />
              <span>Not sure how much to buy?</span>
            </div>
          </div>
          <div className="text-sm flex flex-col gap-2">
            <div className="flex items-center flex-row justify-between ">
              <span>USDC Balance</span>
              <span>123.00 USDC</span>
            </div>

            <div className="flex items-center flex-row justify-between ">
              <span>LCO Balance</span>
              <span>12.34</span>
            </div>
          </div>
        </div>

        <div className="flex flex-row gap-2">
          <div className="w-1/2">
            <KanaButton text="buy" color="secondary" />
          </div>
          <div className="w-1/2">
            <KanaButton text="Sell" />
          </div>
        </div>

        <div className="bg-tabs py-5 px-4 rounded-2xl flex flex-col gap-4">
          <div className="flex flex-row gap-2">
            <div className="w-1/2">
              <CycleProfitLoss
                title={"Next Cycle Max Profit"}
                percentage={750}
                amount={1000}
                isProfit={true}
              />
            </div>
            <div className="w-1/2">
              <CycleProfitLoss
                title={"Next Cycle Max Loss"}
                percentage={50}
                amount={25}
                isProfit={false}
              />
            </div>
          </div>
          <div className="flex flex-row justify-between">
            <span className="text-sm">Expected Leverage</span>
            <span>700x</span>
          </div>
          <div className="flex flex-row justify-between">
            <span className="text-sm">Premium paid per cycle</span>
            <span>50%</span>
          </div>
          <div className="flex flex-row justify-between">
            <span className="text-sm">Distribution</span>
            <span>250 LCO : 75000 SCO </span>
          </div>
        </div>
      </div>
      </div>

      <div className="flex flex-col justify-center items-center border border-white/10 bg-card rounded-2xl">
        {/* Heading section with equal width distribution */}
        <div className="flex flex-row w-full h-12 border border-white/10 rounded-t-2xl">
          {["Payoff Chart", "Previous Cycles", "Pool Overview"].map(
            (title, index) => (
              <div
                key={index}
                className={`flex-1 flex justify-center items-center cursor-pointer text-xs
        ${index === 0 ? " bg-white/[6%] rounded-tl-2xl font-bold" : ""}`}>
                {title}
              </div>
            )
          )}
        </div>

        {/* Payoff Chart Component */}
        <PayoffChart />

        <div className="flex flex-col gap-1 w-full p-6 text-sm pt-0">
          <span>Max profit </span>
          <span>Entry Price (Break-Even)</span>
        </div>
      </div>
    </div>
  );
};

export default Console;
