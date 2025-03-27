import React, { useState } from "react";

interface InputProps {
  placeholder: string;
}

const Input: React.FC<InputProps> = ({ placeholder }) => {
  const [value, setValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let inputValue = e.target.value;

    // If the first character is ".", add "0."
    if (inputValue.startsWith(".")) {
      inputValue = "0" + inputValue;
    }

    // Allow only numbers and one optional dot (.)
    if (/^\d{0,12}(\.\d*)?$/.test(inputValue)) {
      setValue(inputValue);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        className="border-b outline-none w-full text-xl py-2"
      />
    </div>
  );
};

export default Input;
