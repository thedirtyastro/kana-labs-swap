"use client";
import Image from "next/image";
import React, { useState } from "react";

import Info from "../../public/images/info.svg";
import Message from "../../public/images/message-question-square.svg";
import KanaButton from "./KanaButton";
import CycleProfitLoss from "./CycleProfitLoss";
import PayoffChart from "./PayoffChart";

const Console = () => {
  const [value, setValue] = useState("");
  const [selectedTab, setSelectedTab] = useState<"call" | "put">("call");
  const [activeTab, setActiveTab] = useState("Payoff Chart");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let inputValue = e.target.value;

    if (inputValue.startsWith(".")) {
      inputValue = "0" + inputValue;
    }

    if (/^\d{0,12}(\.\d*)?$/.test(inputValue)) {
      setValue(inputValue);
    }
  };

  return (
    <div className="w-[436px] py-4 flex flex-col gap-4">
      <div>
        {/* Toggle Tabs */}
        <div className="bg-tabs flex text-sm h-14 items-center border border-white/10 rounded-t-2xl">
          <div
            onClick={() => setSelectedTab("call")}
            className={`h-full items-center px-6  flex justify-center w-1/2 cursor-pointer rounded-tl-2xl 
              ${
                selectedTab === "call"
                  ? "bg-white/[6%] text-white font-extrabold"
                  : "text-tp"
              }`}>
            Long Call OPerps
          </div>
          <div
            onClick={() => setSelectedTab("put")}
            className={`h-full items-center px-6  flex justify-center w-1/2 cursor-pointer rounded-tr-2xl 
              ${
                selectedTab === "put"
                  ? "bg-white/[6%] text-white font-extrabold"
                  : "text-tp"
              }`}>
            Long Put OPerps
          </div>
        </div>

        {/* Content Section */}
        <div className="flex flex-col gap-4 p-4 bg-card border border-white/10 rounded-b-2xl">
          <div className="flex flex-col gap-2 p-4 bg-topbarbutton border border-white/10 rounded-2xl">
            <div className="flex flex-col gap-2">
              <div className="flex items-center flex-row gap-2">
                <span className="text-tp">
                  {selectedTab === "call"
                    ? "Long Call OPerps Token"
                    : "Long Put OPerps Token"}
                </span>
                <Image src={Info} alt="Info" />
              </div>
              <input
                placeholder="0.00"
                value={value}
                onChange={handleChange}
                className="border font-bold placeholder-tp border-white/10 rounded-lg bg-tabs outline-none w-full text-xl p-4"
              />
              <div className="flex items-center flex-row gap-2 p-2 text-xs font-bold text-primary">
                <Image src={Message} alt="Info" />
                <span>Not sure how much to buy?</span>
              </div>
            </div>
            <div className="text-sm flex flex-col gap-2">
              <div className="flex items-center flex-row justify-between">
                <span className="text-ts">USDC Balance</span>
                <span className="text-th">123.00 USDC</span>
              </div>
              <div className="flex items-center flex-row justify-between">
                <span className="text-ts">
                  {selectedTab === "call" ? "LCO Balance" : "LPO Balance"}
                </span>
                <span className="text-th">12.34</span>
              </div>
            </div>
          </div>

          <div className="flex flex-row gap-2">
            <div className="w-1/2">
              <KanaButton text="Buy" color="secondary" />
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
                  percentage={selectedTab === "call" ? 750 : 600}
                  amount={selectedTab === "call" ? 1000 : 800}
                  isProfit={true}
                />
              </div>
              <div className="w-1/2">
                <CycleProfitLoss
                  title={"Next Cycle Max Loss"}
                  percentage={selectedTab === "call" ? 50 : 70}
                  amount={selectedTab === "call" ? 25 : 40}
                  isProfit={false}
                />
              </div>
            </div>
            <div className="flex flex-row justify-between text-sm">
              <span className="text-tp">Expected Leverage</span>
              <span className="text-th font-extrabold">
                {selectedTab === "call" ? "700x" : "650x"}
              </span>
            </div>
            <div className="flex flex-row justify-between">
              <span className="text-tp">Premium paid per cycle</span>
              <span className="text-th font-extrabold">
                {selectedTab === "call" ? "50%" : "45%"}
              </span>
            </div>
            <div className="flex flex-row justify-between">
              <span className="text-tp">Distribution</span>
              <span className="text-th font-extrabold">
                {selectedTab === "call"
                  ? "250 LCO : 75000 SCO"
                  : "200 LPO : 70000 SCO"}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center border border-white/10 bg-card rounded-2xl">
        {/* Tabs */}
        <div className="flex flex-row w-full h-12 border-b border-b-white/10 rounded-t-2xl">
          {["Payoff Chart", "Previous Cycles", "Pool Overview"].map(
            (title, index) => (
              <div
                key={index}
                className={`flex-1 flex justify-center items-center cursor-pointer text-xs transition-all
              ${
                activeTab === title
                  ? "bg-white/[6%] font-bold text-white"
                  : "text-gray-400"
              }
              ${index === 0 ? "rounded-tl-2xl" : ""} 
              ${index === ["Payoff Chart", "Previous Cycles", "Pool Overview"].length - 1 ? "rounded-tr-2xl" : ""}`}
                onClick={() => setActiveTab(title)}>
                {title}
              </div>
            )
          )}
        </div>

        {/* Conditionally Render PayoffChart */}
        {activeTab === "Payoff Chart" ? (
          <div className="w-full min-h-20">
            <PayoffChart />
            <div className="flex flex-col gap-1 w-full p-6 text-sm pt-0 mt-[-10px]">
              <span>Max profit </span>
              <span>Entry Price (Break-Even)</span>
            </div>
          </div>
        ) : (
          <div className="h-20" />
        )}
      </div>
    </div>
  );
};

export default Console;
