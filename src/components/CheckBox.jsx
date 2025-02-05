import React from "react";

const CheckBox = () => {
  return (
    <div className="flex items-center space-x-2">
      <input
        type="checkbox"
        defaultChecked
        id="terms"
        className="checkbox checkbox-accent checkbox-sm"
      />
      <label htmlFor="terms" className="text-sm text-gray-700 cursor-pointer">
        By clicking, you accept our{" "}
        <span className="text-blue-600 hover:underline">
          terms and conditions
        </span>
        .
      </label>
    </div>
  );
};

export default CheckBox;
