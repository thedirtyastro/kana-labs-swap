import React from "react";
import Image from "next/image";
import Logo from "../../public/images/kana-logo.svg";
import CoinSwap from "../../public/images/coins-swap-01.svg";
import BarChart from "../../public/images/bar-chart-square-01.svg";
import CoinStacked from "../../public/images/coins-stacked-03.svg";
import CoinHand from "../../public/images/coins-hand.svg";
import Grid from "../../public/images/grid-01.svg";
import Scales from "../../public/images/scales-02.svg";

const Navbar = () => {
  return <div className="bg-[#17181A] flex w-fit p-4 h-screen ">
    <div className="flex flex-col gap-10">
        <div className="flex justify-center items-center h-16 w-14">
            <Image src={Logo} alt="logo" />
        </div>
        <div className="flex flex-col gap-2">
            <div className=" h-14 flex justify-center items-center hover:bg-white/5 hover:rounded-2xl">
            <Image src={CoinSwap} alt="logo" />
            </div>
            <div className=" h-14 flex justify-center items-center hover:bg-white/5 hover:rounded-2xl">
            <Image src={CoinStacked} alt="logo" />
            </div><div className="h-14  flex justify-center items-center hover:bg-white/5 hover:rounded-2xl">
            <Image src={CoinHand} alt="logo" />
            </div><div className="h-14  flex justify-center items-center hover:bg-white/5 hover:rounded-2xl">
            <Image src={Scales} alt="logo" />
            </div><div className="h-14  flex justify-center items-center hover:bg-white/5 hover:rounded-2xl">
            <Image src={BarChart} alt="logo" />
            </div>
            <div className=" h-14 flex justify-center items-center hover:bg-white/5 hover:rounded-2xl">
            <Image src={Grid} alt="logo" />
            </div>
        </div>
    </div>
  </div>;
};

export default Navbar;