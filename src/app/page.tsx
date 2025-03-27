"use client";
import Navbar from "@/components/Navbar";
import Swap from "@/components/Swap";
import SwapTopBar from "@/components/SwapTopBar";
import { useState } from "react";

type Section = "swap" | "operps" | "stacked" | "hand" | "chart" | "grid";

export default function Home() {
  const [activeSection, setActiveSection] = useState<Section>("swap");

  return (
    <div className="bg-[#0C0C0D] flex flex-row text-[#A5A5A6]">
      <Navbar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />

      {/* Swap content */}
      {activeSection === "swap" && (
        <div className="pl-20 mr-4 ml-6 flex flex-col w-full h-screen overflow-hidden ">
          <SwapTopBar />
          <div className="overflow-y-auto h-full px-4">
            <Swap />
          </div>
        </div>
      )}
      {activeSection === "operps" && (
        <div className="pl-20 mr-4 ml-6 flex flex-col w-full h-screen overflow-hidden ">
          Operps Content
        </div>
      )}
    </div>
  );
}
