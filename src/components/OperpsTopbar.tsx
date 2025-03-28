import Image from "next/image";
import React from "react";
import Ethosx from "../../public/images/ethosx.svg";
import Card from "../../public/images/credit-card-down.svg";
import Container from "../../public/images/container.svg";
import Down from "../../public/images/chevron-down.svg";
import TopbarButton from "./TopbarButton";
import PointState from "./PointState";
import ProfileState from "./ProfileState";
import { motion } from "framer-motion";
import Settings from "../../public/images/settings-01.svg";
import Bell from "../../public/images/bell-01.svg";

const OperpsTopbar = () => {
  return (
    <div className="flex justify-center items-center w-full top-0">
      <div className="flex flex-row gap-4 justify-between items-center w-full h-fit p-3 bg-topbar rounded-b-2xl">
        <div>
          <Image src={Ethosx} alt="Ethosx" />
        </div>

        <div className="flex flex-row gap-2 ">
          <TopbarButton text="Faucet" leftIcon={Card} />
          <TopbarButton text="Test net" rightIcon={Down} leftIcon={Container} />
          <PointState />
          <ProfileState size="small" />
          <button className="p-3.5 bg-topbarbutton rounded-2xl flex justify-center items-center hover:cursor-pointer">
            <motion.div
              whileHover={{
                rotate: [0, -15, 15, -10, 10, -5, 5, 0], // Swinging motion
              }}
              transition={{ duration: 0.5, ease: "easeInOut" }} // Smooth easing
            >
              <Image src={Bell} alt="Bell" height={20} width={20} />
            </motion.div>
          </button>
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

export default OperpsTopbar;
