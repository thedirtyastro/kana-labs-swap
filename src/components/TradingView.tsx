"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import ChainDropdown from "./ChainDropdown";
import Dropdown from "./Dropdown";
import TimeLoader from "./TimeLoader";
import TradingViewWidget from "@/Widget/TradingViewWidget";
import Table from "./Table";

const TradingView = () => {
  const [isLong, setIsLong] = useState(true);

  return (
    <div className="flex flex-col gap-4 py-4">
      {/* Dropdown */}
      <div className="flex flex-row p-4 gap-4 items-center bg-topbar border border-white/10 rounded-2xl ">
        <div className="flex-1">
          <ChainDropdown />
        </div>
        <div className="flex-1">
          <Dropdown />
        </div>
        <div
          className="relative flex flex-row w-fit border bg-elevation border-white/10 rounded-lg font-bold cursor-pointer overflow-hidden"
          onClick={() => setIsLong(!isLong)}>
          <motion.div
            className="absolute top-0 bottom-0 w-1/2 bg-[#2ED3B780] rounded-lg"
            animate={{ x: isLong ? 0 : "100%" }}
            initial={false}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          />
          <div className="relative z-10 py-2 px-6 w-fit text-white">Long</div>
          <div className="relative z-10 py-2 px-6 w-fit text-white">Short</div>
        </div>
      </div>

      {/* Trading Chart */}
      <div>
        <div className="flex flex-row justify-between p-2 border border-white/10 rounded-t-2xl bg-card items-center">
          <span className="font-bold text-sm ml-2">Current Cycle</span>
          <div className="flex flex-row gap-6">
            <div className="flex flex-col px-4 py-2">
              <span className="text-xs ">Start Price</span>
              <span className="font-bold text-sm">$1,234</span>
            </div>
            <div className="flex flex-col px-4 py-2">
              <span className="text-xs ">Breakeven</span>
              <span className="font-bold text-sm">$1,234</span>
            </div>
            <div className="flex flex-col px-4 py-2">
              <span className="text-xs ">Leverage</span>
              <span className="font-bold text-sm">705x</span>
            </div>
            <div className="flex flex-col px-4 py-2">
              <span className="text-xs ">PnL</span>
              <span className="font-bold text-sm">25%</span>
            </div>
          </div>
        </div>

        {/* Time Progress Bar */}

        <TimeLoader />
        <div className="h-[361px] ">
          <TradingViewWidget />
        </div>
      </div>
      <Table />

    </div>
  );
};

export default TradingView;
