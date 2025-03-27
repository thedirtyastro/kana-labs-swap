"use client";
import Image from "next/image";
import React, { useState } from "react";
import SameChain from "../../public/images/tabler_arrows-split-2.svg";
import DifferentChain from "../../public/images/tabler_arrows-shuffle.svg";
import Grid from "../../public/images/grid-02.svg";
import Refresh from "../../public/images/refresh-ccw-05.svg";
import Settings from "../../public/images/settings-03.svg";

import Aptos from "../../public/images/aptos.svg";
import Arbitrum from "../../public/images/arbitrum (1).svg";
import Avalanche from "../../public/images/avalanche (1).svg";
import Bsc from "../../public/images/bsc_2.svg";
import Etherum from "../../public/images/ethereum.svg";
import Polygon from "../../public/images/polygon1.svg";
import Solana from "../../public/images/solana.svg";
import Sui from "../../public/images/sui-sui-logo (1).svg";
import Zksync from "../../public/images/zksync.svg";
import AmountInput from "./AmountInput";

import Switch from "../../public/images/switch-vertical-02.svg";
import KanaButton from "./KanaButton";

const coins = [
  { name: "Aptos", image: Aptos },
  { name: "Arbitrum", image: Arbitrum },
  { name: "Avalanche", image: Avalanche },
  { name: "BSC", image: Bsc },
  { name: "Ethereum", image: Etherum },
  { name: "Polygon", image: Polygon },
  { name: "Solana", image: Solana },
  { name: "Sui", image: Sui },
  { name: "Zksync", image: Zksync },
];

const Swap = () => {
  const [activeCoin, setActiveCoin] = useState<string>("Aptos");

  return (
    <div className="w-[536px] mx-auto my-30 rounded-xl  shadow-md">
      {/* Chain Changing Buttons */}
      <div className="flex flex-row justify-between items-center -margin-[1px]">
        <div className="flex flex-row">
          <div className="flex justify-between items-center flex-row px-6 py-4 border-x border-t border-white/10 w-fit rounded-t-2xl gap-2 bg-card cursor-pointer">
            <Image src={SameChain} alt="Same Chain" />
            <span>Same Chain</span>
          </div>
          <div className="flex justify-between items-center flex-row px-6 py-4 border-x border-t border-white/10 w-fit rounded-t-2xl gap-2 bg-tabs cursor-pointer">
            <Image src={DifferentChain} alt="Cross-chain" />
            <span>Cross-chain</span>
          </div>
        </div>
        <div className="p-2 cursor-pointer">
          <Image src={Grid} alt="Grid" />
        </div>
      </div>

   <div className="bg-card border border-white/10 rounded-b-2xl rounded-tr-2xl flex flex-col gap-4 p-6">
       {/* Header */}
       <div className="flex flex-row justify-between items-center ">
        <span className="text-sm font-bold">Same-chain Swap</span>
        <div className="flex flex-row gap-2">
          <div className="p-2 cursor-pointer hover:bg-gray-200 rounded-lg">
            <Image src={Refresh} alt="Refresh" />
          </div>
          <div className="p-2 cursor-pointer hover:bg-gray-200 rounded-lg">
            <Image src={Settings} alt="Settings" />
          </div>
        </div>
      </div>

      {/* Coins Row */}
      <div className="flex flex-row gap-2 overflow-x-auto ">
        {coins.map((coin, index) => (
          <div
            key={index}
            className={`p-2 rounded-lg cursor-pointer transition-all duration-300 border ${
              activeCoin === coin.name
                ? "border-white/10 bg-white/[6%]"
                : "border-transparent"
            } hover:bg-white/6`}
            onClick={() => setActiveCoin(coin.name)}>
            <Image src={coin.image} alt={coin.name} />
          </div>
        ))}
      </div>

      <div className="relative flex flex-col items-center gap-4">
        <AmountInput text={"Pay from"}  />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-2 border border-white/10 rounded-lg cursor-pointer flex justify-center items-center w-fit bg-card z-10">
          <Image src={Switch} alt="Switch" />
        </div>
        <AmountInput  text={"Receive to"}  />
      </div>

      {/* Swap Button */}
      <KanaButton />
   </div>
    </div>
  );
};

export default Swap;
