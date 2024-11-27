import React from "react";
import { LOGO_URL } from "../../constants/Images";

const Logo = () => {
  return (
    <div className="flex -mt-6 ml-6">
      <img
        className="w-44 mix-blend-multiply absolute"
        src={LOGO_URL}
        alt="LOGO"
      />
      <h1 className="text-red-700 ml-6 mt-24 font-bold text-2xl font-inter">
        LOOP API
      </h1>
    </div>
  );
};

export default Logo;
