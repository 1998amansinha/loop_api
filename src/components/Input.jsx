import React from "react";

const Input = ({ label, type, placeholder, value, onChange }) => {
  return (
    <div className="flex flex-col my-9">
      <label className="text-gray-500 text-sm font-oxygen tracking-wide">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="py-2 px-4 text-black font-semibold border border-solid border-black mt-2 rounded-sm opacity-100  placeholder:text-gray-400 placeholder:font-oxygen placeholder:tracking-wide placeholder:font-normal text-sm"
      />
    </div>
  );
};

export default Input;
