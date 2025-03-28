import React from 'react';
import Image from 'next/image';
import Coins from '../../public/images/coins-03.svg';
import Zap from '../../public/images/zap.svg';

const PointState = () => {
  return (
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
  )
}

export default PointState