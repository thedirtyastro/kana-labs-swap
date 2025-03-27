import Navbar from "@/components/Navbar";
import Swap from "@/components/Swap";
import SwapTopBar from "@/components/SwapTopBar";

export default function Home() {
  
  return (
    <div className="bg-[#0C0C0D] flex flex-row text-[#A5A5A6]">
      <Navbar />
      <div className="pl-20 mr-4 ml-6 flex flex-col w-full h-screen overflow-hidden ">
        <SwapTopBar />
        <div className="overflow-y-auto h-full px-4">
          <Swap />
        </div>
      </div>
     
    </div>
  );
}
