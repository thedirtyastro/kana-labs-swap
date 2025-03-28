import Image from 'next/image';
import React from 'react';

import Info from "../../public/images/info-circle.svg";

type CycleProfitLossProps = {
  title: string;
  percentage: number;
  amount: number;
  isProfit: boolean;
};

const CycleProfitLoss: React.FC<CycleProfitLossProps> = ({ title, percentage, amount, isProfit }) => {

  return (
    <div className='flex flex-col p-2 bg-card rounded-lg'>
      <div className='flex flex-row justify-between text-xs'>
        <span>{title}</span>
        <Image src={Info} alt='info' />
      </div>
      <div className='font-bold flex gap-2 flex-row'>
        <span>{percentage}%</span>
        <span className={isProfit ? 'text-priceup' : 'text-pricedown'}>
          ~${amount}
        </span>
      </div>
    </div>
  );
};

export default CycleProfitLoss;