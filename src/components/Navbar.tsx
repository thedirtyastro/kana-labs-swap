import React from "react";
import Image, { StaticImageData } from "next/image";
import Logo from "../../public/images/kana-logo.svg";
import CoinSwap from "../../public/images/coins-swap-01.svg";
import BarChart from "../../public/images/bar-chart-square-01.svg";
import CoinStacked from "../../public/images/coins-stacked-03.svg";
import CoinHand from "../../public/images/coins-hand.svg";
import Grid from "../../public/images/grid-01.svg";
import Scales from "../../public/images/scales-02.svg";
import Question from "../../public/images/question.svg";

type Section = "swap" | "operps" | "stacked" | "hand" | "chart" | "grid";

type NavbarProps = {
  activeSection: Section;
  setActiveSection: (section: Section) => void;
};

const Navbar: React.FC<NavbarProps> = ({ activeSection, setActiveSection }) => {
  const menuItems: { id: Section; icon: StaticImageData }[] = [
    { id: "swap", icon: CoinSwap },
    { id: "operps", icon: Scales },
    { id: "stacked", icon: CoinStacked },
    { id: "hand", icon: CoinHand },
    { id: "chart", icon: BarChart },
    { id: "grid", icon: Grid },
  ];

  return (
    <div className="fixed top-0 left-0 bg-card flex flex-col justify-between h-screen p-4">
      <div className="flex flex-col gap-5">
        <div className="flex justify-center items-center h-16">
          <Image src={Logo} alt="logo" />
        </div>
        <div className="flex flex-col gap-2">
          {menuItems.map((item) => (
            <div
              key={item.id}
              className={`h-14 flex justify-center items-center cursor-pointer hover:bg-white/5 hover:rounded-2xl ${
                activeSection === item.id ? "bg-white/10 rounded-2xl brightness-150" : ""
              }`}
              onClick={() => setActiveSection(item.id)}
            >
              <Image src={item.icon} alt={item.id} />
            </div>
          ))}
        </div>
      </div>
      <div className="p-5 bg-[#111213] rounded-2xl">
        <Image src={Question} alt="help" />
      </div>
    </div>
  );
};

export default Navbar;
