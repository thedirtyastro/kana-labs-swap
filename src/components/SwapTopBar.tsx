"use client";
import Image from "next/image";
import Settings from "../../public/images/settings-01.svg";

import { motion } from "framer-motion";
import ProfileState from "./ProfileState";
import PointState from "./PointState";

const SwapTopBar = () => {


  return (
    <div className="flex justify-center items-center w-full top-0">
      <div className="flex flex-row gap-4 justify-between items-center w-full h-fit p-3 bg-topbar rounded-b-2xl">
        {/* amount */}
        <div className="flex flex-row justify-between text-sm font-extrabold text-tp items-center px-6 bg-topbarbutton rounded-2xl h-12">
          <div>Your Balance</div>
          <div className="w-52 text-right">$12,876.00</div>
        </div>

        <div className="flex flex-row gap-2 items-center">
          {/* points and days active */}
          <PointState />

          {/* wallet connection */}
         <ProfileState />

          <button className="p-3.5 bg-topbarbutton rounded-2xl  flex justify-center items-center hover:cursor-pointer">
            <motion.div
              whileHover={{ rotate: 90 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}>
              <Image src={Settings} alt="Settings" height={20} width={20} />
            </motion.div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SwapTopBar;
