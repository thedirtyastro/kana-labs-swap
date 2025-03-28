'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import DropdownIcon from '../../public/images/Swap-Variant4.svg';
import Image from 'next/image';

const cycles = [
  '2 Hour Cycle',
  '3 Hour Cycle',
  '4 Hour Cycle',
  '5 Hour Cycle',
  '6 Hour Cycle',
];

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(cycles[0]); // Default to first cycle

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const selectCycle = (cycle: string) => {
    setSelected(cycle);
    setIsOpen(false);
  };

  return (
    <div className="relative ">
      <button
        onClick={toggleDropdown}
        className="flex items-center cursor-pointer justify-between h-10 w-full px-4  bg-topbarbutton  rounded-lg shadow-md focus:outline-none"
      >
        <span className='text-sm'>{selected}</span>
        <Image src={DropdownIcon} alt="Dropdown" width={16} height={16} className={`${isOpen ? 'rotate-180' : ''} transition-transform`} />
        </button>
      
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="absolute left-0 mt-2 w-full z-50 bg-topbarbutton rounded-lg shadow-lg overflow-hidden"
        >
          {cycles.map((cycle) => (
            <button
              key={cycle}
              className="w-full text-xs flex justify-center py-3 hover:bg-white/[6%]"
              onClick={() => selectCycle(cycle)}
            >
              {cycle}
            </button>
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default Dropdown;
