import Image from "next/image";
import React from "react";

import Chain from "../../public/images/blank-icon-1.svg";
import Token from "../../public/images/blank-icon-2.svg";

const TokenChain = () => {
  return (
    <div className="flex flex-row items-center gap-2 bg-card p-4 border border-white/10 w-40 rounded-2xl transition-transform duration-300 ease-in-out  hover:bg-white/5 hover:cursor-pointer">
      <div className="relative w-fit">
        <Image src={Token} alt="token" height={40} width={40} />
        <div className="absolute bottom-0 right-0">
          <Image src={Chain} alt="chain" height={16} width={16} />
        </div>
      </div>
      <div className="flex flex-col">
        <span className="font-bold text-lg">Token</span>
        <div className="text-tiny">
          <span>on</span>
          <span className="font-bold"> Chain</span>
        </div>
      </div>
    </div>
  );
};

export default TokenChain;
