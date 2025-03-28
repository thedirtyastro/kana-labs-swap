"use client";
import Console from "@/components/Console";
import Navbar from "@/components/Navbar";
import OperpsTopbar from "@/components/OperpsTopbar";
import Swap from "@/components/Swap";
import SwapTopBar from "@/components/SwapTopBar";
import TradingView from "@/components/TradingView";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Section = "swap" | "operps" | "stacked" | "hand" | "chart" | "grid";

export default function Home() {
  const [activeSection, setActiveSection] = useState<Section>("swap");

  return (
    <div className="bg-[#0C0C0D] flex flex-row text-[#A5A5A6]">
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />

      <AnimatePresence mode="wait">
        {activeSection === "swap" && (
          <motion.div
            key="swap"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className="pl-20 mr-4 ml-6 flex flex-col w-full h-screen overflow-hidden"
          >
            <SwapTopBar />
            <div className="overflow-y-auto h-full px-4">
              <Swap />
            </div>
          </motion.div>
        )}

        {activeSection === "operps" && (
          <motion.div
            key="operps"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className="pl-20 mr-4 ml-6 flex flex-col w-full h-screen overflow-hidden"
          >
            <OperpsTopbar />
            <div className="overflow-y-auto h-full flex flex-row gap-4">
              <div className="flex-1">
                <TradingView />
              </div>
              <Console />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}