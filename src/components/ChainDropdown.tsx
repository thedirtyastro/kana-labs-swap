'use client';

import { useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import { motion } from 'framer-motion';

import Etherum from '../../public/images/ethereum.svg';
import Dropdown from '../../public/images/Swap-Variant4.svg';
import Aptos from '../../public/images/aptos.svg';
import Arbitrum from '../../public/images/arbitrum (1).svg';
import Avalanche from '../../public/images/avalanche (1).svg';
import Bsc from '../../public/images/bsc_2.svg';
import Polygon from '../../public/images/polygon1.svg';
import Solana from '../../public/images/solana.svg';
import Sui from '../../public/images/sui-sui-logo (1).svg';
import Zksync from '../../public/images/zksync.svg';

type Coin = {
  name: string;
  image: StaticImageData;
  token: string;
};

const coins: Coin[] = [
  { name: 'Aptos', image: Aptos, token: 'APT' },
  { name: 'Arbitrum', image: Arbitrum, token: 'ARB' },
  { name: 'Avalanche', image: Avalanche, token: 'AVAX' },
  { name: 'BSC', image: Bsc, token: 'BSC' },
  { name: 'ETH', image: Etherum, token: 'ETH' },
  { name: 'Polygon', image: Polygon, token: 'MATIC' },
  { name: 'Solana', image: Solana, token: 'SOL' },
  { name: 'Sui', image: Sui, token: 'SUI' },
  { name: 'Zksync', image: Zksync, token: 'ZK' },
];

const ChainDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<Coin>(coins[4]); // Default to Ethereum

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const selectChain = (coin: Coin) => {
    setSelected(coin);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="flex items-center h-10 justify-between w-full px-4 py-2 bg-topbarbutton text-white rounded-lg shadow-md focus:outline-none"
      >
        <div className="flex items-center gap-2">
          <Image src={selected.image} alt={selected.name} width={16} height={16} />
          <span className="text-sm font-bold">{selected.name} </span>{' '}
          <span className="text-tiny">{selected.token}</span>
        </div>
        <Image
          src={Dropdown}
          alt="Dropdown"
          width={20}
          height={20}
          className={`${isOpen ? 'rotate-180' : ''} transition-transform`}
        />
      </button>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="absolute left-0 mt-2 w-full bg-topbarbutton text-white rounded-lg shadow-lg overflow-hidden text-xs"
        >
          {coins.map((coin) => (
            <button
              key={coin.name}
              className="flex items-center w-full px-4 py-2 hover:bg-white/[6%]"
              onClick={() => selectChain(coin)}
            >
              <Image src={coin.image} alt={coin.name} width={12} height={12} className="mr-2" />
              {coin.name} ({coin.token})
            </button>
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default ChainDropdown;
