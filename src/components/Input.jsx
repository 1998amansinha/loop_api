import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react"; // Import eye icons

const Input = ({ label, type, placeholder, value, onChange }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex flex-col mb-2 mt-9 relative">
      <label className="text-gray-500 text-sm font-oxygen tracking-wide">
        {label}
      </label>
      <div className="relative">
        <input
          type={
            type === "password" ? (showPassword ? "text" : "password") : type
          }
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="py-2 px-4 text-black font-semibold border border-solid border-black mt-2 rounded-sm opacity-100 placeholder:text-gray-400 placeholder:font-oxygen placeholder:tracking-wide placeholder:font-normal text-sm w-full"
        />
        {type === "password" && (
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        )}
      </div>
    </div>
  );
};

export default Input;
