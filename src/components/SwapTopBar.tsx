"use client";
import React, { useState } from "react";
import Image from "next/image";
import Coins from "../../public/images/coins-03.svg";
import Zap from "../../public/images/zap.svg";
import Settings from "../../public/images/settings-01.svg";
import Disconnect from "../../public/images/Variant3-1.svg";
import Copy from "../../public/images/Variant3.svg";
import MetaMask from "../../public/images/metamask-logo.svg";
import { motion } from "framer-motion";

const SwapTopBar = () => {
  const [copied, setCopied] = useState(false);

  const walletAddress = "0xwalletaddresxyz";

  const handleCopy = () => {
    navigator.clipboard.writeText(walletAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset after 2s
  };

  return (
    <div className="flex justify-center items-center w-full top-0">
      <div className="flex flex-row gap-4 justify-between items-center w-full h-fit p-3 bg-topbar rounded-b-2xl">
        {/* amount */}
        <div className="flex flex-row justify-between text-sm items-center px-6 bg-topbarbutton rounded-2xl h-12">
          <div>Your Balance</div>
          <div className="w-52 text-right">$12,876.00</div>
        </div>

        <div className="flex flex-row gap-2 items-center">
          {/* points and days active */}
          <div className="flex flex-row justify-between py-2 pl-4 pr-6 gap-3 bg-topbarbutton rounded-2xl h-12">
            <div className="flex flex-row items-center gap-2">
              <Image src={Coins} alt="Coins" />
              <div className="flex flex-col">
                <span className="text-sm font-bold text-primary">100</span>
                <span className="text-tiny/[10px]">Points earned</span>
              </div>
            </div>
            <div className="w-[1px] h-full bg-white/10"></div>
            <div className="flex flex-row items-center gap-2">
              <Image src={Zap} alt="Zap" />
              <div className="flex flex-col">
                <span className="text-sm font-bold text-primary">2</span>
                <span className="text-tiny/[10px]">Days active</span>
              </div>
            </div>
          </div>

          {/* wallet connection */}
          <div className="flex flex-row justify-between items-center py-3 px-4 gap-2 bg-topbarbutton rounded-2xl h-12">
            <Image src={MetaMask} alt="Meta mask logo" />
            <div className="w-38 font-bold text-sm text-primary">
              {walletAddress}
            </div>

            <div className="flex flex-row gap-2">
              <motion.button
                onClick={handleCopy}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="relative hover:cursor-pointer">
                <Image src={Copy} alt="Copy" />
                {copied && (
                  <motion.span
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="absolute top-[-25px] left-1/2 -translate-x-1/2 bg-black text-white text-xs rounded px-2 py-1">
                    Copied!
                  </motion.span>
                )}
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="hover:cursor-pointer"
                >
                <Image src={Disconnect} alt="Disconnect" />
                
              </motion.button>
            </div>
          </div>

          <button className="p-3 bg-[#1D1E20] rounded-2xl h-12 flex justify-center items-center hover:cursor-pointer">
            <motion.div
              whileHover={{ rotate: 90 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}>
              <Image src={Settings} alt="Settings" height={24} width={24} />
            </motion.div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SwapTopBar;
