import React from "react";
import Input from "./Input";
import TokenChain from "./TokenChain";

interface AmountInputProps {
  text: string;
}

const AmountInput: React.FC<AmountInputProps> = ({ text }) => {
  return (
    <div className="w-full bg-tabs py-4 px-6 rounded-2xl flex flex-col gap-2 border-white/10 border">
      <div className="flex flex-row gap-4 items-center">
        <div className="flex flex-1 flex-col gap-2">
          <div className="flex flex-row text-xs items-center gap-2">
            <span className=" text-tp">{text}</span>
            <span className="text-primary font-bold cursor-pointer">Connect Wallet</span>
          </div>
          <div>
            <Input placeholder="0.0"  />
          </div>
        </div>
        <TokenChain />
      </div>
      <div className="flex flex-row justify-between items-center text-xs">
      <span>USD<span className="font-bold ml-2">0</span></span>
      <span>Balance -</span>
      </div>
    </div>
  );
};

export default AmountInput;
