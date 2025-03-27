import Navbar from "@/components/Navbar";
import Swap from "@/components/Swap";
import SwapTopBar from "@/components/SwapTopBar";

export default function Home() {
  
  return (
    <div className="bg-[#0C0C0D] flex flex-row text-[#A5A5A6]">
      <Navbar />
      <div className="px-4 w-full overflow-y-hidden">
      <SwapTopBar />
      <Swap />
      </div>
     
    </div>
  );
}
