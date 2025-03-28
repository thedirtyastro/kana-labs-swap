"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import MetaMask from "../../public/images/metamask-logo.svg";
import Copy from "../../public/images/Variant3.svg";
import Disconnect from "../../public/images/Variant3-1.svg";

interface ProfileStateProps {
  size?: "small" | "default"; // Size prop with "small" and "default" options
}

const ProfileState: React.FC<ProfileStateProps> = ({ size = "default" }) => {
  const [copied, setCopied] = useState(false);
  const walletAddress = "0xwalletaddresxyz";

  const handleCopy = () => {
    navigator.clipboard.writeText(walletAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset after 2s
  };

  return (
    <div className="flex flex-row justify-between items-center py-3 px-4 gap-2 bg-topbarbutton rounded-2xl h-12">
      <Image src={MetaMask} alt="Meta mask logo" />
      <div className={`${size === "small" ? "w-20" : "w-38"} font-bold text-sm text-primary truncate`}>
        {walletAddress}
      </div>

      <div className="flex flex-row gap-2">
        <motion.button
          onClick={handleCopy}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="relative hover:cursor-pointer"
        >
          <Image src={Copy} alt="Copy" />
          {copied && (
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="absolute top-[-25px] left-1/2 -translate-x-1/2 bg-black text-white text-xs rounded px-2 py-1"
            >
              Copied!
            </motion.span>
          )}
        </motion.button>

        <motion.button whileHover={{ scale: 1.1, rotate: 5 }} whileTap={{ scale: 0.9 }} className="hover:cursor-pointer">
          <Image src={Disconnect} alt="Disconnect" />
        </motion.button>
      </div>
    </div>
  );
};

export default ProfileState;
