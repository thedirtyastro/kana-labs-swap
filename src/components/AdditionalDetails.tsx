import { useState } from "react";
import Image from "next/image";
import Dropdown from "../../public/images/Swap-Variant4.svg";

const AdditionalDetails = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="w-full bg-card border border-white/10 rounded-2xl p-6 cursor-pointer transition-all duration-300 ease-in-out items-center"
      onClick={() => setIsOpen(!isOpen)}
    >
      {/* Header */}
      <div className="flex flex-row justify-between items-center text-sm">
        <span>Additional Details</span>
        <div
          className={`transform transition-transform duration-300 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        >
          <Image src={Dropdown} alt="Dropdown" height={16} width={16} />
        </div>
      </div>

      {/* Content */}
      <div
        className={` text-sm text-gray-300 transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-40 opacity-100 mt-4" : "max-h-0 opacity-0"
        }`}
      >
        <p>Here are some additional details about the topic. You can add any content you want here.</p>
      </div>
    </div>
  );
};

export default AdditionalDetails;
