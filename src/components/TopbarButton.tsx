import React from 'react';
import Image from 'next/image';

interface TopbarButtonProps {
  text: string;
  leftIcon?: string;
  rightIcon?: string;
}

const TopbarButton: React.FC<TopbarButtonProps> = ({ leftIcon, text, rightIcon }) => {
  return (
    <button className="flex items-center gap-2 px-6 py-2 rounded-2xl bg-topbarbutton ">
      {leftIcon && <Image src={leftIcon} alt="Left Icon" width={20} height={20} />}
      <span>{text}</span>
      {rightIcon && <Image src={rightIcon} alt="Right Icon" width={20} height={20} />}
    </button>
  );
};

export default TopbarButton;
